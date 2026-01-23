const wall = document.getElementById("wall-of-text");

if (wall) {
    const fullText = wall.textContent || "";
    const repeatMarker = "aren't you? aren't you?";
    let repeatStartIndex = fullText.indexOf(repeatMarker);

    if (repeatStartIndex === -1) {
        repeatStartIndex = fullText.indexOf("aren't you?");
    }

    const measure = document.createElement("div");
    measure.setAttribute("aria-hidden", "true");
    measure.style.position = "absolute";
    measure.style.left = "-9999px";
    measure.style.top = "0";
    measure.style.visibility = "hidden";
    measure.style.pointerEvents = "none";
    measure.style.whiteSpace = "normal";
    measure.style.zIndex = "-1";
    document.body.appendChild(measure);

    const tokensFromTail = (tailText) => tailText.match(/\S+\s*/g) || [];

    const syncMeasureStyles = () => {
        const styles = getComputedStyle(wall);
        measure.style.font = styles.font;
        measure.style.letterSpacing = styles.letterSpacing;
        measure.style.wordSpacing = styles.wordSpacing;
        measure.style.textTransform = styles.textTransform;
        measure.style.textAlign = styles.textAlign;
        measure.style.lineHeight = styles.lineHeight;
        measure.style.padding = styles.padding;
        measure.style.boxSizing = styles.boxSizing;
        measure.style.width = `${wall.clientWidth}px`;
    };

    const updateWall = () => {
        if (repeatStartIndex === -1 || wall.clientWidth === 0) {
            return;
        }

        syncMeasureStyles();
        measure.textContent = "";

        const headText = fullText.slice(0, repeatStartIndex);
        const tailText = fullText.slice(repeatStartIndex);
        const headNode = document.createTextNode(headText);
        measure.appendChild(headNode);

        const tokens = tokensFromTail(tailText);
        const spans = tokens.map((token) => {
            const span = document.createElement("span");
            span.textContent = token;
            measure.appendChild(span);
            return span;
        });

        if (!spans.length) {
            wall.textContent = fullText;
            return;
        }

        const baseTop = spans[0].offsetTop;
        let cutoffIndex = fullText.length;

        for (let i = 1; i < spans.length; i += 1) {
            if (spans[i].offsetTop > baseTop + 0.5) {
                const keptTail = tokens.slice(0, i).join("");
                cutoffIndex = repeatStartIndex + keptTail.length;
                break;
            }
        }

        wall.textContent = fullText.slice(0, cutoffIndex).trimEnd();
    };

    let resizeHandle = 0;
    const scheduleUpdate = () => {
        cancelAnimationFrame(resizeHandle);
        resizeHandle = requestAnimationFrame(updateWall);
    };

    window.addEventListener("resize", scheduleUpdate);

    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(scheduleUpdate);
    }

    scheduleUpdate();
}

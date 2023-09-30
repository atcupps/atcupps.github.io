<script>
    export let text;
    export let link;
    export let target = "";
</script>

<div class="ml-9 font-medium text-lg">
    <a href={link} target={target}>{text}</a>
</div>
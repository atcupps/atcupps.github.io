<script>
    import NavLink from "./NavLink.svelte"
</script>

<div class="h-20 px-10 md:px-20 flex flex-row bg-customBg-dark navbar-border fixed w-full z-50">
    <!--C Logo on left-->
    <div class="w-1/2 inline-flex items-center"><a href="/"><img class="h-11" src="/cuppslogos/C.svg" alt="C Logo"></a></div>

    <!--Nav links on right-->
    <div class="hidden md:block md:w-1/2 md:align-middle md:inline-flex md:items-center md:justify-end">
        <NavLink text="About" link="#About"/>
        <NavLink text="Skills" link="#Skills"/>
        <NavLink text="Projects" link="#Projects"/>
        <NavLink text="Contact" link="#Contact"/>
        <NavLink text="Resume" link="/#Resume"/>
        <NavLink text="GitHub" link="https://github.com/atcupps" target="_blank"/>
    </div>
</div>

<style>
    .navbar-border {
        border-bottom: 1px solid #0A2536;
    }
</style>
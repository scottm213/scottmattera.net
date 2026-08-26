<script lang="ts">
    import Tabs from "../tabs.svelte";

</script>

<title>Scott's Site - Demos</title>

<div class="test">
    <nav class="tabs flex tabe">
        <a href="/demos"><button class="button button2" type="button"> Go Back </button></a>
    </nav>
    <header> <h2>Other Projects</h2> </header>
    <div class="flex  w-[1195px] h-[733px] rounded-b-[15px] border-solid border-[#005bb7] border-8 ">

        <div class = "flex bg-[#004281] flex-grow justify-around">

            <div class="flex flex-col items-center">
                <p>Here are some miscellaneous small projects.</p>
                <a href="/otherprojects/othercraft"><img src="/image/mineMoreIcon.png" alt="Other Minecraft Projects" class="border-2 border-transparent hover:border-white transition"> </a>
                <p class="font-bold">Other Minecraft Projects</p>
                <a href="/otherprojects/psp"><img src="/image/pspIcon.png" alt="PSP Themes" class="border-2 border-transparent hover:border-white transition"> </a>
                <p class="font-bold">Custom PSP Themes</p>
                <a href="/otherprojects/archive"><img src="/image/archiveIcon.png" alt="Website Archive" class="border-2 border-transparent hover:border-white transition"> </a>
                <p class="font-bold">scottmattera.net Archive</p>

            </div>

        </div>
    </div>
</div>
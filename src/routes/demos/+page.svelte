<script lang="ts">
    import Tabs from "../tabs.svelte";
    import MediaQuery from "../MediaQuery.svelte";
    import MobileTabs from "../mobileTabs.svelte";

</script>

<!--All images will be 237 x 72 -->

<title>Scott's Site - Demos</title>
<MediaQuery query="(min-width: 758px)" let:matches>
    {#if matches}
    <div class="test">
    <Tabs/>
        <header class="flex"> <a href="/"><img src="image/logo.png" alt="my logo" class="h-16 w-16 mr-2 border-3 border-transparent hover:border-black transition"></a>
            <h2 class="p-1">Demos</h2> </header>
    <div class="flex  w-[1195px] h-[733px] rounded-b-[15px] border-solid border-[#005bb7] border-8 ">
        <div class = "flex bg-[#004281] flex-col flex-grow items-center ">
            <div class="flex justify-around w-full">
            <div class="flex flex-col items-center">
                <a href="/fumo"><img src="/image/fumoHi.png" alt="message from fumobot" class="border-2 border-transparent hover:border-white transition"> </a>
                <p class="font-bold">FumoBot</p>
            </div>

                <div class="flex flex-col items-center">
                    <a href="/museum"><img src="/image/povrayIcon.png" alt="POV-Ray Museum" class="border-2 border-transparent hover:border-white transition"> </a>
                    <p class="font-bold">Under Construction</p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex flex-col items-center">
                    <a href="/demos/invaders"><img src="/image/galagaicon.png" alt="Galaga Clone" class="border-2 border-transparent hover:border-white transition"> </a>
                    <p class="font-bold">Galaga Clone</p>
                </div>

                <div class="flex flex-col items-center">
                    <a href="/classSite/index.html"><img src="/image/povWebsiteIcon.png" alt="POV-Ray Website" class="border-2 border-transparent hover:border-white transition"> </a>
                    <p class="font-bold">POV-Ray HTML Website</p>
                </div>
            </div>
            <div class="flex justify-around w-full">
                <div class="flex flex-col items-center">
                    <a href="/demos/spam"><img src="/image/spamIcon.png" alt="Spam Email Detector" class="border-2 border-transparent hover:border-white transition"> </a>
                    <p class="font-bold">Spam Email Detector</p>
                </div>

                <div class="flex flex-col items-center">
                    <a href="/demos/mapjams"><img src="/image/mineIcon.png" alt="Map Jams" class="border-2 border-transparent hover:border-white transition"> </a>
                    <p class="font-bold">Minecraft Map Jams</p>
                </div>
            </div>
            <a href="/otherprojects"><img src="/image/otherprojects.png" alt="Other Projects" class="border-2 border-transparent hover:border-white transition"> </a>
            <a href="/otherprojects" class="hover:underline">Other Projects</a>
        </div>
    </div>
    </div>

    {/if}
</MediaQuery>


<MediaQuery query="(max-width: 758px)" let:matches>
    {#if matches}
        <header class="flex rounded-t-[15px]"> <h2>Demos</h2> </header>
        <MobileTabs></MobileTabs>
        <div class="bg-[#004281] flex flex-col items-center justify-center">
            <div class = "flex bg-[#004281] flex-col flex-grow items-center ">
                <div class="flex justify-around w-full">
                    <div class="flex flex-col items-center">
                        <a href="/fumo"><img src="/image/fumoHi.png" alt="discord message from fumobot saying hi" class="border-2 border-transparent hover:border-white transition"> </a>
                        <p class="font-bold">FumoBot</p>
                    </div>
                    <a href="/museum"><img src="/image/povrayIcon.png" alt="POV-Ray Museum" class="border-2 border-transparent hover:border-white transition"> </a>
                    <p class="font-bold">Under Construction</p>
                </div>
                <a href="/otherprojects" class="hover:underline">Other Projects</a>
            </div>

        </div>

    {/if}
</MediaQuery>

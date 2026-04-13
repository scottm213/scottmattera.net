

<script lang="ts">
import Tabs from "../../tabs.svelte";

</script>

<title>Scott's Site - Demos</title>

<div class="test">
    <nav class="tabs flex tabe">
        <a href="/otherprojects"><button class="button button2" type="button"> Go Back </button></a>
    </nav>
    <header> <h2>Other Projects</h2> </header>
    <div class="flex  w-[1195px] h-[733px] rounded-b-[15px] border-solid border-[#005bb7] border-8 ">

        <div class = "flex bg-[#004281] flex-grow justify-around">

            <div class="flex flex-col items-center">
                <p>Here are some miscellaneous small projects.</p>
                <p class="font-bold">B.B. Hood PSP Theme</p>
                <img src="/image/bbtheme.jpeg" class="w-[350px] h-[200px]" alt="bb hood psp theme">

                <ul>
                    <li>- B.B. Hood from Darkstalkers Theme</li>
                    <li>- Credit to Grim for ripping NeoGeo Pocket Sprites</li>
                    <li>- You can download it <a class="underline hover:text-teal-600" href="/file/bbhoodtheme.ptf" download>here.</a></li>
                </ul>
                <p class="font-bold">Shermie PSP Theme</p>
                <img src="/image/shermie.jpg" class="w-[350px] h-[200px]" alt="bb hood psp theme">

                <ul>
                    <li>- Shermie from King of Fighters Theme</li>
                    <li>- You can download it <a class="underline hover:text-teal-600" href="/file/shermietheme.ptf" download>here.</a></li>
                </ul>
            </div>

        </div>
    </div>
</div>
<script lang="ts">
    import Tabs from "../tabs.svelte";

    let schoolWorkOpen = $state(false);
    let personalWorkOpen = $state(false);


    let buttonStyle1 = $state("bg-[#003468] hover:bg-[#004381]");
    let buttonStyle2 = $state("bg-[#003468] hover:bg-[#004381]");
    function schoolButtonClicked(){
        if (personalWorkOpen){
            personalWorkOpen = !personalWorkOpen;

        }
        if (schoolWorkOpen){
            buttonStyle1 = "bg-[#003468] hover:bg-[#004381]";
        }else {
            buttonStyle1 = "bg-[#003468] border-4 border-blue-600 hover:bg-[#003b73]";
        }
        schoolWorkOpen = !schoolWorkOpen;
        buttonStyle2 = "bg-[#003468] hover:bg-[#004381]";


    }

    function personalButtonClicked(){
        if (schoolWorkOpen) {
            schoolWorkOpen = !schoolWorkOpen;
        } if (personalWorkOpen) {
            buttonStyle2 = "bg-[#003468] hover:bg-[#004381]";
        }else {
            buttonStyle2 = "bg-[#003468] hover:bg-[#003b73] border-4 border-blue-600 ";
        }
        personalWorkOpen = !personalWorkOpen;
        buttonStyle1 = "bg-[#003468] hover:bg-[#004381]";

    }


</script>

<title>My Work</title>

<div> <br> </div>
<Tabs />
<header> <h2>My Work</h2> </header>
<div class = "flex flex-row">
    <div class = "square flex flex-col items-start justify-start">
        <div class="grid grid-cols-4 gap-1 ">

            <button  class = "w-33.5 h-10 {buttonStyle1} rounded-tl-lg rounded-br-lg mt-20 col-start-3 col-end-4" type="button" value="school" onclick={schoolButtonClicked}>School Projects</button>


            <button class = "w-33.5 h-10 {buttonStyle2} rounded-tl-lg rounded-br-lg hover:bg-[#004381] mt-50 col-start-3 col-end-4" type="button" value="personal "onclick={personalButtonClicked}>Personal Projects</button>
        </div>
    </div>
        <div>
            <br>
            <br>
            <br>
            {#if schoolWorkOpen}

                <div class = "workSquare overflow-y-scroll flex flex-col">
                    <h1 class ="font-bold">School Projects</h1>
                    <p class = "font-bold">Galaga Clone</p>
                    <p>- Made using Java, Java FX</p>
                    <p>- Plays similar to Space Invaders</p>
                    <p class = "font-bold">Munch Match (in progress) </p>
                    <p>- Made using Ionic, React, Typescript</p>
                    <p>- App similar to tinder, but for finding restaurants</p>
                    <p class = "font-bold">Ghidra & IDA Pro Plugins Research</p>
                    <p>- A research paper describing different plugins to assist with</p>
                    <p>reverse engineering and static malware analysis.</p>

                </div>
            {/if}

            {#if personalWorkOpen}
                <div class = "workSquare overflow-y-scroll flex flex-col">
                    <h1 class = "font-bold">Personal Projects</h1>
                    <p class = "font-bold">SleepZone (in progress)</p>
                    <p>- Made using Swift, SwiftUI</p>
                    <p>- Simple iOS app for tracking and recording the amount of hours you sleep</p>
                    <p>- Uses SwiftData for persistent data tracking</p>
                    <p>- Made in collaboration</p>
                    <p class = "font-bold">POV-Ray Projects </p>
                    <p>- More of a passion project, I learned the old 3D rendering software
                    POV-Ray to make old 90s styled 3D renders</p>
                    <p>- Uses POV-Ray's scripting language.</p>
                    <p>- Made SOLO</p>
                    <p class = "font-bold">Asteroid War Minecraft Map</p>
                    <p>- Minecraft map where you take control of a spaceship's cannon,
                   shooting incoming asteroids and dealing with problems on the ship.
                    </p>
                    <p>- I worked on most of the building/design/many ideas, as well as making some
                    3D models, 2D sprites, and programming for some of the events that can happen.</p>
                    <p>- Made in collaboration</p>
                    <p class ="font-bold">This Website</p>
                    <p>- This website is also a personal project of mine!</p>
                    <p>- I learned Svelte/SvelteKit, and Tailwind CSS in order to make it.</p>
                    <p>- Made SOLO</p>
                </div>
            {/if}

    </div>
</div>
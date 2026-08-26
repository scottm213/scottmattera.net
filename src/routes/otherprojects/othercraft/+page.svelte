

<script lang="ts">
    import Tabs from "../../tabs.svelte";

</script>

<title>Scott's Site - Other Minecraft</title>

<div class="test">
    <nav class="tabs flex tabe">
        <a href="/otherprojects"><button class="button button2" type="button"> Go Back </button></a>
    </nav>
    <header> <h2>Other Minecraft Projects</h2> </header>
    <div class="flex  w-[1195px] h-[733px] rounded-b-[15px]  border-solid border-[#005bb7] border-8 ">

        <div class = "flex bg-[#004281] overflow-y-scroll flex-grow justify-around">

            <div class="flex flex-col items-center pl-8 pr-8" >
                <p>Minecraft has been an important game throughout my life, so of course I have other projects made in it.</p>
                <h2 class="text-2xl font-bold mb-2 text-center" >TARDIS Mod</h2>
                <p class="text-center">The TARDIS mod was a Doctor Who themed Minecraft mod me and two friends worked on.
                It was going to include a TARDIS with its own dimension, using Immersive Portals to make it appear as if it
                really is bigger on the inside. We didn't get very far with the implementation of the mod, but I made a tardis model
                and some textures for the interior that I wanted to share!</p>
                <img src="/image/tardisinterior.png" alt="TARDIS Interior" />
                <p>Interior of the TARDIS, built by me - with textures by me. The center console was going
                to be a custom model, but I never finished the model.</p>
                <img src="/image/tardisexterior.png" alt="TARDIS Exterior" />
                <p>Exterior of the TARDIS. It even had a door opening and closing animation, all done
                in Blockbench by me.</p>
                <h2 class="text-2xl font-bold mb-2 text-center" >Dragon Ball Mod</h2>
                <p>This was a mod me and one friend wanted to make, but never really got around to the actual coding.
                The idea was pretty cool, you'd have to find 7 Dragon Balls which are randomly spawned around the world.
                Once you collect them all, you can summon Shenron and have your wish granted. The catch is -
                Shenron would've connected to AI and have been able to actually grant your wish using commands.
                Despite never implementing any of these features, I still made some models for the mod. </p>
                <img src="/image/shenron.png" alt="Shenron" />
                <p>This is the model of Shenron that I made. Definitely complicated to animated!</p>
                <div class="flex items-center flex-row">
                    <img src="/image/dragonball.png" alt="Dragon Ball" class="h-48 w-48 object-contain" />
                    <img src="/image/stoneball.png" alt="Stone Dragon Ball"  class="h-48 w-48 object-contain"/>
                </div>
                <p>Model of the Dragon balls that would be found by players. Once Shenron was summoned,
                they would spread across the map, turn into stone balls, and be unusable for an amount of time.</p>


            </div>

        </div>
    </div>
</div>
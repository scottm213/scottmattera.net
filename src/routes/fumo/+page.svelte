<script lang="ts">
    import Tabs from "../tabs.svelte";

</script>

<title>Scott's Site - FumoBot</title>

<nav class="tabs flex tabe">
    <a href="/demos"><button class="button button2" type="button"> Go Back </button></a>
</nav>
<div class="test">

    <header> <h2>FumoBot</h2> </header>
        <div class = "flex bg-[#004281] flex-grow flex-col overflow-y-scroll max-h-[733px] h-[733px] rounded-b-[13px] rounded-bl-[13px] pl-2">
            <h2  class="text-2xl font-bold mb-2 text-center" >What is FumoBot?</h2>
            <p>FumoBot is a Discord bot with tons of funny features.</p>

            <p class="max-w-[800px]">Initially, it was designed with the purpose of tracking the AmiAmi website to see when Touhou Fumo plushes, which are extremely
            sought after, were restocked. However, ever since the API that got search results from AmiAmi stopped working, it has found new life with all sorts
            of activities and features. <br>
            Since this bot will never be public, here I will demonstrate many of the features I have implemented!</p>
            <h2  class="text-2xl font-bold mb-2 text-center" >Features</h2>
            <h2  class="font-bold text-[1.25rem] bg-[#003870] mb-[0]">FumoPoints</h2>
            <img src="/image/fumopoints.png" alt="fumopoints" class="h-100 w-150">
            <p class="bg-[#003870]">Fumopoints are one of the most in depth features of FumoBot.</p>
            <ul class="list-disc pl-6 bg-[#00498e]">
                <li>Fumopoints are gained by performing various actions across FumoBot, like playing games (like the brainrot and Fortnite guessing games)</li>
                <li>Users can donate FumoPoints to each other! (has special checks for people trying to donate negative points or break the integer limit, thanks to some HILARIOUS people)</li>
                <li>Fumopoints can be spent either gambling (just a simple random chance) or with the Gacha game.</li>
            </ul>
            <div class="flex flex-row">
                <img src="image/leaderboard.png"  alt="leaderboard" class=" mr-1 h-75 w-75">
                <img src="image/donation.png" alt="leaderboard" class="h-75 w-125">
            </div>
            <h2  class="font-bold mb-2">The Fortnite Shop</h2>
            <img src="/image/fortnite_command_gif.gif"  class="h-100 w-150" alt="Fortnite Command">
            <ul class="list-disc pl-6">
                <li>Uses the fortnite API to get new items added today</li>
                <li>User can sort by item type</li>
            </ul>
            
        </div>


</div>

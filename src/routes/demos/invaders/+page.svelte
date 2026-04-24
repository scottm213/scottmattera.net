<script lang="ts">
    import Tabs from "../../tabs.svelte";
    let jproUrl = "https://munchmatch.scottmattera.net";

    function refresh(){
        jproUrl = jproUrl;
        location.reload();
    }
</script>

<title>Scott's Site - Galaga</title>

<nav class="tabs flex tabe">
    <a href="/demos"><button class="button button2" type="button"> Go Back </button></a>
</nav>
<div class="test">

    <header> <h2>Galaga/Space Invaders</h2> </header>
    <div class = "flex bg-[#004281] flex-grow flex-row overflow-y-scroll max-h-[733px] h-[733px] rounded-b-[13px] rounded-bl-[13px] pl-2">
        <div class="w-[50%] h-full">
            <iframe
                    src={jproUrl}
                    title="Galaga Clone"
                    class="w-full h-full border-0"
                    allow="fullscreen"
            ></iframe>
        </div>
        <button class = "flex shrink-1 flex-col w-33.5 h-10 rounded-tl-lg rounded-br-lg bg-amber-700 hover:bg-[#FFFFFF] mt-50 col-start-3 col-end-4" type="button" value="personal" onclick={refresh}>Restart Game</button>
        <p>Click into the window, use W and D to move left and right, and space to shoot!</p>
    </div>


</div>
<script lang="ts">
    import "../app.css";
    import Tabs from "./tabs.svelte";
    import MobileTabs from "./mobileTabs.svelte";
    import {fade} from "svelte/transition"
    import MediaQuery from "./MediaQuery.svelte";








    let imageExists = $state(true);
    let images = ["/image/saturn.png", "/image/bishop.png","/image/reflectiveOrbs.png" ];
    let buttonStyle2 = "px-5 py-0.1 rounded-lg text-gray-200 bg-gray-200 hover:bg-gray-100 opacity-50";
    let buttonStyle1 = "px-5 py-0.1 rounded-lg text-gray-700 bg-gray-700 hover:bg-gray-500 opacity-50";
    let picChange = $state(0);


    function buttonClicked(buttonNum: number){
        picChange = buttonNum;
    }


    function setButtonStyle(butNum:number){
        if (picChange === 0 && butNum === 0){
            return buttonStyle2;
        } else if (picChange === 1 && butNum === 1){
            return buttonStyle2;
        } else if (picChange === 2 && butNum === 2){
            return buttonStyle2;
        }else{
            return buttonStyle1;
        }
    }

</script>


<title>Scott's Site</title>

<MediaQuery query="(min-width: 758px)" let:matches>
    {#if matches}
    <div class="test">
    <Tabs/>
    <header class="flex"> <h2>Scott's Website</h2> </header>
    <div class = "flex flex-row ">
        <div class = "square flex flex-col items-center">
            <p>It's a website. </p>
            <img src="/image/tuxPC.gif" alt="welcome to internet" class="h-13 w-20">
            <p>Pardon our appearances! Site is still under construction!</p>

        </div>
        <div class = "flex flex-col flex-1 min-w-0">
            <br>
            <p>Here's some renders by me </p>
            <br>
        <div class = "relative w-full max-w-[600px] aspect-[4/3]">
                {#key picChange}
                <img class="absolute inset-0 w-full h-full object-cover" transition:fade src={images[picChange]} alt="Reflective Orbs">
                {/key}

            <div class = "absolute bottom-2 left-1/2 -translate-x-1/2  grid grid-cols-9 gap-1">
                <button class = "{setButtonStyle(0)} col-start-3 " type="button" onclick={() => buttonClicked(0)} >.</button>
                <button class = "{setButtonStyle(1)} col-start-5" type="button" onclick={() => buttonClicked(1)} >.</button>
                <button class = "{setButtonStyle(2)} col-start-7 " type="button" onclick={() => buttonClicked(2)} >.</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/if}
</MediaQuery>
<!--For this page, do media queries like this because whatever. but for the other pages, make two files, one for mobile and one for regular build
 and then have them imported, and call them in the media query (like tabs)-->
<MediaQuery query="(max-width: 758px)" let:matches>
    {#if matches}
        <header class="flex rounded-t-[15px]"> <h2>Scott's Website</h2> </header>
        <MobileTabs></MobileTabs>
        <div class="bg-[#004281] flex flex-col items-center justify-center">
            <p>It's a website.</p>

                <br>
                <p>Here's some renders by me </p>
                <br>
                <div class = "relative w-full max-w-[600px] aspect-[4/3]">
                    {#key picChange}
                        <img class="absolute inset-0 w-full h-full object-cover" transition:fade src={images[picChange]} alt="Reflective Orbs">
                    {/key}

                    <div class = "absolute bottom-2 left-1/2 -translate-x-1/2  grid grid-cols-9 gap-1">
                        <button class = "{setButtonStyle(0)} col-start-3 " type="button" onclick={() => buttonClicked(0)} >.</button>
                        <button class = "{setButtonStyle(1)} col-start-5" type="button" onclick={() => buttonClicked(1)} >.</button>
                        <button class = "{setButtonStyle(2)} col-start-7 " type="button" onclick={() => buttonClicked(2)} >.</button>
                    </div>
                </div>
            </div>


        <p>WARNING: AS LONG AS THIS P EXISTS THE MOBILE BUILD IS <em> NOT </em> FINISHED </p>

    {/if}
</MediaQuery>





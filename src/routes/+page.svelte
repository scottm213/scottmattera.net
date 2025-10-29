<script lang="ts">
    import "../app.css";
    import Tabs from "./tabs.svelte";
    import {fade} from "svelte/transition"








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

<div> <br> </div>
<Tabs/>
<header> <h2>Scott's Website</h2> </header>
<div class = "flex flex-row ">
    <div class = "square">
        <p>It's a website. </p>






    </div>
    <div class = "flex flex-col ">
        <br>
        <p>Here's some renders by me </p>
        <br>
    <div class = "relative h-96 w-[512px]">
            {#key picChange}
            <img class="absolute" transition:fade src={images[picChange]} height=384 width=512 alt="Reflective Orbs">
            {/key}

        <div class = "absolute bottom-2 left-1/2 -translate-x-1/2  grid grid-cols-9 gap-1 justify-center">
            <button class = "{setButtonStyle(0)} col-start-3 col-end-3 " type="button" onclick={() => buttonClicked(0)} >.</button>
            <button class = "{setButtonStyle(1)} col-start-5 col-end-5" type="button" onclick={() => buttonClicked(1)} >.</button>
            <button class = "{setButtonStyle(2)} col-start-7 col-end-7" type="button" onclick={() => buttonClicked(2)} >.</button>
        </div>
    </div>
    </div>
</div>






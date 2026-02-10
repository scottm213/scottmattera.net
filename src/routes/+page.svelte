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


<div class="test">
<Tabs/>
<header class="flex"> <h2>Scott's Website</h2> </header>
<div class = "flex flex-row ">
    <div class = "square">
        <p class="itswebsite">It's a website. </p>






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






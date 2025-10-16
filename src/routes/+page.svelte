<script>

    import "../app.css";
    import Tabs from "./tabs.svelte";


    let img0 = "/image/reflectiveOrbs.png";
    let img1 = "/image/bishop.png";
    let img2 = "/image/saturn.png";
    let picChange = $state(0);

    function buttonClicked1(){
        picChange = 0;
    }
    function buttonClicked2(){
        picChange = 1;
    }
    function buttonClicked3(){
        picChange = 2;
    }

</script>


<title>Scott's Site</title>

<div> <br> </div>
<Tabs/>
<header> <h2>Scott's Website</h2> </header>
<div class = "flex flex-row">
    <div class = "square">
        <p>It's a website. </p>

        <img src="https://cyber.dabamos.de/88x31/aimlink.gif" alt="Great Graphic">

        <p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>


    </div>
    <div class = "flex flex-col ">
        <br>
        <p>Here's some renders by me </p>
        <br>
    <div class = "w-125">
        {#if picChange == 0}
            <img src={img0} height=384 width=512 alt="Reflective Orbs">
        {/if}
        {#if picChange == 1}
            <img src={img1} height=384 width=512 alt="Reflective Orbs">
        {/if}
        {#if picChange == 2}
            <img src={img2} height=384 width=512 alt="Reflective Orbs">
        {/if}
        <div class = "grid grid-cols-9 gap-1 justify-center">
            <button class = "px-5 py-0.1 rounded-lg text-gray-200 bg-gray-200 col-start-3 col-end-3
                                " type="button" onclick={buttonClicked1} >.</button>
            <button class = "px-5 py-0.1 rounded-lg text-gray-200 bg-gray-200 col-start-5 col-end-5
                                " type="button" onclick={buttonClicked2} >.</button>
            <button class = "px-5 py-0.1 rounded-lg text-gray-200 bg-gray-200 col-start-7 col-end-7
                                " type="button" onclick={buttonClicked3} >.</button>
        </div>
    </div>
    </div>
</div>

<div class = "fixed bottom-0 right-4 p-4">
    <p>Last Modified: </p>
</div>





<script>

    import "../app.css";
    import Tabs from "./tabs.svelte";

    let img0 = "/image/reflectiveOrbs.png";
    let img1 = "/image/bishop.png";
    let img2 = "/image/saturn.png";
    let picChange = $state(0);
    function buttonClicked(){
        if (picChange == 2){
            picChange = 0
        } else {
            picChange += 1;
        }


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
    <div>
        {#if picChange == 0}
            <img src={img0} height=384 width=512 alt="Reflective Orbs">
        {/if}
        {#if picChange == 1}
            <img src={img1} height=384 width=512 alt="Reflective Orbs">
        {/if}
        {#if picChange == 2}
            <img src={img2} height=384 width=512 alt="Reflective Orbs">
        {/if}

        <button class = "button button2" type="button" onclick={buttonClicked} >Click me</button>

    </div>
</div>

<div class = "fixed bottom-0 right-4 p-4">
    <p>Last Modified: </p>
</div>





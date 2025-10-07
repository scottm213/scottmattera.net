<script>

    let workOpen = $state(false);
    function buttonClicked(){
        console.log("Clicked");
        workOpen = !workOpen;
    }
</script>

<title>My Work</title>

<div> <br> </div>
<a href = "https://scottmattera.net">
    <button class = "button button2" type="button">Home</button> </a>
<a href = "/work">
    <button class = "button button1" type="button">Projects</button> </a>
<a href = "/about">
    <button class = "button button2" type="button">About Me</button> </a>
<a href = "/other">
    <button class = "button button2" type="button">Other Stuff</button> </a>
<header> <h2>My Work</h2> </header>
<div class = "square flex flex-col items-start justify-start">
    <div class="grid grid-cols-4 gap-2 ">

        <button  class = " button button3 mt-20 col-start-3 col-end-4" type="button" onclick={buttonClicked}>School Projects</button>


        <button class = " button button3 mt-50 col-start-3 col-end-4" type="button">Personal Projects</button>


    </div>
    {#if workOpen}
        <p class = "justify-start">
            This text needs to be on the right.
        </p>
    {/if}
</div>
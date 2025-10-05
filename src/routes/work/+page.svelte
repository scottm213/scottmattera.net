<script>

    let workOpen = $state(false);
    import Tabs from "../tabs.svelte";
    function buttonClicked(){
        console.log("Clicked");
    }
</script>

<title>My Work</title>

<div> <br> </div>
<Tabs/>
<header> <h2>My Work</h2> </header>
<div class = "square flex flex-col">

    <button  class = "mt-30 button button3" type="button" onclick={buttonClicked}>School Projects</button>


    <a href = "https://scottmattera.net/work"> <button class = "mt-80 button button3" type="button">Personal Projects</button> </a>

</div>
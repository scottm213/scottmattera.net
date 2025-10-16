<script>
    import Tabs from "../tabs.svelte";

    let schoolWorkOpen = $state(false);
    let personalWorkOpen = $state(false);
    function schoolButtonClicked(){
        if (!personalWorkOpen){
            schoolWorkOpen = !schoolWorkOpen;
        }

    }

    function personalButtonClicked(){
        if (!schoolWorkOpen) {
            personalWorkOpen = !personalWorkOpen;
        }

    }


</script>

<title>My Work</title>

<div> <br> </div>
<Tabs />
<header> <h2>My Work</h2> </header>
<div class = "flex flex-row">
    <div class = "square flex flex-col items-start justify-start">
        <div class="grid grid-cols-4 gap-2 ">

            <button  class = " button button3 mt-20 col-start-3 col-end-4" type="button" value="school" onclick={schoolButtonClicked}>School Projects</button>


            <button class = " button button3 mt-50 col-start-3 col-end-4" type="button" value="personal "onclick={personalButtonClicked}>Personal Projects</button>
        </div>
    </div>
        <div>
            <br>
            <br>
            <br>
            {#if schoolWorkOpen}

                <div class = "workSquare overflow-y-scroll">
                    <h1 class ="font-bold">School Projects</h1>
                </div>
            {/if}

            {#if personalWorkOpen}
                <div class = "workSquare overflow-y-scroll">
                    <h1>Personal Projects</h1>
                </div>
            {/if}

    </div>
</div>
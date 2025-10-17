<script>
    import Tabs from "../tabs.svelte";

    let schoolWorkOpen = $state(false);
    let personalWorkOpen = $state(false);


    let buttonStyle1 = $state("bg-[#003468] hover:bg-[#004381]");
    let buttonStyle2 = $state("bg-[#003468] hover:bg-[#004381]");
    function schoolButtonClicked(){
        if (personalWorkOpen){
            personalWorkOpen = !personalWorkOpen;

        }
        if (schoolWorkOpen){
            buttonStyle1 = "bg-[#003468] hover:bg-[#004381]";
        }else {
            buttonStyle1 = "bg-[#003468] border-4 border-blue-600 hover:bg-[#003b73]";
        }
        schoolWorkOpen = !schoolWorkOpen;
        buttonStyle2 = "bg-[#003468] hover:bg-[#004381]";


    }

    function personalButtonClicked(){
        if (schoolWorkOpen) {
            schoolWorkOpen = !schoolWorkOpen;
        } if (personalWorkOpen) {
            buttonStyle2 = "bg-[#003468] hover:bg-[#004381]";
        }else {
            buttonStyle2 = "bg-[#003468] hover:bg-[#003b73] border-4 border-blue-600 ";
        }
        personalWorkOpen = !personalWorkOpen;
        buttonStyle1 = "bg-[#003468] hover:bg-[#004381]";

    }


</script>

<title>My Work</title>

<div> <br> </div>
<Tabs />
<header> <h2>My Work</h2> </header>
<div class = "flex flex-row">
    <div class = "square flex flex-col items-start justify-start">
        <div class="grid grid-cols-4 gap-2 ">

            <button  class = "w-37.5 h-10 {buttonStyle1}  mt-20 col-start-3 col-end-4" type="button" value="school" onclick={schoolButtonClicked}>School Projects</button>


            <button class = "w-37.5 h-10 {buttonStyle2} hover:bg-[#004381] mt-50 col-start-3 col-end-4" type="button" value="personal "onclick={personalButtonClicked}>Personal Projects</button>
        </div>
    </div>
        <div>
            <br>
            <br>
            <br>
            {#if schoolWorkOpen}

                <div class = "workSquare overflow-y-scroll flex flex-col">
                    <h1 class ="font-bold">School Projects</h1>
                    <p>Space Invaders</p>
                </div>
            {/if}

            {#if personalWorkOpen}
                <div class = "workSquare overflow-y-scroll flex flex-col">
                    <h1 class = "font-bold">Personal Projects</h1>
                </div>
            {/if}

    </div>
</div>
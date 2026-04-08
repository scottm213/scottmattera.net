<script lang="ts">


    let buttonClick = $state(false);
    let dialog;


    function buttonClicked(){
        dialog.showModal();
    }
    function closeButtonClicked(){
        dialog.close()
    }




</script>
<style>
    .dialog-overlay {
        position: fixed; /* Position relative to the viewport */
        width: 100vw;
        height: 100vh;
        background-color: rgba(1, 44, 92, 0.0);

        z-index: 999;

    }

    .dialog-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;

    }
    .dialog-content p {
        width: max-content;
        max-width: 100%;
    }

    .dialogImg {
        display: block;
        max-width: 60%;
        height: auto;
    }
    dialog::backdrop {
        background-color: rgba(1, 44, 92, 0.6);

    }
</style>

<title>Scott's Site - Museum</title>

<nav class="tabs flex tabe">
    <a href="/demos"><button class="button button2" type="button"> Go Back </button></a>
</nav>
<header> <h2> UNDER CONSTRUCTION</h2></header>



<div class="flex  w-[1195px] h-[733px] rounded-b-[15px] border-solid border-[#005bb7] border-8 ">
    <div class = "flex bg-[#004281] flex-col flex-grow items-center ">

            <dialog bind:this={dialog} class="modal dialog-overlay">
                <div class="dialog-content flex flex-col justify-center items-center ">

                    <div class="flex w-[100%] justify-center">
                        <img src="image/bgcand1.jpg"  alt="hi" class=" dialogImg">
                        <button class=" bg-red-600 h-[2rem] w-[2rem] rounded-2xl text-white" onclick={closeButtonClicked}>X</button>

                    </div>
                    <div class="m-2  w-[60%]">
                        <p class="bg-[#012c5c] p-2 text-white ">Here is some text we will need to do the midpoint lab but now we have assignment 4 which is midpoint and
                            scanline algorithm. thats scary but at least it uses cimg, still havent gotten/// NOTE THAT THIS IMAGE IS NOT MINE, it's only here as a test for this click feature,
                            it will be updated eventually</p>
                    </div>
                </div>

            </dialog>



        <ul class="museumUL">
            <li >
                <button type="button" onclick={buttonClicked} value="test" ><img src="image/bgcand1.jpg"  alt="hi" class=" hoverImg"></button>
            </li>
        </ul>

    </div>
</div>


<div>



</div>

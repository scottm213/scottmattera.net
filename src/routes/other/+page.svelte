<script>
    import Tabs from "../tabs.svelte";
</script>

<title>Links</title>

<div> <br> </div>
<Tabs />
<header> <h2>My Links</h2> </header>
<div class = "flex flex-row">
    <div class = " square">
        <p>Check out my sites!</p>
    </div>
    <div class = "otherSquare bg-[#004281]  ">
        <div class = "flex flex-col ">
            <br>
            <a href = "https://github.com/scottm213" target="_blank" class = "hover:bg-gray-200 text-3xl bg-gray-100 border-2 border-gray-200 text-gray-700 rounded h-15 w-35 inline-flex items-center">
                <img src="/image/mark-github.svg" class = "h-10 w-10" alt="github logo">Github</a>
            <br>
            <a href = "https://www.linkedin.com/in/scott-mattera/" target="_blank" class = "hover:bg-gray-200 text-2xl bg-gray-100 border-2 border-gray-200 text-gray-700 rounded h-15 w-35 inline-flex items-center">
                <img src="/image/LinkedIn_icon.svg" class = "h-10 w-10" alt="github logo">LinkedIn</a>
        </div>
    </div>
</div>
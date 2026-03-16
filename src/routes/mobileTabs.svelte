<script lang="ts">
    import { page } from '$app/state';

    import "../app.css";
    function getCurrentPage(hrefItem:String){
        if (page.url.pathname === hrefItem){
            return " button1mobile w-[100%]  border border-solid border-white  ";
        }
        return " button2mobile button1mobile w-[100%] border border-solid border-black ";

    }
</script>
<nav class=" flex w-[100%] max-w-[758px]">
    <a href = "/" class = "max-w-[252px] w-[100%]">
        <button class = {getCurrentPage("/")} type="button">Home</button> </a>
    <a href = "/work" class = "max-w-[252px] w-[100%]">
        <button class = {getCurrentPage("/work")} type="button">Projects</button> </a>
    <a href = "/work" class = "max-w-[252px] w-[100%]">
        <button class = {getCurrentPage("/work")} type="button">Burger</button> </a>



</nav>


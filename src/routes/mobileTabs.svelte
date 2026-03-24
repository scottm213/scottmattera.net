<script lang="ts">
    import { page } from '$app/state';

    import "../app.css";
    function getCurrentPage(hrefItem:String){
        let basePages = ["/", "/work"];
        if (page.url.pathname === hrefItem){
            return " button1mobile w-[100%]  border border-solid border-white  ";
        } else if (!basePages.includes(page.url.pathname) && hrefItem === "/side"){
            return " button1mobile w-[100%]  border border-solid border-white  ";
        }
        return " button2mobile  w-[100%] border border-solid border-black ";

    }
</script>
<nav class=" flex w-[100%] max-w-[758px]">
    <a href = "/" class = "max-w-[342px] w-[100%]">
        <button class = {getCurrentPage("/")} type="button">Home</button> </a>
    <a href = "/work" class = "max-w-[342px] w-[100%]">
        <button class = {getCurrentPage("/work")} type="button">Projects</button> </a>
    <ul class = "max-w-[74px] w-[100%]">
        <li>
            <button class = {getCurrentPage("/side")}
                    type="button">&#9166;</button>


            <ul class = "max-w-[74px] w-[100%]">
                <li>
                    <a href="/about"><button class="disappear button2mobile button1mobile w-[100%] border border-solid border-black">About Me</button></a>
                </li>
                <li>
                    <a href="/demos"><button class="disappear button2mobile button1mobile w-[100%] border border-solid border-black">Demos</button></a>
                </li>

            </ul>
        </li>

    </ul>

</nav>


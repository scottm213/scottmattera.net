<script>
    let currentButtonClass = "button button2"
    import { page } from '$app/state';
    function getCurrentPage(hrefItem){
        console.log(page.url.pathname);
        if (page.url.href === hrefItem){
            return currentButtonClass = "button button1";
        }
    }
</script>



<nav class="tabs">
    <a href = "https://scottmattera.net">
        <button class = {getCurrentPage("https://scottmattera.net")} type="button">Home</button> </a>
    <a href = "/work">
        <button class = {getCurrentPage("https://scottmattera.net/work")} type="button">Projects</button> </a>
    <a href = "/about">
        <button class = {getCurrentPage("https://scottmattera.net/about")} type="button">About Me</button> </a>
    <a href = "/other">
        <button class = {getCurrentPage("https://scottmattera.net/other")} type="button">Other Stuff</button> </a>
</nav>
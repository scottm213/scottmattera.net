<script lang="ts">
    import { page } from '$app/state';
    function getCurrentPage(hrefItem:String){
        if (page.url.pathname === hrefItem){
            return "button button1 ";
        }
        return "button button2 ";

    }
</script>
<nav class="tabs flex">
    <a href = "/">
        <button class = {getCurrentPage("/")} type="button">Home</button> </a>
    <a href = "/work">
        <button class = {getCurrentPage("/work")} type="button">Projects</button> </a>
    <a href = "/about">
        <button class = {getCurrentPage("/about")} type="button">About Me</button> </a>
    <a href = "/other">
        <button class = {getCurrentPage("/other")} type="button">My Links</button> </a>
    <a href = "/demos">
        <button class = {getCurrentPage("/demos")} type="button">Demos</button>
    </a>
</nav>
<script lang="ts">
    let bPressed = $state(false);
    function onBClick(){
         bPressed = !bPressed;
    }
</script>


<div>
    <h1>
        Hello! Secure ED is compromised!
    </h1>
    <button class = "bg-amber-800" onclick = {onBClick}>Click to remove virus</button>

    {#if bPressed}
        <p>Virus</p>
    {/if}
</div>
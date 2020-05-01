<script>
  let someText = `Frontend Developer at Interacso`;
  let count = 0;
  let styles = {darkMode: false}
  function handleClick() {
    count +=1;
  }
  
  function toggle() {
    styles.darkMode = !styles.darkMode;
    window.document.body.classList.toggle('dark-mode')
  }
</script>

<style>
  p {
    color: var(--theme-color)
  }
</style>

<div class="About">
  {#if !styles.darkMode}
    <p>{someText}</p>
  {:else}
    <p>Hello DarkMode!</p>
  {/if}
  <button on:click={handleClick}>Click {count === 0 ? '' : count}</button>
  <button on:click={toggle}>DarkMode</button>
</div>
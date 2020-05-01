<script>
  import { count } from '../stores/store.js';
  
  function handleClick() {
    count.update(n => n + 1);
  }
</script>

<style>
  button {
    background-color: #f76027;
    color: white;
    border: none;
    border-radius: 4px;
    padding: .5rem;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>

<button on:click={handleClick}>
  Click {$count === 0 ? '' : $count}
</button>
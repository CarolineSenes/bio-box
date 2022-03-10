<script>
  import { onMount, onDestroy } from "svelte";
  //import du store
  import products from "../../stores/defaultProducts";

</script>

<h1>Hello from Products Components</h1>
{#each $products as product}
  <h2>{product.title}</h2>
{/each}

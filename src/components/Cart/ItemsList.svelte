<script>
  import Item from "../Cart/Item.svelte";
  import cartStore from "../../stores/cartStore";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
</script>

<section class="cart-items">
  <article>
    {#each $cartStore as cartItem, index (cartItem.id)}
      <Item {...cartItem}/>
      {:else}
      <h2 class="empty-cart">est vide ...</h2>
    {/each}
  </article>
</section>

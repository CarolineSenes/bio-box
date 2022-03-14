<script>
  import Item from "../Cart/Item.svelte";
  import cartStore, {cartTotal, setStorageCart} from "../../stores/cartStore";
  import { fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import {afterUpdate} from "svelte"
  afterUpdate(()=>{
    setStorageCart($cartStore)
  })
</script>

<section class="cart-items">
  <article>
    {#each $cartStore as cartItem, index (cartItem.id)}
      <div
        in:fly={{ delay: (index + 1) * 300, x: 100 }}
        out:fly={{ x: -100 }}
        animate:flip
      >
        <Item {cartItem} />
      </div>
    {:else}
      <h2 class="empty-cart">est vide ...</h2>
    {/each}
  </article>
  <h3 class="cart-total">Total : {$cartTotal}€</h3>
</section>

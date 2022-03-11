<script>
  import globalStore from "../../stores/globalStore";
  import { fly, fade, blur } from "svelte/transition";
  import { link } from "svelte-routing";
  import ItemsList from '../Cart/ItemsList.svelte'
  let user = false;
</script>

<div class="cart-overlay" transition:blur>
  <div class="cart-container" transition:fly={{ x: 100 }}>
    <div class="cart" transition:fade={{ delay: 250 }}>
      <!--cart header-->
      <div class="cart-header">
        <button
          class="btn-close"
          on:click={() => globalStore.toggleItem("cart", false)}
        >
          <i class="fas fa-window-close" />
        </button>
        <h2 class="cart-title">Votre panier</h2>
        <span />
      </div>

      <!--cart products-->
      <ItemsList />

      <!--cart footer-->
      <div class="cart-footer">
        {#if user}
          <a
            href="/checkout"
            use:link
            class="btn btn-primary btn-block"
            on:click={() => globalStore.toggleItem("cart", false)}>Paiement</a
          >
        {:else}
          <p class="cart-login">
            Pour procéder au règlement, merci de vous connecter.
            <a
              href="/login"
              use:link
              on:click={() => globalStore.toggleItem("cart", false)}>Login</a
            >
          </p>
        {/if}
      </div>
    </div>
  </div>
</div>

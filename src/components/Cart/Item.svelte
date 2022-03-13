<script>
  export let cartItem;
  const { id, image, title, price, amount } = cartItem;
  import {
    removeItem,
    increaseAmount,
    decreaseAmount,
  } from "../../stores/cartStore";
</script>

<div class="cart-item">
  <img src={image} alt={title} />
  <div class="">
    <h4>{title}</h4>
    <h5>{price}€</h5>
    <button
      class="cart-btn remove-btn"
      on:click={() => {
        removeItem(id);
      }}>Supprimer</button
    >
  </div>
  <div class="">
    <button
      class="cart-btn amount-btn"
      on:click={() => {
        increaseAmount(id);
      }}
    >
      <i class="fas fa-chevron-up" />
    </button>
    <p class="item-amount">{cartItem.amount}</p>
    <button
      class="cart-btn amount-btn"
      on:click={() => {
        decreaseAmount(id);
      }}
    >
      <i class="fas fa-chevron-down" />
    </button>
  </div>
</div>

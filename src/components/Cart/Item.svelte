<script>
  export let cartItem;
  const { id, image, title, price, amount } = cartItem;
</script>

<div class="cart-item">
  <img src={image} alt={title} />
  <div class="">
    <h4>{title}</h4>
    <h5>{price}€</h5>
    <button
      class="cart-btn remove-btn"
      on:click={() => {
        console.log("suppr item");
      }}>Supprimer</button
    >
  </div>
  <div class="">
    <button
      class="cart-btn amount-btn"
      on:click={() => {
        console.log("qté +");
      }}
    >
      <i class="fas fa-chevron-up" />
    </button>
    <p class="item-amount">{amount}</p>
    <button
      class="cart-btn amount-btn"
      on:click={() => {
        console.log("qté -");
      }}
    >
      <i class="fas fa-chevron-down" />
    </button>
  </div>
</div>

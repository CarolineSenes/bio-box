<script>
  export let id;

  import { addToCart } from "../stores/cartStore";
  import products from "../stores/defaultProducts";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";

  import globalStore from "../stores/globalStore";

  //parse analyse une chaîne de caractère fournie en argument et renvoie un entier
  //nous sert à comparer 2 number
  $: product = $products.find((item) => item.id === parseInt(id));
</script>

<svelte:head>
  <title>{!product ? "Bio-Box" : product.title}</title>
</svelte:head>

{#if !product}
  <Loading />
{:else}
  <section class="single-product">
    <a href="/products" use:link class="btn btn-primary">Retour aux produits</a>
    <div class="single-product-container">
      <article class="single-product-image">
        <img src={product.image} alt={product.title} />
      </article>
      <article>
        <h1>{product.title}</h1>
        <h2>{product.price}€</h2>
        <p>{product.description}</p>
        <button
          class="btn btn-primary btn-block"
          on:click={() => {
            addToCart(product);
            globalStore.toggleItem("cart", true);
          }}>Ajouter au panier</button
        >
      </article>
    </div>
  </section>
{/if}

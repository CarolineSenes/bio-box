<script>
  export let id;
  //global store
  import products from "../stores/defaultProducts";
  import Loading from "../components/Loading.svelte";
  import { link } from "svelte-routing";

  //parse analyse une chaîne de caractère fournie en argument et renvoie un entier
  //nous sert à comparer 2 number
  $: product = $products.find((item) => item.id === parseInt(id));
</script>

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
            console.log("ajouter au panier YEAAAH!!!");
          }}>Ajouter au panier</button
        >
      </article>
    </div>
  </section>
{/if}

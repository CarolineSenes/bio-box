<script>
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";
  import Featured from '../components/Products/Featured.svelte'
</script>

<Hero>
  <a href="/products" class="btn btn-primary btn-hero" use:link>Faire votre marché</a>
</Hero>

<Featured title="Produits stars" />


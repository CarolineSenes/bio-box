<script>
  import Hero from "../components/Hero.svelte";
  import { link } from "svelte-routing";

</script>

<Hero>
  <a href="/products" class="btn btn-primary btn-hero" use:link>Faire votre marché</a>
</Hero>

<style>
  /* your styles go here */
</style>

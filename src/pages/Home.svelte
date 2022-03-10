<script>
  import Hero from "../components/Hero.svelte";
  import { Link } from "svelte-routing";

  function getProps() {
    return {
      class: "btn btn-primary btn-hero",
    };
  }
</script>

<Hero>
  <Link to="/products" {getProps}>Faire votre marché</Link>
</Hero>

<style>
  /* your styles go here */
</style>

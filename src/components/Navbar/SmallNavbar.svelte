<script>
  import { link } from "svelte-routing";
  import CartButton from "../Cart/CartButton.svelte"
</script>

<nav class="navbar">
  <div class="nav-center">
    <button class="btn-sidebar-toogle">
      <i class="fa fa-bars" />
    </button>
    <a href="/" use:link class="nav-logo">
      <span class="title">Bio-Box</span>
    </a>
    <CartButton />
  </div>
</nav>

<script>
  import TitleNavbar from "../Navbar/TitleNavBar.svelte";
  import CartButton from "../Cart/CartButton.svelte";
  import globalStore from "../../stores/globalStore";
</script>

<nav class="navbar">
  <div class="nav-center">
    <button
      class="btn-sidebar-toggle"
      on:click={() => globalStore.toggleItem("sidebar", true)}
    >
      <i class="fa fa-bars" />
    </button>
    <TitleNavbar />
    <CartButton />
  </div>
</nav>

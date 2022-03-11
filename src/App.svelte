<script>
  //PAGES
  import Login from "./pages/Login.svelte";
  import About from "./pages/About.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Products from "./pages/Products.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";
  import Home from "./pages/Home.svelte";

  //ROUTER
  import { Router, Route, Link } from "svelte-routing";

  //COMPONENTS
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Sidebar from "./components/Navbar/Sidebar.svelte";
  import Cart from "./components/Cart/Cart.svelte";

  //GLOBAL STORE
  import globalStore from "./stores/globalStore";
</script>

<Router>
  <Navbar />
  {#if $globalStore.sidebar}
    <Sidebar />
  {/if}
  {#if $globalStore.cart}
    <Cart />
  {/if}

  <div>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/products"><Products /></Route>
    <Route path="/products/:id" let:params
      ><ProductTemplate id={params.id} /></Route
    >
  </div>
</Router>

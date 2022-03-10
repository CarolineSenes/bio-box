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
</script>

<Router>
  <nav class="navbar">
    <Link to="/">Accueil</Link>
    <Link to="/about">A Propos</Link>
    <Link to="/products">Produits</Link>
  </nav>
  <div>
    <Route path="/"><Home /></Route>
    <Route path="/about"><About /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/products"><Products /></Route>
    <Route path="/products/:id" let:params><ProductTemplate id="{params.id}" /></Route>
  </div>
</Router>




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
  <nav>
    <Link to="/">Accueil</Link>
    <Link to="/about">A Propos</Link>
    <Link to="/products">Produits</Link>
  </nav>
  <div>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/products" component={Products} />
    <Route path="/products/:id" component={ProductTemplate} />
  </div>
</Router>




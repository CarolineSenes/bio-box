<script>
  import CartButton from "../Cart/CartButton.svelte";
  import TitleNavbar from "../Navbar/TitleNavBar.svelte";
  import links from "../../constants/links";
  import { link } from "svelte-routing";
</script>

<nav class="navbar">
  <div class="nav-container">
    <div class="nav-center">
      <ul class="nav-links">
        {#each links as navLink}
          <li>
            <a href={navLink.url} use:link>{navLink.text}</a>
          </li>
        {/each}
      </ul>
      <TitleNavbar />
      <div class="nav-aside">
        <CartButton />
      </div>
    </div>
  </div>
</nav>

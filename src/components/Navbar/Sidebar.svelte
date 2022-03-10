<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import TitleNavBar from "./TitleNavBar.svelte";
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <header class="sidebar-header">
      <button class="btn-clos">
        <i class="fas fa-window-close" />
      </button>
    </header>
  </div>
  <TitleNavBar class="sidebar-logo" />
  <ul class="sidebar-links">
    {#each links as sideLink}
      <a
        href={sideLink.url}
        use:link
        on:click={() => {
          console.log("sidebar close");
        }}>{sideLink.text}</a
      >
    {/each}
  </ul>
</div>

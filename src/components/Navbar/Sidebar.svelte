<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import TitleNavBar from "./TitleNavBar.svelte";
  import globalStore from "../../stores/globalStore";
</script>

<div class="sidebar-container">
  <div class="sidebar">
    <header class="sidebar-header">
      <button
        class="btn-clos"
        on:click={() => globalStore.toggleItem("sidebar", false)}
      >
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
          globalStore.toggleItem("sidebar", false)
        }}>{sideLink.text}</a
      >
    {/each}
  </ul>
</div>

<script>
  import links from "../../constants/links";
  import { link } from "svelte-routing";
  import TitleNavBar from "./TitleNavBar.svelte";
  import globalStore from "../../stores/globalStore";
  import { fly, fade } from "svelte/transition";
  import LoginLink from "../LoginLink.svelte";
</script>

<div class="sidebar-container" transition:fly={{ x: -1000 }}>
  <div class="sidebar">
    <div class="sidebar-header">
      <button
        class="btn-close"
        on:click={() => globalStore.toggleItem("sidebar", false)}
      >
        <i class="fas fa-window-close" />
      </button>
    </div>
  </div>
  <TitleNavBar class="sidebar-logo" />
  <ul class="sidebar-links">
    {#each links as sideLink}
      <a
        href={sideLink.url}
        use:link
        on:click={() => {
          globalStore.toggleItem("sidebar", false);
        }}>{sideLink.text}</a
      >
    {/each}
    <li>
      <LoginLink />
    </li>
  </ul>
</div>

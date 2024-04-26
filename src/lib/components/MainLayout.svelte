<script lang="ts">
  import "../../app.css";
  import { ModeWatcher } from "mode-watcher";
  import { MetaTags, type MetaTagsProps } from "svelte-meta-tags";

  import { siteConfig } from "$lib/utilities/config";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";

  interface $$Props extends MetaTagsProps {
    title: string;
    keywords?: string[];
    description?: string;
  }

  export let description: $$Props["description"] = siteConfig.description;
</script>

<MetaTags
  {description}
  {...$$restProps}
  titleTemplate={`%s | ${siteConfig.title}`}
  keywords={$$props.keywords?.join(",")} />

<ModeWatcher />

<div class="contents">
  <Navbar />
  <main class="container overflow-x-clip">
    <slot />
  </main>

  <Footer />
</div>

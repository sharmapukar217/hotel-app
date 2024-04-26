<script lang="ts">
  import { onMount } from "svelte";
  import { toggleMode } from "mode-watcher";

  import { navBarLinks } from "$lib/utilities/config";
  import BrandLogo from "$lib/components/BrandLogo.svelte";
  import LanguagePicker from "$lib/components/LanguagePicker.svelte";

  let expanded = false;
  let headerRef: HTMLHeadElement | undefined;

  onMount(() => {
    const handleScroll = () => {
      if (!headerRef) return;

      const shouldToggle = expanded || window.scrollY >= 50;

      headerRef.classList.toggle("!px-0", shouldToggle);
      headerRef.classList.toggle("!max-w-full", shouldToggle);
      headerRef.classList.toggle("header-elevated", shouldToggle);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
</script>

<header
  class="sticky top-0 z-50 container transition-[padding]"
  class:header-elevated={expanded}
  bind:this={headerRef}>
  <nav
    class="container relative md:flex md:items-center md:justify-between py-2">
    <div class="flex items-center w-full flex-wrap">
      <a href="/" class="flex-none rounded-lg text-xl font-bold outline-none">
        <BrandLogo />
      </a>
      <div class="inline-flex items-center ml-auto md:ml-0 gap-4 order-2">
        <!-- separator -->
        <div
          class="hidden md:inline py-3 pl-0.5 rounded-md bg-muted-foreground/30">
        </div>
        <!-- language toggler -->

        <LanguagePicker />

        <!-- theme toggler -->
        <button
          type="button"
          on:click={() => toggleMode()}
          class="group flex h-8 w-8 items-center justify-center rounded-full font-medium outline-none transition duration-300 hover:bg-muted hover:text-primary">
          <div class="dark:!hidden icon-[heroicons--sun] w-4 h-4"></div>
          <div class="!hidden dark:!block icon-[heroicons--moon] w-4 h-4"></div>
        </button>

        <!-- navbar togger ( only small screen) -->
        <button
          type="button"
          on:click={function () {
            expanded = !expanded;
          }}
          class="flex md:hidden h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-muted-foreground transition duration-300 hover:bg-muted hover:text-foreground">
          <div class="icon-[heroicons--bars-2] h-4 w-4"></div>
        </button>
      </div>

      <div
        class="basis-full order-2 mt-5 hidden flex-col gap-4 md:basis-0 md:order-1 md:ml-auto md:mr-5 md:flex md:flex-row md:mt-0"
        class:flex={expanded}
        class:hidden={!expanded}>
        {#each navBarLinks as link}
          <a
            id={link.url === "/" ? "home" : link.url.replace("/", "")}
            href={link.url}
            data-astro-prefetch
            class="rounded-lg text-base font-medium text-muted-foreground outline-none hover:text-foreground md:py-3 md:text-sm 2xl:text-base">
            {link.name}
          </a>
        {/each}
      </div>
    </div>
  </nav>
</header>

<style lang="postcss">
  :global(.header-elevated) {
    @apply border-b border-foreground/15 bg-background/90 backdrop-blur-sm shadow-sm transition-[padding];
  }
</style>

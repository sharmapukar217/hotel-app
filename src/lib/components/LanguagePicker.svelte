<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { languages } from "$lib/utilities/config";

  let expanded = false;
</script>

{#if Object.entries(languages).length}
  <div class="relative inline-flex">
    <button
      on:click={function () {
        expanded = !expanded;
      }}
      type="button"
      aria-label="Change language"
      class={twMerge(
        "inline-flex items-center gap-x-2 rounded-lg px-1.5 py-1.5 text-sm font-medium border border-transparent text-muted-foreground transition duration-300 hover:bg-muted/90 hover:text-primary",
        expanded && "border-border bg-muted/90 text-primary",
      )}>
      <div class="icon-[heroicons--globe-asia-australia] w-4 h-4" />

      <div
        class="icon-[heroicons--chevron-down] size-4 transition-transform"
        class:rotate-180={expanded} />
    </button>

    <div
      class="absolute rounded-lg bg-background/90 backdrop-blur-sm p-1 shadow-md border border-border z-50 top-[120%] right-0"
      class:hidden={!expanded}>
      {#each Object.entries(languages) as [lang, label]}
        <a
          href={lang}
          class="flex items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted/90 hover:text-muted-foreground">
          {label}
        </a>
      {/each}
    </div>
  </div>
{/if}

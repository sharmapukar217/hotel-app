<script lang="ts">
  interface $$Props {
    heading?: string;
    content?: string;
    isAddressVisible?: boolean;
    addressContent?: string;
    isLinkVisible?: boolean;
    linkTitle?: string;
    linkURL?: string;
    isArrowVisible?: boolean;
  }

  export let heading: $$Props["heading"] = undefined;
  export let content: $$Props["content"] = undefined;
  export let isAddressVisible: $$Props["isAddressVisible"] = undefined;
  export let addressContent: $$Props["addressContent"] = undefined;
  export let isLinkVisible: $$Props["isLinkVisible"] = undefined;
  export let linkTitle: $$Props["linkTitle"] = undefined;
  export let linkURL: $$Props["linkURL"] = undefined;
  export let isArrowVisible: $$Props["isArrowVisible"] = undefined;
</script>

<div class="flex gap-x-7 py-6">
  <slot />
  <div class="grow">
    <h3 class="font-bold text-foreground">
      {heading}
    </h3>
    <p class="mt-1 text-sm text-muted-foreground">{content}</p>
    {#if isAddressVisible}
      <p class="mt-1 text-sm italic text-muted-foreground">{addressContent}</p>
    {/if}
    {#if isLinkVisible}
      <a
        class="group mt-2 inline-flex items-center gap-x-2 rounded-lg text-sm font-medium text-foreground/80 transition duration-300 hover:text-foreground"
        href={linkURL}>
        {linkTitle}

        {#if isArrowVisible}
          <svg
            class="h-4 w-4 flex-shrink-0 transition ease-in-out group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        {/if}
      </a>
    {/if}
  </div>
</div>

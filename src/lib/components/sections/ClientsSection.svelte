<script lang="ts">
  interface $$Props {
    title: string;
    subtitle?: string;
  }

  export let title: $$Props["title"];
  export let subtitle: $$Props["subtitle"] = undefined;
</script>

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
  <div class="mx-auto mb-6 w-full space-y-1 text-center sm:w-1/2 lg:w-1/3">
    <h2
      class="text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl">
      {title}
    </h2>
    {#if subtitle}
      <p class="text-pretty leading-tight text-muted-foreground">{subtitle}</p>
    {/if}
  </div>
</section>

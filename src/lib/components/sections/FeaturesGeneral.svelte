<script lang="ts">
  import { twMerge } from "tailwind-merge";

  interface $$Props {
    title?: string;
    subtitle?: string;
    features?: Array<{ heading: string; content: string; icon: string }>;
    src?: any;
  }

  export let title: $$Props["title"] = undefined;
  export let subtitle: $$Props["subtitle"] = undefined;
  export let features: $$Props["features"] = [];
  export let src: $$Props["src"] = undefined;
</script>

<section
  id="services"
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full scroll-mt-10">
  <div class="relative mb-6 overflow-hidden md:mb-8">
    {#if src}
      <div class="max-h-[32rem] w-full">
        <img
          {src}
          alt=""
          class="mx-auto object-fill rounded-lg shadow-sm"
          draggable="false"
          loading="lazy" />
      </div>
    {/if}
  </div>

  <div class="mt-5 grid gap-8 lg:mt-16 lg:grid-cols-3 lg:gap-12">
    <div class="lg:col-span-1">
      <div class="text-balance text-2xl font-bold text-foreground md:text-3xl">
        {@html title}
      </div>
      {#if subtitle}
        <p class="mt-2 text-pretty text-muted-foreground md:mt-4">
          {@html subtitle}
        </p>
      {/if}
    </div>

    <div class="lg:col-span-2">
      <div class="grid gap-8 sm:grid-cols-2 md:gap-12">
        {#if features && features.length > 0}
          {#each features as feature}
            <div class="flex gap-x-5">
              <div class={twMerge("text-3xl text-primary", feature.icon)} />

              <div class="grow">
                <h3 class="text-balance text-lg font-bold text-foreground">
                  {feature.heading}
                </h3>
                <p class="mt-1 text-pretty text-muted-foreground">
                  {feature.content}
                </p>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

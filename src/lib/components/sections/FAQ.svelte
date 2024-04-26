<script lang="ts">
  import type { FAQ } from "$lib/types";
  import { twMerge } from "tailwind-merge";

  interface $$Props {
    title: string;
    subtitle: string;

    faqs: Array<FAQ> | undefined;
  }

  let expandedIndex = 0;

  export let title: $$Props["title"];
  export let subtitle: $$Props["subtitle"];

  export let faqs: $$Props["faqs"] = [];
</script>

{#if faqs && faqs.length}
  <section
    id="faqs"
    class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full scroll-mt-32">
    <div class="grid gap-10 md:grid-cols-5">
      <div class="md:col-span-2">
        <div class="max-w-xs">
          <div
            class="text-2xl font-bold text-foreground md:text-4xl md:leading-tight">
            {@html title}
          </div>
          <p
            class="mt-1 hidden text-muted-foreground md:block font-medium md:font-semibold">
            {subtitle}
          </p>
        </div>
      </div>
      <!-- FAQ accordion items -->
      <div class="md:col-span-3">
        <div class="divide-y divide-foreground/10">
          {#if faqs && faqs.length}
            {#each faqs as faq, i}
              <div class="pt-6 pb-3">
                <button
                  on:click={function () {
                    if (expandedIndex == i) expandedIndex = -1;
                    else expandedIndex = i;
                  }}
                  class="group inline-flex w-full items-center justify-between gap-x-3 text-balance rounded-lg pb-3 text-start font-bold text-foreground hover:text-muted-foreground transition md:text-lg">
                  {faq.question}

                  <div
                    class="icon-[bi--chevron-down] w-4 h-4 transition-all"
                    class:rotate-180={expandedIndex === i} />
                </button>
                <div
                  class="w-full h-full overflow-hidden transition-all duration-300"
                  class:hidden={expandedIndex !== i}>
                  <p class="text-pretty text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </section>
{/if}

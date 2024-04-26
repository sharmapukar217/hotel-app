<script lang="ts">
  import { twMerge } from "tailwind-merge";

  interface Tab {
    heading: string;
    content: string;
    icon: string;
    imageUrl: any;
  }

  interface $$Props {
    title?: string;
    tabs: Tab[];
  }

  let activeTab = 0;
  export let tabs: $$Props["tabs"] = [];
  export let title: $$Props["title"] = undefined;
</script>

<section
  id="hotels"
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full scroll-mt-8">
  <div class="relative p-6 md:p-16">
    <div
      class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16">
      <div class="mb-10 lg:order-2 lg:col-span-6 lg:col-start-8 lg:mb-0">
        <h2 class="text-2xl font-bold text-foreground sm:text-3xl">
          {@html title}
        </h2>
        <nav class="mt-5 grid gap-4 md:mt-10">
          {#if tabs}
            {#each tabs as tab, index}
              <button
                type="button"
                on:click={function () {
                  activeTab = index;
                }}
                class={twMerge(
                  "rounded-xl p-4 text-start outline-none transition duration-300 hover:bg-background/60 focus-visible:ring md:p-5",
                  index === activeTab &&
                    "!bg-muted shadow-md hover:border-muted",
                )}
                id={String(index)}
                role="tab">
                <span class="flex">
                  <div class={twMerge("text-3xl text-primary", tab.icon)} />

                  <span class="ms-6 grow">
                    <span
                      class={twMerge(
                        "block text-lg font-bold text-foreground",
                        index === activeTab && "text-primary",
                      )}>
                      {tab.heading}
                    </span>
                    <span
                      class={twMerge(
                        "mt-1 block text-foreground",
                        index === activeTab && "text-foreground",
                      )}>
                      {tab.content}
                    </span>
                  </span>
                </span>
              </button>
            {/each}
          {/if}
        </nav>
      </div>

      <div class="lg:col-span-6">
        <div class="relative">
          <div>
            {#if tabs}
              {#each tabs as tab, index}
                <div role="tabpanel" class:hidden={index !== activeTab}>
                  <img
                    alt=""
                    loading="eager"
                    draggable="false"
                    src={tab.imageUrl}
                    class="aspect-[5/4] object-cover rounded-xl" />
                </div>
              {/each}
            {/if}
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 grid h-full w-full grid-cols-12">
      <div
        class="col-span-full h-5/6 w-full rounded-xl bg-muted/60 sm:h-3/4 lg:col-span-7 lg:col-start-6 lg:h-full">
      </div>
    </div>
  </div>
</section>

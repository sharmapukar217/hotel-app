<script lang="ts">
  interface $$Props {
    title: string;
    subtitle?: string;
    testimonials?: Testimonial[];
    statistics?: StatProps[];
  }

  type Testimonial = {
    content: string;
    author: string;
    avatarSrc: string;
  };

  type StatProps = {
    count: string;
    description: string;
  };

  export let title: $$Props["title"];
  export let subtitle: $$Props["subtitle"] = undefined;

  export let testimonials: $$Props["testimonials"] = [];
  export let statistics: $$Props["statistics"] = undefined;
</script>

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 2xl:max-w-full">
  <div
    class="lg:grid lg:grid-cols-12 lg:items-center lg:justify-between lg:gap-16">
    <div class="lg:col-span-5 lg:col-start-1">
      <div class="mb-8">
        <h2 class="mb-2 text-3xl font-bold text-foreground lg:text-4xl">
          {title}
        </h2>
        {#if subtitle}
          <p>{@html subtitle}</p>
        {/if}
      </div>

      {#if testimonials && testimonials.length}
        {#each testimonials as testimonial}
          <blockquote class="relative mb-12">
            <div
              class="icon-[bi--quote] absolute start-0 top-0 h-16 w-16 -translate-x-6 -translate-y-8 transform text-muted-foreground/10 -z-50" />

            <div class="relative z-10">
              <p class="text-xl italic text-muted-foreground">
                {testimonial.content}
              </p>
            </div>

            <div class="mt-2">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img
                    alt=""
                    loading="lazy"
                    class="h-8 w-8 rounded-full"
                    src={testimonial.avatarSrc} />
                </div>
                <div class="ms-4 grow">
                  <div class="font-bold text-foreground">
                    {testimonial.author}
                  </div>
                </div>
              </div>
            </div>
          </blockquote>
        {/each}
      {/if}
    </div>
    {#if statistics}
      <div class="mt-10 lg:col-span-6 lg:col-end-13 lg:mt-0">
        <div class="space-y-6 sm:space-y-8">
          <ul
            class="grid grid-cols-2 divide-x-2 divide-y-2 divide-background/30 overflow-hidden">
            {#each statistics as stat, index}
              <li class="-m-0.5 flex flex-col p-4 sm:p-8">
                <div
                  class="mb-2 flex items-end gap-x-2 text-3xl font-bold text-foreground sm:text-5xl">
                  {#if index == 1 || index == 2}
                    <div
                      class="icon-[bi--arrow-up] h-5 w-5 flex-shrink-0 text-primary" />
                  {/if}
                  {stat.count}
                </div>
                <p class="text-sm text-muted-foreground sm:text-base">
                  {stat.description}
                </p>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    {/if}
  </div>
</section>

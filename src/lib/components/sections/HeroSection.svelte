<script lang="ts">
  interface $$Props {
    title: string;
    subtitle?: string;
    primaryBtn?: string;
    primaryBtnURL?: string;
    secondaryBtn?: string;
    secondaryBtnURL?: string;
    withReview?: boolean;
    avatars?: Array<string>;
    starCount?: number;
    rating?: string;
    reviews?: string;

    src?: string;
  }

  export let title: $$Props["title"];
  export let subtitle: $$Props["subtitle"] = undefined;

  export let primaryBtn: $$Props["primaryBtn"] = undefined;
  export let primaryBtnURL: $$Props["primaryBtnURL"] = undefined;

  export let secondaryBtn: $$Props["secondaryBtn"] = undefined;
  export let secondaryBtnURL: $$Props["secondaryBtnURL"] = undefined;

  export let withReview: $$Props["withReview"] = false;
  export let reviews: $$Props["reviews"] = undefined;
  export let rating: $$Props["rating"] = undefined;
  export let starCount: $$Props["starCount"] = 0;
  export let avatars: $$Props["avatars"] = [];

  export let src: $$Props["src"] = undefined;
</script>

<section
  id="hero"
  class="container flex flex-col md:flex-row pt-24 pb-14 gap-4 md:gap-8 overflow-hidden">
  <div class="w-full flex flex-col">
    <!-- title -->
    <div
      class="block text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-6xl lg:leading-tight">
      {@html title}
    </div>

    {#if subtitle}
      <p
        class="mt-3 text-pretty text-lg font-medium leading-relaxed text-muted-foreground lg:w-4/5">
        {@html subtitle}
      </p>
    {/if}

    <!-- cta buttons -->
    <div class="mt-7 grid w-full gap-3 sm:inline-flex">
      {#if primaryBtn}
        <a
          href={primaryBtnURL}
          class="
            relative group inline-flex items-center justify-center gap-x-2 rounded-lg pl-4 pr-8 py-3
            text-primary-foreground bg-primary transition duration-300 outline-none text-sm font-bold
            hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background">
          {primaryBtn}
          <div
            class="icon-[heroicons--chevron-right-solid] w-4 h-4 absolute right-3 group-focus:right-2 transition-[right]" />
        </a>
      {/if}

      {#if secondaryBtn}
        <a
          href={secondaryBtnURL}
          class="
            group inline-flex items-center justify-center gap-x-2 rounded-lg px-4 py-3
            text-secondary-foreground bg-secondary text-sm font-bold hover:bg-secondary/90
            focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:ring-offset-background transition duration-300">
          {secondaryBtn}
        </a>
      {/if}
    </div>

    {#if withReview}
      <div class="mt-6 lg:mt-10">
        <div class="py-5">
          <div class="text-center sm:flex sm:items-center sm:text-start">
            <div class="flex-shrink-0 pb-5 sm:flex sm:pb-0 sm:pe-5">
              <!-- Avatar Group -->
              <div class="flex justify-center -space-x-3">
                {#if avatars && avatars.length > 0}
                  {#each avatars as avatar}
                    <img
                      alt=""
                      src={avatar}
                      loading="eager"
                      class="inline-block h-8 w-8 rounded-full ring-2 ring-muted" />
                  {/each}
                {/if}
                <span
                  class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground ring-2 ring-muted">
                  <span
                    class="text-xs font-medium uppercase leading-none text-background">
                    7k+
                  </span>
                </span>
              </div>
            </div>
            <div
              class="mx-auto h-px w-32 border-t border-foreground/20 sm:mx-0 sm:h-8 sm:w-auto sm:border-s sm:border-t-0">
            </div>
            <!-- Review Ratings -->
            <div class="flex flex-col items-center sm:items-start">
              <div class="flex items-baseline space-x-1 pt-5 sm:ps-5 sm:pt-0">
                <div class="flex space-x-1">
                  {#each Array(starCount).fill(0) as _}
                    <div
                      class="icon-[bi--star-fill] w-4 h-4 text-yellow-500 dark:text-yellow-400" />
                  {/each}
                  <!-- Adding additional half-star -->
                  <div
                    class="icon-[bi--star-half] w-4 h-4 text-yellow-500 dark:text-yellow-400">
                  </div>
                </div>
                <p class="text-foreground">{@html rating}</p>
              </div>
              <div class="text-sm text-muted-foreground sm:ps-5">
                <p>{@html reviews}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/if}
  </div>

  <div class="w-full max-h-96">
    {#if src}
      <img
        alt=""
        {src}
        loading="eager"
        draggable="false"
        class="w-full h-full rounded-xl object-fill object-center shadow-sm" />
    {/if}
  </div>
</section>

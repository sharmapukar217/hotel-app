<script>
  import { page } from "$app/stores";
  import MainLayout from "$lib/components/MainLayout.svelte";
</script>

<MainLayout title={String($page.status)}>
  <section class="grid h-svh place-content-center">
    <div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1
          class="text-dark mb-4 text-7xl font-extrabold text-primary lg:text-9xl">
          {$page.status}
        </h1>
        <p
          class="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Oop! {$page.error?.message}
        </p>

        <p class="mb-4 text-pretty text-lg text-muted-foreground">
          Don't let this hiccup slow you down. Let's get you back to finding
          hotel of your dream.
        </p>

        <button
          on:click={() => history.back()}
          class="
          relative group inline-flex items-center justify-center gap-x-2 rounded-lg px-10 py-2.5
          text-primary-foreground bg-primary transition duration-300 outline-none text-md font-bold
          hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background">
          Go Back
        </button>
      </div>
    </div>
  </section>
</MainLayout>

<script lang="ts">
  import ContactIconBlock from "$lib/components/ContactIconBlock.svelte";
  import { siteConfig } from "$lib/utilities/config";

  interface $$Props {
    title: string;
    subtitle?: string;
  }

  export let title: $$Props["title"];
  export let subtitle: $$Props["subtitle"] = undefined;
</script>

<section
id="contact"
  class="relative mx-auto max-w-[85rem] px-4 pt-10 sm:px-6 lg:px-8 scroll-mt-24">
  <div
    class="absolute left-0 scale-90 md:top-[20%] xl:left-[10%] top-[25%]">
    <svg
      width="64"
      height="64"
      fill="none"
      stroke-width="1.5"
      color="#ea580c"
      viewBox="0 0 24 24">
      <path
        fill="#ea580c"
        stroke="#ea580c"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      ></path>
      <path
        stroke="#ea580c"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 7.353v9.294a.6.6 0 0 1-.309.525l-8.4 4.666a.6.6 0 0 1-.582 0l-8.4-4.666A.6.6 0 0 1 3 16.647V7.353a.6.6 0 0 1 .309-.524l8.4-4.667a.6.6 0 0 1 .582 0l8.4 4.667a.6.6 0 0 1 .309.524Z"
      ></path>
      <path
        stroke="#ea580c"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m3.528 7.294 8.18 4.544a.6.6 0 0 0 .583 0l8.209-4.56M12 21v-9"
      ></path>
    </svg>
  </div>
  <div class="absolute left-[85%] top-0 scale-75">
    <svg
      width="64"
      height="64"
      fill="none"
      stroke-width="1.5"
      color="#fbbf24"
      viewBox="0 0 24 24">
      <path
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      ></path>
      <path
        fill="#fbbf24"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
      <path
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 10.5V9M5 15v-1.5"></path>
      <path
        fill="#fbbf24"
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      ></path>
      <path
        stroke="#fbbf24"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10.5 19H9M15 19h-1.5"></path>
    </svg>
  </div>
  <div
    class="absolute scale-[.6] bottom-[-35%] left-[35%]">
    <svg
      width="64"
      height="64"
      fill="none"
      stroke-width="1.5"
      color="#a3a3a3"
      viewBox="0 0 24 24">
      <path
        stroke="#a3a3a3"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M5.164 17c.29-1.049.67-2.052 1.132-3M11.5 7.794A16.838 16.838 0 0 1 14 6.296M4.5 22a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      ></path>
      <path
        stroke="#a3a3a3"
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9.5 12a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM19.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
      ></path>
    </svg>
  </div>
  <div class="mx-auto mt-5 max-w-xl text-center">
    <h2
      class="block text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
      {title}
    </h2>
  </div>

  <div class="mx-auto mt-5 max-w-3xl text-center">
    {#if subtitle}
      <p class="text-pretty text-lg text-muted-foreground">{subtitle}</p>
    {/if}
  </div>
</section>

<section
  class="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
  <div class="mx-auto max-w-2xl lg:max-w-5xl">

    <div class="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
      <div class="flex flex-col rounded-xl p-4 sm:p-6 lg:p-8">
        <h2 class="mb-8 text-xl font-bold text-muted-foreground">
          Fill in the form below
        </h2>
        <!-- Form for user input with various input fields.-->
        <!-- Each field utilizes a different input component for the specific type of input (text, email, phone, and textarea)-->
        <form method="post" action="/">
          <div class="grid gap-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label for="firstName" class="sr-only">First Name</label>
                <input
                  required
                  type="text"
                  name="firstName"
                  id="firstName"
                  class="block w-full rounded-lg border border-foreground/20 bg-muted/50 px-4 py-3 text-sm font-medium md:font-semibold text-muted-foreground focus:text-foreground focus:border-transparent focus:outline-none focus:ring focus:ring-primary/90 disabled:pointer-events-none disabled:opacity-50"
                  placeholder="First Name" />
              </div>

              <div>
                <label for="lastName" class="sr-only">Last Name</label>
                <input
                  required
                  type="text"
                  name="lastName"
                  id="lastName"
                  class="block w-full rounded-lg border border-foreground/20 bg-muted/50 px-4 py-3 text-sm font-medium md:font-semibold text-muted-foreground focus:text-foreground focus:border-transparent focus:outline-none focus:ring focus:ring-primary/90 disabled:pointer-events-none disabled:opacity-50"
                  placeholder="Last Name" />
              </div>
            </div>

            <!-- Container for the label and email input field -->
            <div>
              <label for="emailAddress" class="sr-only">Email Address</label>
              <input
                required
                type="email"
                name="emailAddress"
                id="emailAddress"
                autocomplete="email"
                class="block w-full rounded-lg border border-foreground/20 bg-muted/50 px-4 py-3 text-sm font-medium md:font-semibold text-muted-foreground focus:text-foreground focus:border-transparent focus:outline-none focus:ring focus:ring-primary/90 disabled:pointer-events-none disabled:opacity-50"
                placeholder="Email Address" />
            </div>

            <div>
              <label for="phoneNumber" class="sr-only">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                class="block w-full rounded-lg border border-foreground/20 bg-muted/50 px-4 py-3 text-sm font-medium md:font-semibold text-muted-foreground focus:text-foreground focus:border-transparent focus:outline-none focus:ring focus:ring-primary/90 disabled:pointer-events-none disabled:opacity-50"
                placeholder="Phone Number" />
            </div>

            <div>
              <label for="message" class="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="block w-full rounded-lg border border-foreground/20 bg-muted/50 px-4 py-3 text-sm font-medium md:font-semibold text-muted-foreground focus:text-foreground focus:border-transparent focus:outline-none focus:ring focus:ring-primary/90 disabled:pointer-events-none disabled:opacity-50"
                placeholder="Message" />
            </div>
          </div>

          <div class="mt-4 grid">
            <button
              type="submit"
              class="
            relative group inline-flex items-center justify-center gap-x-2 rounded-lg px-10 py-2.5
            text-primary-foreground bg-primary transition duration-300 outline-none text-md font-bold
            hover:bg-primary/90 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background">
              Submit
            </button>
          </div>

          <div class="mt-3 text-center">
            <p class="text-sm text-neutral-600 dark:text-neutral-400">
              We'll get back to you in 1-2 business days.
            </p>
          </div>
        </form>
      </div>

      <div class="divide-y divide-foreground/20">
        <ContactIconBlock
          heading="Knowledgebase"
          content="Browse through all of our knowledgebase articles."
          isLinkVisible={true}
          linkTitle="Visit guides & tutorials"
          linkURL="#"
          isArrowVisible={true}>
          <div
            class="icon-[heroicons--question-mark-circle] w-6 h-6 text-muted-foreground" />
        </ContactIconBlock>

        <ContactIconBlock
          heading="FAQ"
          content="Explore our FAQ for quick, clear answers to common queries."
          isLinkVisible={true}
          linkTitle="Visit FAQ"
          linkURL="/#faqs"
          isArrowVisible={true}>
          <div
            class="icon-[heroicons--chat-bubble-left-right] w-6 h-6 text-muted-foreground" />
        </ContactIconBlock>

        <ContactIconBlock
          heading="Visit our office"
          content={siteConfig.title}
          isAddressVisible={true}
          addressContent="Kathmandu, Nepal">
          <div
            class="icon-[heroicons--chat-bubble-left-right] w-6 h-6 text-muted-foreground" />
        </ContactIconBlock>

        <ContactIconBlock
          heading="Contact us by email"
          content="Prefer the written word? Drop us an email at"
          isLinkVisible={true}
          linkTitle="support@hotel.com"
          linkURL="mailto://support@hotel.com">
          <div
            class="icon-[heroicons--chat-bubble-left-right] w-6 h-6 text-muted-foreground" />
        </ContactIconBlock>
      </div>
    </div>
  </div>
</section>

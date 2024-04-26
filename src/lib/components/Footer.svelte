<!-- 
---
// Import the necessary dependencies
import FooterSocialLink from "@components/ui/links/FooterSocialLink.astro";
import EmailFooterInput from "@components/ui/forms/input/EmailFooterInput.astro";
import enStrings from "@utils/navigation.ts";
import frStrings from "@utils/fr/navigation.ts";
import Icon from "@components/ui/icons/Icon.astro";
import BrandLogo from "@components/BrandLogo.astro";
import { SITE } from "@data/constants";

// Select the correct translation based on the page's lang prop:
const strings = Astro.currentLocale === "fr" ? frStrings : enStrings;

// Define the variables that will be used in this component
const sectionThreeTitle: string = Astro.currentLocale === "fr" ? "Rester à jour" : "Stay up to date";
const sectionThreeContent: string = Astro.currentLocale === "fr" ? "Restez informé des derniers outils et des offres exclusives." :
  "Stay updated with the latest tools and exclusive deals.";
const crafted: string = Astro.currentLocale === "fr" ? "Fabriqué par" : "Crafted by";
--- -->

<script lang="ts">
  import BrandLogo from "$lib/components/BrandLogo.svelte";
  import { footerLinks, siteConfig } from "$lib/utilities/config";
</script>

<footer class="w-full bg-muted/80">
  <div
    class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl">
    <div class="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-5">
      <div class="col-span-full lg:col-span-1">
        <BrandLogo />
      </div>
      <!-- An array of links for Product and Company sections -->
      {#each footerLinks as section}
        <div class="col-span-1">
          <h3 class="font-bold text-foreground">
            {section.section}
          </h3>
          <ul class="mt-3 grid space-y-3">
            {#each section.links as link}
              <li>
                <a
                  href={link.url}
                  class="inline-flex gap-x-2 rounded-lg text-muted-foreground outline-none transition duration-300 hover:text-foreground">
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      {/each}

      <div class="col-span-2">
        <h3 class="font-bold text-foreground">Stay up to date</h3>

        <form method="post">
          <div
            class="mt-4 flex flex-col items-center gap-2 rounded-lg bg-background p-2 sm:flex-row sm:gap-3">
            <div class="w-full">
              <label for="email" class="sr-only">Email Address</label>
              <input
                required
                id="email"
                type="email"
                name="footer-input"
                class="block w-full rounded-lg bg-muted px-4 py-3 text-sm font-medium md:font-semibold text-muted-foreground
                focus:ring-2 focus:ring-primary/90 focus:outline-none border border-foreground/30 focus:border-primaryfocus:border-primary
                disabled:pointer-events-none disabled:opacity-50 transition-all"
                placeholder="Enter your email address to subscrbie..." />
            </div>
            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-x-2 whitespace-nowrap rounded-lg bg-primary text-primary-foreground p-3 text-sm font-bold
              transition duration-300 hover:bg-primary/85 disabled:pointer-events-none disabled:opacity-50 sm:w-auto
              focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-muted focus:outline-none">
              Subscribe
            </button>
          </div>
          <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
            Stay updated with the latest tools and exclusive deals.
          </p>
        </form>
      </div>
    </div>

    <div
      class="mt-9 grid gap-y-2 sm:mt-12 sm:flex sm:items-center sm:justify-between sm:gap-y-0">
      <div class="flex items-center justify-between">
        <div class="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()}
          <a href="/" class="hover:underline"> {siteConfig.title} </a>
        </div>
      </div>

      <!-- Social Brands -->
      <div>
        <!-- <FooterSocialLink url={strings.socialLinks.facebook}
          ><Icon name="facebookFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.x}
          ><Icon name="xFooter" /></FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.github}
          ><Icon name="githubFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.google}
          ><Icon name="googleFooter" />
        </FooterSocialLink>

        <FooterSocialLink url={strings.socialLinks.slack}
          ><Icon name="slackFooter" />
        </FooterSocialLink> -->
      </div>
    </div>
  </div>
</footer>

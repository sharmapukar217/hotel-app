<script>
  import * as constants from "$lib/utilities/constants";
  import MainLayout from "$lib/components/MainLayout.svelte";
  import HeroSection from "$lib/components/sections/HeroSection.svelte";
  import ClientsSection from "$lib/components/sections/ClientsSection.svelte";
  import FeaturesGeneral from "$lib/components/sections/FeaturesGeneral.svelte";
  import FeaturesNavs from "$lib/components/sections/FeaturesNavs.svelte";
  import TestimonialsSection from "$lib/components/sections/TestimonialsSection.svelte";
  import ContactSection from "$lib/components/sections/ContactSection.svelte";
  import Faq from "$lib/components/sections/FAQ.svelte";


  export let data;

  const avatarSrcs = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
  ];
</script>

<MainLayout title="Homepage">
  <HeroSection
    title={constants.HERO_TITLE}
    subtitle={constants.HERO_SUBTITLE}
    primaryBtn={constants.HERO_PRIMARY_BTN}
    primaryBtnURL={constants.HERO_PRIMARY_BTN_URL}
    secondaryBtn={constants.HERO_SECONDARY_BTN}
    secondaryBtnURL={constants.HERO_SECONDARY_BTN_URL}
    withReview={!!constants.HERO_RATING_TEXT}
    avatars={avatarSrcs}
    rating={constants.HERO_RATING_TEXT}
    starCount={constants.HERO_RATING__COUNT}
    reviews={constants.HERO_RATING_REVIEW}
    src={"https://cdn.dribbble.com/users/465625/screenshots/16421846/media/5e93cae5c3e0bd0eeb5c21a29f3dce64.png"} />

  <ClientsSection
    title={constants.CLIENT_SECTION_TITLE}
    subtitle={constants.CLIENT_SECTION_SUBTITLE} />

  <FeaturesGeneral
    title={constants.FEATURES_LIST_TITLE}
    subtitle={constants.FEATURES_LIST_SUBTITLE}
    src={"https://cdn.dribbble.com/userupload/5869321/file/original-ad3da6a9fa37bc2c1bb3674c69f3ab02.jpg?resize=752x"}
    features={data.featuresList} />

  <FeaturesNavs title={constants.FEATURES_NAV_TITLE} tabs={data.featuresTab} />

  <TestimonialsSection
    title={constants.TESTINOMIAL_TITLE}
    subtitle={constants.TESTINOMIAL_SUBTITLE}
    testimonials={[
      {
        content: constants.TESTINOMIAL_CONTENT,
        author: constants.TESTINOMIAL_AUTHOR_NAME,
        avatarSrc: constants.TESTINOMIAL_USER_AVATAR,
      },
    ]}
    statistics={[
      {
        count: "70k+",
        description:
          "customers equipped — from DIY to major construction firms",
      },
      {
        count: "35%",
        description:
          "uptick in project efficiency with Hotel.com tools and services",
      },
      {
        count: "15.3%",
        description:
          "reduction in maintenance costs reported by long-term clients",
      },
      {
        count: "2x",
        description: "quicker assembly using innovative fastening solutions",
      },
    ]} />

  <Faq
    title={constants.FAQ_TITLE}
    subtitle={constants.FAQ_SUBTITLE}
    faqs={data.faqs} />

  <ContactSection
    title={constants.CONTACT_US_TITLE}
    subtitle={constants.CONTACT_US_SUBTITLE} />
</MainLayout>

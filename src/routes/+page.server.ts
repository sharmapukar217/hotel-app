import type { FAQ } from "$lib/types";
import { env } from "$env/dynamic/private";
import { pb } from "$lib/utilities/pocketbase";

export const load = async () => {
  const featuresPromise = pb.collection("features").getFullList<any>({
    filter: "disabled!=true",
  });

  const faqsPromise = pb.collection("faqs").getFullList<FAQ>({
    filter: "hidden!=true",
  });

  try {
    const [features, faqs] = await Promise.all([featuresPromise, faqsPromise]);

    return {
      faqs,
      featuresList: features.filter((f) => f.type === "list"),
      featuresTab: features.filter((f) => f.type === "tab"),
    };
  } catch {
    return { featuresList: [], featuresTab: [] };
  }
};

export const config = {
  isr: {
    expiration: 60,
    allowQuery: ["search"],
    bypassToken: env.BYPASS_TOKEN,
  },
};

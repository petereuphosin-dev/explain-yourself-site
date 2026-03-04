export const SITE_NAME = "Explain Yourself";
export const SITE_TITLE = "Explain Yourself | The premium party icebreaker app";
export const SITE_DESCRIPTION =
  "A cinematic marketing site for Explain Yourself, the fast, hilarious mobile icebreaker built for instant party energy.";
export const SUPPORT_EMAIL = "support@peuphosin.com";

export const GOOGLE_PLAY_URL: string = "<PASTE_GOOGLE_PLAY_URL_HERE>";
export const APPLE_APPSTORE_URL: string = "";
export const THIRD_STORE_NAME: string = "";
export const THIRD_STORE_URL: string = "";

export const APP_STORE_READY =
  APPLE_APPSTORE_URL.trim() !== "" && APPLE_APPSTORE_URL !== "APPLE_APPSTORE_URL_PLACEHOLDER";
export const THIRD_STORE_READY =
  THIRD_STORE_URL.trim() !== "" && THIRD_STORE_URL !== "THIRD_STORE_URL_PLACEHOLDER";

export const NAV_ITEMS = [
  { label: "Features", id: "features" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Screenshots", id: "screenshots" },
  { label: "FAQ", id: "faq" },
  { label: "Press", id: "press-teaser" }
];

export const FAQ_ITEMS = [
  {
    question: "Is it free?",
    answer:
      "The launch build is free to download with a rotating prompt pack. Future premium packs can be added later without changing this site."
  },
  {
    question: "Does it work offline?",
    answer:
      "Core gameplay is designed to work without signing in, and the main round flow can stay available offline after installation."
  },
  {
    question: "Is there tracking?",
    answer:
      "This marketing site only stores local preferences like theme and cookie consent. The app itself is positioned as a privacy-first experience with data staying on-device."
  },
  {
    question: "Can I play with 2 people?",
    answer:
      "Yes. Two players is enough for a fast duel, but the prompt system also scales cleanly for larger groups and party circles."
  },
  {
    question: "How often new prompts?",
    answer:
      "Plan for regular content drops. Use the update banner on the homepage as the place to announce fresh prompt packs, seasonal sets, or event modes."
  },
  {
    question: "How do I contact support?",
    answer: `Reach out any time at ${SUPPORT_EMAIL}.`
  }
];

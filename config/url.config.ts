export const PUBLIC_URL = {
  root: (url = "") => `${url ? url : ""}`,
  home: () => PUBLIC_URL.root("/"),
  about: () => PUBLIC_URL.root("/about"),
  faq: () => PUBLIC_URL.root("/faq"),
  contactUs: () => PUBLIC_URL.root("/contact-us"),
};

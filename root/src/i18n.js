//i18n
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

window.i18next = i18next.default || i18next;

export const initTranslation = (i18next.default || i18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ["es", "en"],
    fallbackLng: "es",
    debug: true,
    returnEmptyString: false,
    load: "languageOnly",
    // lang detection plugin options
    resources: {},
    ns: ["nav"],
    defaultNS: "nav",
    detection: {
      // order and from where user language should be detected
      order: ["cookie", "localStorage", "navigator", "htmlTag"],

      // keys or params to lookup language from
      lookupCookie: "i18next",
      lookupLocalStorage: "i18nextLng",

      // cache user language on
      caches: ["localStorage", "cookie"],
      excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

      // optional expire and domain for set cookie
      cookieMinutes: 10,
      cookieDomain: "myDomain",

      // optional htmlTag with lang attribute, the default is:
      htmlTag: document.documentElement,

      // only detect languages that are in the whitelist
      checkWhitelist: true,

      // fallback to a similar whitelist language
      checkForSimilarInWhitelist: true,

      // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
      cookieOptions: { path: "/" }
    }
  });


// @ts-nocheck


export const localeCodes =  [
  "en",
  "ja"
]

export const localeLoaders = {
  "en": [{ key: "../locales/en-US.json", load: () => import("../locales/en-US.json" /* webpackChunkName: "locale_C_58_C_58_Users_ruman_Downloads_themeforest_jE7N9u7U_tronis_transport_logistics_vue_nuxt_template_tronis_file_locales_en_US_json" */), cache: true }],
  "ja": [{ key: "../locales/ja-JP.json", load: () => import("../locales/ja-JP.json" /* webpackChunkName: "locale_C_58_C_58_Users_ruman_Downloads_themeforest_jE7N9u7U_tronis_transport_logistics_vue_nuxt_template_tronis_file_locales_ja_JP_json" */), cache: true }]
}

export const vueI18nConfigs = [
  
]

export const nuxtI18nOptions = {
  "experimental": {
    "localeDetector": "",
    "switchLocalePathLinkSSR": false,
    "autoImportTranslationFunctions": false
  },
  "bundle": {
    "compositionOnly": true,
    "runtimeOnly": false,
    "fullInstall": true,
    "dropMessageCompiler": false
  },
  "compilation": {
    "jit": true,
    "strictMessage": true,
    "escapeHtml": false
  },
  "customBlocks": {
    "defaultSFCLang": "json",
    "globalSFCScope": false
  },
  "vueI18n": "",
  "locales": [
    {
      "code": "en",
      "name": "English",
      "files": [
        "C:/Users/ruman/Downloads/themeforest-jE7N9u7U-tronis-transport-logistics-vue-nuxt-template/tronis/file/locales/en-US.json"
      ]
    },
    {
      "code": "ja",
      "name": "日本語",
      "files": [
        "C:/Users/ruman/Downloads/themeforest-jE7N9u7U-tronis-transport-logistics-vue-nuxt-template/tronis/file/locales/ja-JP.json"
      ]
    }
  ],
  "defaultLocale": "en",
  "defaultDirection": "ltr",
  "routesNameSeparator": "___",
  "trailingSlash": false,
  "defaultLocaleRouteNameSuffix": "default",
  "strategy": "no_prefix",
  "lazy": true,
  "langDir": "locales/",
  "detectBrowserLanguage": {
    "alwaysRedirect": false,
    "cookieCrossOrigin": false,
    "cookieDomain": null,
    "cookieKey": "i18n_redirected",
    "cookieSecure": false,
    "fallbackLocale": "",
    "redirectOn": "root",
    "useCookie": true
  },
  "differentDomains": false,
  "baseUrl": "",
  "dynamicRouteParams": false,
  "customRoutes": "page",
  "pages": {},
  "skipSettingLocaleOnNavigate": false,
  "types": "composition",
  "debug": false,
  "parallelPlugin": false,
  "multiDomainLocales": false,
  "i18nModules": []
}

export const normalizedLocales = [
  {
    "code": "en",
    "name": "English",
    "files": [
      {
        "path": "C:/Users/ruman/Downloads/themeforest-jE7N9u7U-tronis-transport-logistics-vue-nuxt-template/tronis/file/locales/en-US.json"
      }
    ]
  },
  {
    "code": "ja",
    "name": "日本語",
    "files": [
      {
        "path": "C:/Users/ruman/Downloads/themeforest-jE7N9u7U-tronis-transport-logistics-vue-nuxt-template/tronis/file/locales/ja-JP.json"
      }
    ]
  }
]

export const NUXT_I18N_MODULE_ID = "@nuxtjs/i18n"
export const parallelPlugin = false
export const isSSG = false

export const DEFAULT_DYNAMIC_PARAMS_KEY = "nuxtI18n"
export const DEFAULT_COOKIE_KEY = "i18n_redirected"
export const SWITCH_LOCALE_PATH_LINK_IDENTIFIER = "nuxt-i18n-slp"

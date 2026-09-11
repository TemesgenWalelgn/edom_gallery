export const siteConfig = {
  // Brand Names in 3 Languages
  name: {
    en: "KIDO Flowers & Gifts Shop",
    am: "ኪዶ አበባ እና ስጦታ መሸጫ",
    om: "Kennaafi Abaaboowwan Kido",
  },
  tagline: {
    en: "Beautiful flowers and custom surprise packages for your special moments",
    am: "ለልዩ ቀናትዎ የሚያምሩ አበቦች እና የስጦታ ፓኬጆች",
    om: "Abaaboowwan miidhagoo fi qophii kennaa addaa guyyoota keessaniif",
  },
  about: {
    en: "Kido Gifts & Flower Shop - Express your love through gifts and flowers.",
    am: "ኪዶ አበባ እና ስጦታ መሸጫ - ፍቅሮን በስጦታ እና በአበባ ይግለጹ።",
    om: "Suuqii Kennaa fi Abaabsaa Kido - Jaalala keessan kennaadhaan ibsaa.",
  },

  // Assets
  logoUrl: "https://res.cloudinary.com/dmp2grjb1/image/upload/v1787681880/kido_logo_f2vkmh.png",
  uploadPreset: process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "kido_uploads",

  // Contact & Social Media
  telegramUsername: "kido1222",
  telegramChannel: "https://t.me/kidodelivery",
  tiktokUrl: "https://tiktok.com/@kido.surprise.delivery",
  instagramUrl: "https://instagram.com/kido122227",
  phoneDisplay: "+251 951 161 632",
  phoneRaw: "+251951161632",

  // Store Location & Maps Search Query
  locationName: {
    en: "kido gift shop Harar, Ethiopia",
    am: "ኪዶ ስጦታ ሱቅ ሐረር፣ ኢትዮጵያ",
    om: "kido gift shop Harar, Itoophiyaa",
  },
  mapSearchQuery: "Kido+gift+shop+harar",
};
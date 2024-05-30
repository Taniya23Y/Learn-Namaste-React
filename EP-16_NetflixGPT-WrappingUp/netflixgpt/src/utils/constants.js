export const LOGO = "/Netflix_logo.png";

export const USER_PROFILE = "/netflix-profile-pictures.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_IMG = "netflix-bg-cover.jpg";

export const supportedLanguages = [
  { identifier: "En", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },
  { identifier: "turkish", name: "Turkish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

export const TMDB_SEARCH = "https://api.themoviedb.org/3/search/movie";

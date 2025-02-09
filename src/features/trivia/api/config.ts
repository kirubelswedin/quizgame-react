// Trivia API endpoint
export const BASE_URL = "https://opentdb.com";
export const API_ENDPOINTS = {
  QUIZ: `${BASE_URL}/api.php`,
  TOKEN: `${BASE_URL}/api_token.php`,
  CATEGORIES: `${BASE_URL}/api_category.php`,
} as const;
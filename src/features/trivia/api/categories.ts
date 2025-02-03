import { API_ENDPOINTS } from "@/features/trivia/api";

let CATEGORY_IDS: { [key: string]: number } | null = null;

export const fetchCategories = async (): Promise<{ [key: string]: number }> => {
  try {
    const response = await fetch(API_ENDPOINTS.CATEGORIES);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    // console.log('Fetched categories:', data.trivia_categories);
    const categories = data.trivia_categories.reduce((acc: { [key: string]: number }, category: { id: number; name: string }) => {
      acc[category.name] = category.id;
      return acc;
    }, {});
    CATEGORY_IDS = categories;
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getCategoryIds = async () => {
  if (!CATEGORY_IDS) {
    CATEGORY_IDS = await fetchCategories();
  }
  return CATEGORY_IDS;
};
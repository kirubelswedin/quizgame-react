import { API_ENDPOINTS } from "@/api/trivia/config";

export const fetchCategories = async (): Promise<{ [key: string]: number }> => {
  try {
    const response = await fetch(API_ENDPOINTS.CATEGORIES);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const data = await response.json();
    // console.log('Fetched categories:', data.trivia_categories);
    return data.trivia_categories.reduce((acc: { [key: string]: number }, category: { id: number; name: string }) => {
      acc[category.name] = category.id;
      return acc;
    }, {});
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const CATEGORY_IDS = await fetchCategories();
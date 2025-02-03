import { API_ENDPOINTS } from "@/api/trivia/config";

const SESSION_TOKEN_KEY = 'trivia_token';
const TOKEN_EXPIRY_KEY = 'trivia_token_expiry';
const TOKEN_EXPIRY_HOURS = 6;

export const getToken = async (): Promise<string> => {
 try {
   // Check existing token
   const storedToken = localStorage.getItem(SESSION_TOKEN_KEY);
   const tokenExpiry = localStorage.getItem(TOKEN_EXPIRY_KEY);
   
   if (storedToken && tokenExpiry && Date.now() < Number(tokenExpiry)) {
     return storedToken;
   }

   // Request new token
   const response = await fetch(`${API_ENDPOINTS.TOKEN}?command=request`);
   if (!response.ok) throw new Error('Failed to get token');
   
   const data = await response.json();
   if (!data.token) throw new Error('Invalid token response');

   // Store token with expiry
   const expiryTime = Date.now() + (TOKEN_EXPIRY_HOURS * 60 * 60 * 1000);
   localStorage.setItem(SESSION_TOKEN_KEY, data.token);
   localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());

   return data.token;
 } catch (error) {
   console.error('Token error:', error);
   throw error;
 }
};
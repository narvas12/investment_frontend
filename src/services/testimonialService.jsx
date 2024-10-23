import { API } from '../api/apiEndpoints';


export const fetchTestimonials = async () => {
  try {
    const response = await fetch(API.TESTIMONIALS.LIST); 
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error; 
  }
};

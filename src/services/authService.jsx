import axiosInstance from '../utils/axiosConfig';

const getAuthenticatedUser = async (userId) => {
  try {
    const response = await axiosInstance.get(`/user/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching authenticated user data:', error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post('/auth/login/', credentials);
    const { access, refresh, user } = response.data;

    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('userId', user.id);

    return { access, refresh, user };
  } catch (error) {
    throw error;
  }
};

const logoutUser = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userId');
};

export default { getAuthenticatedUser, loginUser, logoutUser }; // Default export

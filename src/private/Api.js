// src/api.js
import axios from 'axios';

const API = axios.create({
	baseURL: 'https://personal-portfolio-backend-weld.vercel.app/api/', // Change if your backend port is different
});

export default API;
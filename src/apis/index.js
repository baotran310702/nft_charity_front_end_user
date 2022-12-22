import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:7271/",
});

// ==> token author
// API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
//     req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//   }
//   return req;
// });

export const getCamp = () => API.get("/api/camp");
export const getCampById = (id) => API.get(`/api/camp/id?id=${id}`);

export const getAuction = () => API.get('/api/auctionAll');
export const getAuctionById = (id) => API.get(`/api/auction?id=${id}`);
export const createTrans = (trans) => API.post(`/api/trans`, trans);

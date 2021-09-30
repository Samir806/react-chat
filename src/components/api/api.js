import * as axios from "axios";

const inst = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "cc3524f2-fb92-46dc-85f8-4a705068f35e",
  },
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return inst
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  getProfile(userId) {
    return inst.get(`profile/` + userId).then((response) => response.data);
  },
  getAuth() {
    return inst.get(`auth/me`);
  },

  unfollow(userid) {
    return inst.delete(`follow/${userid}`)
  },

  follow(userid) {
    return inst.post(`follow/${userid}`)
      .then((response) => response.data);
  },
};

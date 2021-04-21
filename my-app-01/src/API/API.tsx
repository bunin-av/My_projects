import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "7e59ed63-3050-4cd5-9cf6-cc004ac69363"}
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
    },
    followUser(id: number) {
        return axiosInstance.post(`follow/${id}`)
          .then(response => response.data)
    },
    unfollowUser(id: number) {
        return axiosInstance.delete(`follow/${id}`)
          .then(response => response.data)
    },
}

export const profileAPI = {
    getUserProfile(userId: number) {
        return axiosInstance.get(`profile/` + userId)
          .then(response => response.data)
    },
    getAuthMe() {
        return axiosInstance.get(`auth/me`)
          .then(response => response.data)
    },
}



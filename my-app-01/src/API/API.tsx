import axios from "axios";
import {LogInDataType} from "../redux/auth-reducer";

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

    getUserStatus(userId: number) {
        return axiosInstance.get<string>(`profile/status/${userId}`)
          .then(response => response.data)
    },
    updateMyStatus(status: string) {
        return axiosInstance.put(`profile/status`, {status})
          .then(response => response.data)
    },
}


export const authAPI = {
    getAuthMe() {
        return axiosInstance.get(`auth/me`)
          .then(response => response.data)
    },
    logIn(logInData: LogInDataType) {
        return axiosInstance.post(`auth/login`, logInData)
          .then(response => {
             return response.data
          })
    },
    logOut() {
        return axiosInstance.delete(`auth/login`)
          .then(response => response.data)
    }
}

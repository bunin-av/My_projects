import axios from "axios";
import {LogInDataType} from "../redux/auth-reducer";
import {UserStateType} from "../redux/findFriends-reducer";
import {UserProfileType} from "../redux/profile-reducer";
import {UserInfoDataType} from "../components/Profile/Bio/EditProfileForm/EditProfileForm";

const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "7e59ed63-3050-4cd5-9cf6-cc004ac69363"}
})

type UsersGet = {
    error: string
    totalCount: number
    items: UserStateType[]
}
type StandardResponse = {
    resultCode: number
    messages: string[]
    data: {}
}
type LoadPhoto = {
    resultCode: number
    messages: string[]
    data: {
        small:string
        large: string
    }
}
export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return axiosInstance.get<UsersGet>(`users?page=${currentPage}&count=${pageSize}`)
          .then(response => response.data)
    },
    followUser(id: number) {
        return axiosInstance.post<StandardResponse>(`follow/${id}`)
          .then(response => response.data)
    },
    unfollowUser(id: number) {
        return axiosInstance.delete<StandardResponse>(`follow/${id}`)
          .then(response => response.data)
    },
}


export const profileAPI = {
    getUserProfile(userId: number) {
        return axiosInstance.get<UserProfileType>(`profile/` + userId)
          .then(response => response.data)
    },

    getUserStatus(userId: number) {
        return axiosInstance.get<string>(`profile/status/${userId}`)
          .then(response => response.data)
    },
    updateMyStatus(status: string) {
        return axiosInstance.put<StandardResponse>(`profile/status`, {status})
          .then(response => response.data)
    },
    loadProfileInfo(info: UserInfoDataType) {
        return axiosInstance.put<StandardResponse>(`profile`, info)
          .then(response => response.data)
    },
    loadPhoto(file: File) {
        const formData = new FormData()
        formData.append("image", file)
        return axiosInstance.put<LoadPhoto>(`profile/photo`, formData,
          {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
          .then(response => response.data)
    },
}

type AuthGet = {
    resultCode: number
    messages: string[]
    data: {
        id: number
        email: string
        login: string
    }
}
type AuthPost = {
    resultCode: number
    messages: string[]
    data: { userId: number } | {}
}

export const authAPI = {
    getAuthMe() {
        return axiosInstance.get<AuthGet>(`auth/me`)
          .then(response => response.data)
    },
    logIn(logInData: LogInDataType) {
        return axiosInstance.post<AuthPost>(`auth/login`, logInData)
          .then(response => {
              return response.data
          })
    },
    logOut() {
        return axiosInstance.delete<AuthPost>(`auth/login`)
          .then(response => response.data)
    },
    getCaptcha(){
        return axiosInstance.get(`security/get-captcha-url`)
            .then(response => response.data)
    },
}

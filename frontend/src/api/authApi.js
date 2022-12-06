import axiosClient from './axiosClient'

const authAPI = {
	register: async (data) => {
		const url =
      "https://backen-production-351c.up.railway.app/api/v1/register";
		return await axiosClient.post(url, data)
	},

	login: async (data) => {
		const url = "https://backen-production-351c.up.railway.app/api/v1/login";
		return await axiosClient.post(url, data)
	},
}

export default authAPI

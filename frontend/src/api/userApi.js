import axiosClient from './axiosClient'

const userAPI = {
	getAllUser: async (params) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/users'
		return await axiosClient.get(url, { params })
	},

	addUser: async (data) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/users'
		return await axiosClient.post(url, data)
	},

	updateUser: async (data) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/users/${data._id}`
		return await axiosClient.put(url, data)
	},

	getUser: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/users/${id}`
		return await axiosClient.get(url)
	},

	deleteUser: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/users/${id}`
		return await axiosClient.delete(url)
	},

	// forgotPassword: async (email) => {
	// 	const url = 'https://backen-production-351c.up.railway.app/api/v1/users/forgot-password'
	// 	return await axiosClient.post(url, { email })
	// },

	// resetPassword: async (id, token) => {
	// 	const url = `https://backen-production-351c.up.railway.app/api/v1/users/password-reset/:${id}/:${token}`
	// 	return await axiosClient.post(url)
	// },
}

export default userAPI

import axiosClient from './axiosClient'

const categoryAPI = {
	getAllCategory: async (params) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/categories'
		return await axiosClient.get(url, { params })
	},

	addCategory: async (data) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/categories'
		return await axiosClient.post(url, data)
	},

	updateCategory: async (data) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/categories/${data._id}`
		return await axiosClient.put(url, data)
	},

	getCategory: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/categories/${id}`
		return await axiosClient.get(url)
	},

	deleteCategory: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/categories/${id}`
		return await axiosClient.delete(url)
	},
}

export default categoryAPI

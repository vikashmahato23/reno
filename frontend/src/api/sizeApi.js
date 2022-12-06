import axiosClient from './axiosClient'

const sizeAPI = {
	getAllSize: async (params) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/sizes'
		return await axiosClient.get(url, { params })
	},

	addSize: async (data) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/sizes'
		return await axiosClient.post(url, data)
	},

	updateSize: async (data) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/sizes/${data._id}`
		return await axiosClient.put(url, data)
	},

	getSize: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/sizes/${id}`
		return await axiosClient.get(url)
	},

	deleteSize: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/sizes/${id}`
		return await axiosClient.delete(url)
	},
}

export default sizeAPI

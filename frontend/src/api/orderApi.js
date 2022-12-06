import axiosClient from './axiosClient'

const orderAPI = {
	getAllOrder: async (userId) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/orders'

		if (userId) {
			return await axiosClient.get(url, userId)
		} else {
			return await axiosClient.get(url)
		}
	},

	addOrder: async (data) => {
		const url = 'https://backen-production-351c.up.railway.app/api/v1/orders'
		return await axiosClient.post(url, { data })
	},

	updateOrder: async (data) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/orders/${data.id}`
		return await axiosClient.put(url, { data })
	},

	getOrder: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/orders/${id}`
		return await axiosClient.get(url)
	},

	deleteOrder: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/orders/${id}`
		return await axiosClient.delete(url)
	},
}

export default orderAPI

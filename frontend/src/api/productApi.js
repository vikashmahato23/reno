import axiosClient from './axiosClient'

const productAPI = {
	getAllProduct: async (params) => {
		const url = "https://backen-production-351c.up.railway.app/api/v1/products";
		return await axiosClient.get(url, { params })
	},

	addProduct: async (data) => {
		const url = "https://backen-production-351c.up.railway.app/api/v1/products";

		return await axiosClient.post(url, data)
	},

	updateProduct: async (data) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/products/${data._id}`;
		return await axiosClient.put(url, data)
	},

	getProduct: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/products/${id}`;
		return await axiosClient.get(url)
	},

	deleteProduct: async (id) => {
		const url = `https://backen-production-351c.up.railway.app/api/v1/products/${id}`;
		return await axiosClient.delete(url)
	},
}

export default productAPI

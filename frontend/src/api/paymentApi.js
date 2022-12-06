import axiosClient from './axiosClient'

const paymentAPI = {
	addPayment: async (data) => {
		const url =
      "https://backen-production-351c.up.railway.app/api/v1/payments";
		return await axiosClient.post(url, { data })
	},
}

export default paymentAPI

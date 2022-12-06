import axiosClient from './axiosClient'

const uploadAPI = {
	upload: async (files) => {
		let formData = new FormData()
		files.forEach((file) => {
			formData.append('files', file)
		})

		return await axiosClient.post(
      "https://backen-production-351c.up.railway.app/api/v1/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
	},
}

export default uploadAPI

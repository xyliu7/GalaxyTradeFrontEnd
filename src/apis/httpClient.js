import axios from 'axios'

const defaultApiConfig = {
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true,
	transformRequest: [data => JSON.stringify(data)]
}

export function httpPost(url, postBody, apiConfig = defaultApiConfig) {
	return axios.post(url, postBody, apiConfig)
}

export function httpGet(url) {
	return axios.get(url, {
		withCredentials: true
	})
}
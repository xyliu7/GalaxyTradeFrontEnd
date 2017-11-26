const RestUtils = {
	checkStatusJson,
	checkStatusBuffer
}

export function checkStatusJson(response) {
	return new Promise((resolve, reject) => {
		if (response.status === 200) {
			resolve(response.data)
		} else {
			reject(response.data)
		}
	})
}

export function checkStatusBuffer(response) {
	return new Promise((resolve, reject) => {
		if (response.status === 200) {
			resolve(response.data)
		} else {
			reject(response.data)
		}
	})
}
export default  RestUtils;
export const get = async (req) => {
	const res = await fetch('https://usermodel-dev.ehlacademy.org/v1/tutorApi/list_zoom_tutor', {
		headers: {
			'Authorization': 'Basic ZWhsX2FwaToyNzE1MDkwMA==',
			'Content-Type': 'application/json'
		}
	})
	const json = await res.json()
	return {
		body: {
			teacher_list: json.data
		}
	}
}
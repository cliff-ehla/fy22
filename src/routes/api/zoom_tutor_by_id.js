import {usermodel} from '$lib/usermodal'

export const get = async (res) => {
	return usermodel(res, `/tutorApi/zoom_tutor_by_id?tutor_id=${res.query.get('tutor_id')}`)
}
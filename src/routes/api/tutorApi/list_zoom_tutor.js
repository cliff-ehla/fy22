import {usermodel} from "$lib/usermodal";

export const get = async (req) => {
	return await usermodel(req, `/tutorApi/list_zoom_tutor`)
}
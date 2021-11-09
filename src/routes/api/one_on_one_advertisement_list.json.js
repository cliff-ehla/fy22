import {usermodel} from "$lib/usermodal";

export const get = async (req) => {
	return usermodel(req, '/courseApi/one_on_one_advertisement_list')
}
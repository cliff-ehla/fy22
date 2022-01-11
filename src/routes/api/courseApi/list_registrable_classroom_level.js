import {usermodel} from "$lib/usermodal";

export const get = async (req) => {
	return await usermodel(req, `/courseApi/list_registrable_classroom_level?rc_type=${req.query.get('rc_type')}`)
}
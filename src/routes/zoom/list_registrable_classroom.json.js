import {usermodel} from "$lib/usermodal";

export const post = async (req) => {
	return await usermodel(req, `/courseApi/list_registrable_classroom?encode=1`, {
		params: {
			rc_tag: 'all',
			rc_type: 'big'
		}
	})
}
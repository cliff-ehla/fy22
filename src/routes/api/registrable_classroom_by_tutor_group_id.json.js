import {usermodel} from "$lib/usermodal";

export const post = async (req) => {
	return usermodel(req, '/courseApi/registrable_classroom_by_tutor_group_id?encode=1', {
		params: {
			tutor_group_id: req.body.tutor_group_id
		}
	})
}
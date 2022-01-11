import {usermodel} from "$lib/usermodal";

export const post = async (req) => {
	return usermodel(req, '/courseApi/registrable_classroom_by_tutor_group_id', {
		tutor_group_id: req.body.tutor_group_id
	})
}
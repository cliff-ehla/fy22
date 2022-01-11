import {usermodel} from "$lib/usermodal";

export const post = async (req) => {
	return await usermodel(req, '/courseApi/list_registrable_classroom_v2', {
		rc_tag: req.body.rc_tag,
		rc_type: req.body.rc_type,
		tutor_id: req.body.tutor_id,
		rc_level: req.body.rc_level
	})
}
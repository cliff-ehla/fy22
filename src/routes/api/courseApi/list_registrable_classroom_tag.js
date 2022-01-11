import {usermodel} from "$lib/usermodal";

export const get = async (req) => {
	const {status, body} = await usermodel(req, `/courseApi/list_registrable_classroom_tag_v2`)

	return {
		status,
		body: {
			data: body.data.rc_tags,
			debug: body.debug,
			success: body.success
		}
	}
}
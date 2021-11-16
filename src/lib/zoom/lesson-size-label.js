import {_} from 'svelte-i18n'
import {get} from 'svelte/store'

export const lessonSizeLabel = (lesson) => {
	if (Number(lesson.student_size) === 9999) {
		return get(_)('unlimited_people_class')
	} else if (lesson.rc_type === 'big') {
		return get(_)('20_people_class')
	} else if (lesson.rc_type === 'small') {
		return get(_)('4_people_class')
	}
}
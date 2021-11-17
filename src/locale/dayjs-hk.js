import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale.js'
dayjs.extend(updateLocale)

dayjs.updateLocale('zh-hk', {
	meridiem: (hour, minute, isLowercase) => {
		return hour > 12 ? '下午' : '上午'
	}
})
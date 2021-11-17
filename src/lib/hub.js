import * as Sentry from "@sentry/browser";
import {Integrations} from "@sentry/tracing";
let sentry_dsn = import.meta.env.VITE_SENTRY_DSN
let env = import.meta.env.VITE_ENV

const hub = (() => {
	let hub

	const init = () => {
		if (['production', 'staging'].includes(env)) {
			hub = Sentry.init({
				dsn: sentry_dsn,
				environment: env,
				integrations: [new Integrations.BrowserTracing()],
				tracesSampleRate: 1.0,
			});
		}
	}

	const log = (error) => {
		if (['production', 'staging'].includes(env)) {
			hub.captureException(error)
		}
	}

	return {
		log,
		init
	}
})()

export {hub}
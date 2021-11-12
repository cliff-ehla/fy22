import pino from 'pino'
import { logflarePinoVercel } from 'pino-logflare'

const { stream, send } = logflarePinoVercel({
	apiKey: 'nfTzr3eoz8Xf',
	sourceToken: 'b97fad11-25dc-4642-82a6-6eeb11d8a1fe',
})

const logger = pino(
		{
			browser: {
				transmit: {
					send: send,
				},
			},
			level: 'debug'
		},
		stream
)

const formatObjectKeys = (headers) => {
	const keyValues = {}

	Object.keys(headers).map((key) => {
		const newKey = key.replace(/-/g, '_')
		keyValues[newKey] = headers[key]
	})

	return keyValues
}

export { logger, formatObjectKeys }
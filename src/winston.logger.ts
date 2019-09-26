import { Logger } from '@nestjs/common';

export class WinstonLogger {
    private readonly logger: Logger;

    /**
     * Creates an instance of WinstonLogger.
     * @param {string} context
     * @memberof WinstonLogger
     */
    constructor(context: string) {
        this.logger = new Logger(context, true);
    }
    /**
     * Log an info message
     *
     * @param {string} message
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public log(message: string, meta: object = {}) {
        this.logger.log({ message, ...meta});
    }

    /**
     * Log an info message
     * @param {string} message
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public info(message: string, meta: object = {}) {
        this.logger.log({ message, ...meta});
    }

    /**
     * Log a debug message
     * @param {string} message
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public debug(message: string, meta: object = {}) {
        this.logger.debug({ message, ...meta});
    }

    /**
     * Log a verbose message
     * @param {string} message
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public verbose(message: string, meta: object = {}) {
        this.logger.verbose({ message, ...meta});
    }

    /**
     * Log an error message
     * @param {string} message
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public error(message: string, meta: object = {}) {
        this.logger.error({ message, ...meta});
    }

    /**
     * Log a warn message
     * @param {string} message
     * @param {object} meta
     * @memberof WinstonLogger
     */
    public warn(message: string, meta: object = {}) {
        this.logger.warn({ message, ...meta});
    }
}

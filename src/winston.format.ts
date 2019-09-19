import colors = require('colors/safe');
import { format } from 'winston';

export const winstonConsoleFormat = format.printf(({ context, level, timestamp, message, ...meta }) => {
    return `${level}: ${new Date(timestamp).toLocaleString()}\t [${colors.yellow(context)}] ${message} - ${JSON.stringify(meta)}`;
  });

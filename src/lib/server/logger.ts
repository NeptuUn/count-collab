const LOG_LEVELS = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
  fatal: 4,
  silent: 5,
} as const;

type LogLevel = keyof typeof LOG_LEVELS;

function getConfiguredLevel(): LogLevel {
  const raw = (process.env.LOG_LEVEL ?? "info").toLowerCase();
  return raw in LOG_LEVELS ? (raw as LogLevel) : "info";
}

function timestamp(): string {
  return new Date().toISOString();
}

function formatMessage(
  level: string,
  message: string,
  meta?: Record<string, unknown>,
): string {
  const base = `${timestamp()} [${level.toUpperCase().padEnd(5)}] ${message}`;
  if (meta && Object.keys(meta).length > 0) {
    return `${base} ${JSON.stringify(meta)}`;
  }
  return base;
}

function shouldLog(level: LogLevel): boolean {
  return LOG_LEVELS[level] >= LOG_LEVELS[getConfiguredLevel()];
}

function debug(message: string, meta?: Record<string, unknown>): void {
  if (shouldLog("debug")) {
    console.debug(formatMessage("debug", message, meta));
  }
}

function info(message: string, meta?: Record<string, unknown>): void {
  if (shouldLog("info")) {
    console.info(formatMessage("info", message, meta));
  }
}

function warn(message: string, meta?: Record<string, unknown>): void {
  if (shouldLog("warn")) {
    console.warn(formatMessage("warn", message, meta));
  }
}

function error(message: string, meta?: Record<string, unknown>): void {
  if (shouldLog("error")) {
    console.error(formatMessage("error", message, meta));
  }
}

function fatal(message: string, meta?: Record<string, unknown>): void {
  if (shouldLog("fatal")) {
    console.error(formatMessage("fatal", message, meta));
  }
}

export const logger = { debug, info, warn, error, fatal };

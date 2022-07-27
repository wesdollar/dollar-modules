/* eslint-disable no-magic-numbers */

/**
 * Human-readable constants for HTTP status codes. Should be
 * used throughout the application instead of referrencing
 * codes/numbers directly.
 */
export const httpStatusCodes = {
  // 200 block
  success: 200,
  created: 201,
  accepted: 202,
  nonAuthoritativeInfo: 203,
  noContent: 204,
  resetContent: 205,
  partialContent: 206,
  multiStatus: 207,
  alreadyReported: 208,
  imUsed: 226,

  // 300 block
  multipleChoices: 300,
  movedPermanently: 301,
  found: 302,
  seeOther: 303,
  notModified: 304,
  useProxy: 305,
  tempRedirect: 307,
  permanentRedirect: 308,

  // 400 block
  badRequest: 400,
  unprocessable: 422,
  unauthorized: 401,
  paymentRequired: 402,
  forbidden: 403,
  notFound: 404,
  methodNotAllowed: 405,
  notAcceptable: 406,
  proxyAuthRequired: 407,
  requestTimeout: 408,
  conflict: 409,
  gone: 410,
  lengthRequired: 411,
  preconditionFailed: 412,
  payloadTooLarge: 413,
  uriTooLong: 414,
  unsupportedMediaType: 415,
  rangeNotSatisfiable: 416,
  expectationFailed: 417,
  immaTeapot: 418,
  misdirected: 421,
  unprocessableEntity: 422,
  lcoked: 423,
  failedDependency: 424,
  upgradeRequired: 426,
  preconditionRequired: 428,
  tooManyRequests: 429,
  headersTooLarge: 431,
  connectionClosed: 444,
  unavailableForLegalReasons: 451,
  clientClosed: 499,

  // 500 block
  serverError: 500,
  notImplemented: 501,
  badGateway: 502,
  serviceUnavailable: 503,
  gatewayTimeout: 504,
  httpVersionNotSupported: 505,
  variantAlsoNegotiates: 506,
  insufficientStorage: 507,
  loopDetected: 508,
  notExtended: 510,
  networkAuthRequired: 511,
  networkTimeout: 599,
} as const;

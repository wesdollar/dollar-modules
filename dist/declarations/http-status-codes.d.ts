/**
 * Human-readable constants for HTTP status codes. Should be
 * used throughout the application instead of referrencing
 * codes/numbers directly.
 */
export declare const httpStatusCodes: {
    readonly success: 200;
    readonly created: 201;
    readonly accepted: 202;
    readonly nonAuthoritativeInfo: 203;
    readonly noContent: 204;
    readonly resetContent: 205;
    readonly partialContent: 206;
    readonly multiStatus: 207;
    readonly alreadyReported: 208;
    readonly imUsed: 226;
    readonly multipleChoices: 300;
    readonly movedPermanently: 301;
    readonly found: 302;
    readonly seeOther: 303;
    readonly notModified: 304;
    readonly useProxy: 305;
    readonly tempRedirect: 307;
    readonly permanentRedirect: 308;
    readonly badRequest: 400;
    readonly unprocessable: 422;
    readonly unauthorized: 401;
    readonly paymentRequired: 402;
    readonly forbidden: 403;
    readonly notFound: 404;
    readonly methodNotAllowed: 405;
    readonly notAcceptable: 406;
    readonly proxyAuthRequired: 407;
    readonly requestTimeout: 408;
    readonly conflict: 409;
    readonly gone: 410;
    readonly lengthRequired: 411;
    readonly preconditionFailed: 412;
    readonly payloadTooLarge: 413;
    readonly uriTooLong: 414;
    readonly unsupportedMediaType: 415;
    readonly rangeNotSatisfiable: 416;
    readonly expectationFailed: 417;
    readonly immaTeapot: 418;
    readonly misdirected: 421;
    readonly unprocessableEntity: 422;
    readonly lcoked: 423;
    readonly failedDependency: 424;
    readonly upgradeRequired: 426;
    readonly preconditionRequired: 428;
    readonly tooManyRequests: 429;
    readonly headersTooLarge: 431;
    readonly connectionClosed: 444;
    readonly unavailableForLegalReasons: 451;
    readonly clientClosed: 499;
    readonly serverError: 500;
    readonly notImplemented: 501;
    readonly badGateway: 502;
    readonly serviceUnavailable: 503;
    readonly gatewayTimeout: 504;
    readonly httpVersionNotSupported: 505;
    readonly variantAlsoNegotiates: 506;
    readonly insufficientStorage: 507;
    readonly loopDetected: 508;
    readonly notExtended: 510;
    readonly networkAuthRequired: 511;
    readonly networkTimeout: 599;
};

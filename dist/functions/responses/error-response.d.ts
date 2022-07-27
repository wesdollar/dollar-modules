import { ErrorResponse } from "../../declarations/error-response";
/**
 * Formats error messages for route response
 * @param object0 response payload, see param comments
 * @returns ErrorResponse
 */
export declare const errorResponse: ({ status, message, error, }: Omit<ErrorResponse, "responseType">) => ErrorResponse;

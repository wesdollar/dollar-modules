"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
/**
 * Formats error messages for route response
 * @param object0 response payload, see param comments
 * @returns ErrorResponse
 */
const errorResponse = ({ 
/** http status code */
status, 
/** human-readable error message */
message, 
/** thrown error if applicable */
error, }) => {
    const response = {
        status,
        message,
        error,
        responseType: "error",
    };
    return response;
};
exports.errorResponse = errorResponse;

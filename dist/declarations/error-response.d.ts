import { ResponseTypes } from "./fetches";
export interface ErrorResponse {
    /** http status code */
    status: number;
    /** human-readble error message */
    message: string;
    /** error payload, such as thrown error */
    error?: unknown;
    /**
     * Useful for helping typescript differientiate between types.
     */
    responseType?: ResponseTypes;
}

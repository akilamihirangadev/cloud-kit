export declare class HttpErrorResponse {
    private readonly message;
    private readonly status;
    private readonly payload;
    private readonly fields;
    private readonly apiStatus;
    constructor(message: string, status: number, payload: {}, fields: [], apiStatus?: string);
    toString(): string;
}
export enum ErrorMessage {
    UNAUTHORIZED = "Unauthorized",
    FORBIDDEN = "Forbidden",
    INVALID_TOKEN = "Invalid Token",
    BAD_REQUEST = "Bad Request",
    NOT_FOUND = "Not Found",
    METHOD_NOT_ALLOWED = "Method Not Allowed",
    NOT_ACCEPTABLE = "Not Acceptable",
    REQUEST_TIMEOUT = "Request Timeout",
    INTERNAL_SERVER_ERROR = "Internal Server Error",
    BAD_GATEWAY = "Bad Gateway",
    SERVICE_UNAVAILABLE = "Service Unavailable",
    TOKEN_EXPIRED = "Token expired",
    TOKEN_REQUIRED = "Token Required"
}
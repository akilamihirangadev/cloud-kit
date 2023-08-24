import { v4 as uuidv4 } from 'uuid';
import { RequestMapper } from '../enum/request.enum';

export class UtilManager {

    private static MY_NAMESPACE = 'person-gw';
    private static MY_IDENTIFIER = 'opusxenta';

    constructor(public json: JSON) { }

    /**
     * 
     * @returns random stirng uuid
     */
    static getRandomString(): string {
        try {
            return uuidv4();
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @param json 
     * @returns sting
     */
    static toJsonStringify(json: any): string {
        try {
            return JSON.stringify(json);
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @param json 
     * @returns JSON
     */
    static toJson(json: string): JSON {
        try {
            return JSON.parse(json);
        } catch (error) {
            throw error;
        }
    }

    /**
     * 
     * @returns datetime - tring yyyy-mm-dd hh:mm:ss
     */

    static getCurrentTime() {
        try {
            return new Date(new Date()).toUTCString();
        } catch (error) {
            throw error;
        }
    }

    static unset(key: string, object: any) {
        delete object[key];
        return object;
    }

    static getRequestMode(request) {
        return request.headers['mode'] ? request.headers['mode'] : RequestMapper.DEFAULT;
    }
}
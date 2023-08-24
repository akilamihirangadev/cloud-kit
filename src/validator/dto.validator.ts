import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export class DtoValidator {
    static async validated(dtoInstances:any){
        let properties = [];
        const validationResults = await Promise.all(dtoInstances);
        const errors = validationResults.flatMap(result => result);
        if (errors.length > 0) {
            errors.forEach((v) => {
                let messages = [];
                for (const key in v.constraints) {
                    messages.push(v.constraints[key])
                }
                let obj = {};
                obj[v.property] = messages;
                properties.push(obj);
            });
        }
        return properties;
    }
}
import 'dotenv/config';
import * as joi from 'joi'


interface EnvVariables {
    PORT: number;
    DATABASE_URL: string;
}

const envSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required()
})
.unknown(true);

const {error, value} = envSchema.validate(process.env);

if(error){
    throw new Error(`config validation error: ${error.message}`);
}

const envVars: EnvVariables = value;


export const envs = {
    port: envVars.PORT,
    databaseUrl: envVars.DATABASE_URL
}
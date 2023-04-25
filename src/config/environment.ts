import * as env from "env-var"

export const DATABASE_URL = env.get("DATABASE_URL").required().asString()

export const JWT_KEY = env.get("JWT_KEY").required().asString()
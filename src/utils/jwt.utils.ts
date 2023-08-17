import jwt from "jsonwebtoken";

export async function generateJwt(payload: object) {
    const { JWT_ACCESS_SECRET } = process.env;
    return jwt.sign(payload, JWT_ACCESS_SECRET as string, {
        expiresIn: 60 * 60 * 8,
    });
}

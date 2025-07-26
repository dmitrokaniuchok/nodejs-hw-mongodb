import jwt from 'jsonwebtoken';
import createHttpError from 'http-errors';

export const authenticate = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw createHttpError(401, 'Authorization header missing');
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      throw createHttpError(401, 'Invalid authorization format');
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          throw createHttpError(401, 'Access token expired');
        }
        throw createHttpError(401, 'Invalid access token');
      }

      req.user = { _id: payload.userId };
      next();
    });
  } catch (error) {
    next(error);
  }
};

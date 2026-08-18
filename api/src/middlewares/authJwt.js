const jwt = require("jsonwebtoken");

const authJwt = (req, res, next) => {
  try {
    // 1. Buscamos el token enviado por el frontend
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "Token no proporcionado",
      });
    }

    // Esperamos: "Bearer TOKEN"
    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(401).json({
        error: "Formato de token inválido",
      });
    }

    // 2. Verificamos que el token sea válido
    const decoded = jwt.verify(
      token,
      process.env.ACCESS_TOKEN
    );

    // 3. Guardamos el ID del usuario autenticado
    // para que los controllers puedan utilizarlo
    req.userId = decoded.id;

    // 4. Permitimos continuar hacia el controller
    next();

  } catch (error) {

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        error: "Token expirado",
      });
    }

    return res.status(401).json({
      error: "Token inválido",
    });
  }
};

module.exports = authJwt;
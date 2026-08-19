const jwt = require("jsonwebtoken");

const refreshTokenController = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({
      error: "Refresh token requerido",
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

    const newAccessToken = jwt.sign(
      { id: decoded.id },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: "30m",
      },
    );

    return res.status(200).json({
      accessToken: newAccessToken,
    });
  } catch (error) {
    return res.status(403).json({
      error: "Refresh token inválido o expirado",
    });
  }
};

module.exports = refreshTokenController;

import jwt from "jsonwebtoken";

export const genAccessToken = (id: string) => {
  const access_token = jwt.sign({ id }, process.env.SECRET, {
    // expiresIn: '10m',
  });
  return access_token;
};

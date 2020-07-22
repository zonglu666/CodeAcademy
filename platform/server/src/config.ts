import { parseEnvironment } from '@public/util/environment';

function getConfig() {
  const ENVIRONMENT = process.env.ENVIRONMENT;
  if (!ENVIRONMENT) throw 'Missing env.ENVIRONMENT';
  const MONGO_URL = process.env.MONGO_URL;
  if (!MONGO_URL) throw 'Missing env.MONGO_URL';

  return {
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 4000,
    ENVIRONMENT: parseEnvironment(ENVIRONMENT),
    MONGO_URL,
  };
}

export default getConfig();

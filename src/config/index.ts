import "dotenv/config";

interface ENV {
  PORT: number | undefined;
  MONGO_URI: string | undefined;
  GOOGLE_API_KEY: string | undefined;
}

interface Config {
  PORT: number;
  MONGO_URI: string;
  GOOGLE_API_KEY: string;
}

const getConfig = (): ENV => {
  return {
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_URI: process.env.MONGO_URI,
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
  };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in .env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;

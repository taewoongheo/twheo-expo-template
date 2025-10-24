const path = require('path');
const dotenv = require('dotenv');
const packageJson = require('./package.json');
const z = require('zod');

const APP_ENV = process.env.APP_ENV ?? 'development';

const envPath = path.resolve(__dirname, `.env.${APP_ENV}`);
console.log('loading env from:', envPath);

dotenv.config({ path: envPath });

const NAME = 'twheo expo template';
const VERSION = packageJson.version;
const SCHEME = 'twheoexpotemplate';

// define env schema
const client = z.object({
  APP_ENV: z.enum(['development', 'production']),
  NAME: z.string(),
  VERSION: z.string(),
  SCHEME: z.string(),

  // add client environment variables here
  SECRET_KEY: z.string(),
});

const buildTime = z.object({
  // add build environment variables here
});

// define env values
const _clientEnv = {
  APP_ENV,
  NAME,
  VERSION,
  SCHEME,

  // add client environment variables here
  SECRET_KEY: process.env.SECRET_KEY,
};

const _buildTimeEnv = {
  // add build environment variables here
};

const ClientEnv = client.safeParse(_clientEnv);
const BuildTimeEnv = buildTime.safeParse(_buildTimeEnv);

if (!ClientEnv.success || !BuildTimeEnv.success) {
  console.error('Invalid environment variables');
  throw new Error('Invalid environment variables');
}

console.log('ClientEnv: ', ClientEnv.data);

module.exports = {
  ClientEnv: ClientEnv.data,
  BuildTimeEnv: BuildTimeEnv.data,
};

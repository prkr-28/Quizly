import { paths } from 'src/routes/paths';

import packageJson from '../package.json';

// ----------------------------------------------------------------------

export type ConfigValue = {
  appName: string;
  appVersion: string;
  serverUrl: string;
  assetsDir: string;
  auth: {
    method: 'jwt';
    skip: boolean;
    redirectPath: string;
  };
};

// ----------------------------------------------------------------------

export const CONFIG: ConfigValue = {
  appName: 'Study Sync',
  appVersion: packageJson.version,
  serverUrl: 'http://localhost:4000/api',
  assetsDir: '/assets',
  auth: {
    method: 'jwt',
    skip: false,
    redirectPath: paths.main.dashboard,
  },
};

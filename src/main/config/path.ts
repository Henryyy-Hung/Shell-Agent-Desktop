import { app } from 'electron';
import path from 'path';

const resourceDirPath = app.isPackaged
  ? path.join(process.resourcesPath, 'assets')
  : path.join(__dirname, '../../assets');

// eslint-disable-next-line import/prefer-default-export
export { resourceDirPath };

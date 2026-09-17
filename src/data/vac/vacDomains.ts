import { aiVac } from './aiVac';
import { mlVac } from './mlVac';
import { embeddedIoTVac } from './IotVac';
import { VACDomain } from './types';

export const vacDomains: Record<string, VACDomain>  = {
  'ai-ml': aiVac,
  'machine-learning': mlVac,
  'embedded-iot': embeddedIoTVac,
};

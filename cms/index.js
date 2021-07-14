import { SiteClient } from 'datocms-client';

export default new SiteClient(process.env.DATOCMS_READONLY_KEY);
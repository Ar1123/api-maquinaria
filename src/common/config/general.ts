import { registerAs } from "@nestjs/config";

export default registerAs('general', () => ({
    VERSION: process.env.VERSION || '1',
  }));
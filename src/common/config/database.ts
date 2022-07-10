
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  mongo_uri: "mongodb+srv://andree:7gbkxMbT2daXRLEw@cluster0.rjjex.mongodb.net/?retryWrites=true&w=majority",
}));

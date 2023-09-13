
import 'dotenv/config';
import { startDatabase } from "../database/database";
import app  from '../app';

const PORT: number = Number(process.env.PORT) || 3000;

app.listen(PORT, async (): Promise<void> => {
  await startDatabase();
  console.log(`Application is running on: http://localhost:${PORT}`);
});
import express from 'express';
import morgan from 'morgan';
import { createUser } from './config/initialsetup.js';
import { connectDB } from './config/configDB.js';
import route from './routes/test.routes.js';

const app = express();
app.use(morgan('dev'));

app.use('/api', route);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

async function setupAPI() {
  try {
    await connectDB();
    console.log("=> Conexión a la base de datos exitosa");
    await createUser();
  } catch (error) {
    console.log("Error en index.js -> setupAPI(), el error es: ", error);
  }
}

setupAPI()
  .then(() => console.log("=> API Iniciada exitosamente"))
  .catch((error) =>
    console.log("Error en index.js -> setupAPI(), el error es: ", error),
  );

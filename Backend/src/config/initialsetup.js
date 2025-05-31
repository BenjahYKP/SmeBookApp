'use strict';
import chalk from 'chalk';
import { AppDataSource } from './configDB.js';
import Usuarios from '../entity/users.js'

async function createUser() {
  try {
    const UserRepository = AppDataSource.getRepository(Usuarios);

    const count = await UserRepository.count();
    if (count > 0) {
      console.log(chalk.yellow("ℹ️  Usuarios ya existen. Se omite creación."));
      return;
    }

    await Promise.all([
      UserRepository.save(UserRepository.create({
        nombreCompleto: "Admin",
        email: "admin2025@gmail.com",
        telefono: "966433091",
        password: "admin123",
        rol: "admin",
      })),
      UserRepository.save(UserRepository.create({
        nombreCompleto: "Cliente",
        email: "cliente2025@gmail.com",
        telefono: "984764839",
        password: "cliente123",
        rol: "cliente",
      }))
    ]);

    console.log(chalk.green("✅ Usuarios creados exitosamente."));
  } catch (error) {
    console.error(chalk.red("❌ Error al crear usuarios:", error));
  }
}
export { createUser };
"use strict"
import { EntitySchema } from "typeorm";

const Usuarios = new EntitySchema({
    name: "User",
    tableName: "users",
    columns: {
        id_user: {
            primary: true,
            type: "int",
            generated: true,
        },
        nombreCompleto: { 
            type: "varchar",
            length: 100,
            nullable: false,
        },
        email: {
            type: "varchar",
            length: 100,
            unique: true,
            nullable: false,
        },
        telefono: {
            type: "varchar",
            length: 15,
            nullable: true,
        },
        password: {
            type: "varchar",
            length: 120,
            nullable: false,
        },
        rol: {
            type: "enum",
            enum: ["admin", "cliente"],
            default: "cliente",
            nullable: false,
        },
        createdAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            nullable: false,
        },
        updatedAt: {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            onUpdate: "CURRENT_TIMESTAMP",
            nullable: false,
        },
    },

   
});

export default Usuarios;
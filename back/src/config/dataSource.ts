// import { DataSource } from "typeorm";
// import { DATABASE_URL, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from "./envs";
// import { User } from "../entities/User";
// import { Credential } from "../entities/Credential";
// import { Order } from "../entities/Order";
// import { Category } from "../entities/Category";
// import { Product } from "../entities/Product";


// const isProduction = !!DATABASE_URL;

// export const AppDataSource = new DataSource({
//   type: "postgres",
//   host: DB_HOST,
//   port: DB_PORT,
//   username: DB_USER,
//   password: DB_PASSWORD,
//   database: DB_NAME,
//   synchronize: true,
//   // dropSchema: true,
//   logging: false,
//     entities: [
//     // ⬅️ La ruta cambia según el entorno
//     isProduction ? "dist/entities/*.js" : "src/entities/*.ts", 
//   ],
//   // entities: [User, Credential, Order, Product, Category],
//   subscribers: [],
//   migrations: [],
// });


// src/config/data-source.ts

import { DataSource, DataSourceOptions } from "typeorm";
import { 
  DATABASE_URL, 
  DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER 
} from "./envs"; 

const isProduction = !!DATABASE_URL;

// 💡 Configuración Base para entidades y otras opciones comunes
const baseOptions: DataSourceOptions = {
    type: "postgres",
    synchronize: true, 
    logging: false,
    entities: [
        isProduction ? "dist/entities/**/*.js" : "src/entities/**/*.ts",  
    ],
    subscribers: [],
    migrations: [],
};

// 💡 Lógica condicional para las credenciales
const connectionOptions: DataSourceOptions = isProduction
    ? { 
        ...baseOptions,
        url: DATABASE_URL, 
        ssl: {
             rejectUnauthorized: false 
        }
    }
    : {
        ...baseOptions,
        host: DB_HOST,
        port: DB_PORT,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        // No necesitas 'ssl' en localhost
    };

export const AppDataSource = new DataSource(connectionOptions);
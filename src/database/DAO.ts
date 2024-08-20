import { DataAccessObject } from "mysql-all-in-one";

const HOST = "localhost";
const PORT = 3306;
const USER = "root";
const PASSWORD = "";

const dao = new DataAccessObject({
	host: HOST,
	port: PORT,
	user: USER,
	password: PASSWORD,
	timezone: "Z",
	database: "central",
});

export { dao };
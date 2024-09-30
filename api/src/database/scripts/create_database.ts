import { db } from "../connection";

const createDatabase = async () => {
    try {
      console.log("Create database")
      await db.raw(`CREATE DATABASE IF NOT EXISTS workout;`);
      console.log('Database created or already exists.');
    } catch (error) {
      console.error('Error creating database:', error);
    } finally {
      await db.destroy();
    }
  };
  
  createDatabase();
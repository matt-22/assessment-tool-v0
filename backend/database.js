import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

export async function getEquipmentList() {
    const [rows] = await pool.query(`SELECT * FROM equipment`)
    /*  query returns an array of js objects
        the 1st item in the returned array are the rows from the sql query
        putting the [] around rows, tells it to put the 1st item from the returned array into rows
    */
    return rows
}

export async function getEquipment(id) {
    const [rows] = await pool.query(`
        SELECT * 
        FROM equipment
        WHERE id = ?
        `, [id])
        return rows[0]    
}

export async function createEquipment(title) {
    const [result] = await pool.query(`
        INSERT INTO equipment (title)
        VALUES (?)
        `, [title])
    const id = result.insertId
    return getEquipment(id)
}



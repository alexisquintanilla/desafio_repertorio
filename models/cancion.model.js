import { pool } from '../database/connection.js'

const getSong = async () => {
    const { rows } = await pool.query('SELECT * FROM CANCIONES')
    return rows
}

const createCanciones = async ({ titulo, artista, tono }) => {
    const query = {
        text: `
        INSERT INTO CANCIONES (TITULO,ARTISTA,TONO) 
        VALUES ($1, $2, $3)
        RETURNING *
        `,
        values: [titulo, artista, tono]
    }

    const { rows } = await pool.query(query)
    return rows[0]
}

const deleteCancion = async (id) => {
    const query = {
        text: `
        DELETE FROM CANCIONES WHERE ID = $1 RETURNING *
        `,
        values: [id]
    }
    const { rows } = await pool.query(query)
    return rows[0]

}

const updateCancion = async (cancion) => {
    const query = {
        text: `UPDATE CANCIONES
        SET TITULO = $2, ARTISTA=$3, TONO=$4
        WHERE ID = $1 RETURNING *`,
        values: [cancion.id, cancion.titulo, cancion.artista, cancion.tono]
    }
    const { rows } = await pool.query(query)
    return rows[0]
}

export const CancionesModel = {
    getSong,
    createCanciones,
    deleteCancion,
    updateCancion
}




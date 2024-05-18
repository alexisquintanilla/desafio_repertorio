import { CancionesModel } from "../models/cancion.model.js";

export const getAllCanciones = async (req, res) => {
    try {
        const canciones = await CancionesModel.getSong()
        return res.json(canciones)
    } catch (error) {
        console.log(error)
    }
}

export const postCanciones = async (req, res) => {
    try {
        const { titulo, artista, tono } = req.body
        const newCancion = {
            titulo,
            artista,
            tono
        }

        const canciones = await CancionesModel.createCanciones(newCancion)
        return res.json(canciones)

    } catch (error) {
        console.log(error)
    }
}

export const deleteCancion = async (req, res) => {
    try {
        const { id } = req.params

        const deleteCancion = await CancionesModel.deleteCancion(id)
        return res.json(deleteCancion)
    } catch (error) {
        console.log(error)
    }

}

export const putCancion = async (req, res) => {
    try {
        const { id } = req.params
        const { titulo, artista, tono } = req.body

        const updateCancion = {
            id,
            titulo,
            artista,
            tono
        }
        const updateCanciones = await CancionesModel.updateCancion(updateCancion)
        return res.json(updateCanciones)
    } catch (error) {
        console.log(error)
        const { code, msg } = handleError(error)
        return res.status(code).json({ ok: false, msg })
    }
}
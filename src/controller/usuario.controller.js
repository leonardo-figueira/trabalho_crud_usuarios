import usuarioService from "../service/usuario.service.js";

async function createUsuarioController(request, response) {
    const novoUsuario = request.body;

    try {
        const usuario = await usuarioService.createUsuarioService(novoUsuario);
        response.status(201).send({usuario});
    } catch(error) {
        response.status(400).send(error.message);
    }
}

export default {
   createUsuarioController 
}
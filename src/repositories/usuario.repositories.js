import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuarios
    id INTEGER PRIMARY KEY AUTO INCREMENT,
    login TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    senha TEXT NOT NULL,
    foto TEXT
`);

function createUsuarioRepository(novoUsuario) {

    const {
        login,
        email,
        senha,
        foto
    } = novoUsuario;

    return new Promise((resolve, reject) => {
        db.run(`
            INSERT INTO usuarios(username, email, password, avatar)
            valuse
            (?, ?, ?, ?)
            `,
            [login, email, senha, foto],
            (error) => {
                if (error) {
                    PromiseRejectionEvent(err);
                } else {
                    resolve({
                        message: "Usuário criado"
                    });
                }
            }
        );
    });
}

export default {
    createUsuarioRepository
}
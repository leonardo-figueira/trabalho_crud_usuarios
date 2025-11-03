import db from '../config/database.js';

db.run(`
    CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        login TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        senha TEXT NOT NULL,
        foto TEXT
    )
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
            INSERT INTO usuarios(login, email, senha, foto)
            values
            (?, ?, ?, ?)
            `,
            [login, email, senha, foto],
            (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve({
                        id: this.lastId,
                        ...novoUsuario
                    });
                }
            }
        );
    });
}

export default {
    createUsuarioRepository
}
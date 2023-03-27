import { client } from "./database";

export default class DbService{
    static async getAllFilms(){
        try {
            const { rows } = await client.query('SELECT * FROM films');
            return rows;
        } catch (err) {
            console.error('Error executing query', err);
            throw err;
        }
    }

    static async getFilmById(filmId){
        try {
            const { rows } = await client.query(`SELECT * FROM films WHERE id = ${filmId}`);
            return rows;
        } catch (err) {
            console.error('Error executing query', err);
            throw err;
        }
    }

    static async insertFilm(film){
        try {
            const query = {
                text: 'INSERT INTO films(filmtitle, genre, mainactor) VALUES($1, $2, $3)',
                values: [film.filmtitle, film.genre, film.mainactor]
            };

            await client.query(query);
        } catch (err) {
            console.error('Error executing query', err);
            throw err;
        }
    }
}
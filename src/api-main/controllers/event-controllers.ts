import { Request, Response } from "express";
import DbService from "../services/queries";
import { filmSchema } from "../schemas/schema";
export class EventController {
    static async eventController(req: Request, res: Response): Promise<void> {
        const events = await DbService.getAllFilms()

        res.send(events);
    }

    static async eventControllerById(req: Request, res: Response): Promise<void> {
        const events = await DbService.getFilmById(+req.params.id)

        res.send(events);
    }

    static async eventControllerInsertFilm(req: Request, res: Response): Promise<void> {
        const { error, value: film } = filmSchema.validate(req.body);

        if (error) {
            res.status(400).send(`Invalid request data: ${error.message}`);
            return;
        }

        await DbService.insertFilm(film);

        res.send(`Film "${film.filmtitle}" was successfully inserted`);
    }
}
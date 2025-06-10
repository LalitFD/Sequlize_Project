import { Books } from "../Model/Books.model.js";
import { review } from "../Model/review.model.js";

export const SaveBooks = async (request, response, next) => {
    try {
        let BooksList = request.body;
        for (let book of BooksList) {
            await Books.create(book, { include: [review] })
        }
        return response.status(201).json({ message: "All Books saved.." });

    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "Internal server error" })
    }
}
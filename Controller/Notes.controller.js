import { notes } from "../Model/notes.model.js";
import { User } from "../Model/user.model.js";
import { storage } from "../Routes/notes.router.js";
// import { notes } from "../Model/notes.model.js";

export const uploadNotes = async (request, response) => {
    try {
        // console.log("=== DEBUG ===");
        // console.log("request.params:", request.params);
        // console.log("request.file:", request.file);
        // console.log("request.body:", request.body);
        // console.log("==============");

        const { title } = request.body;
        const userId = parseInt(request.params.userId);

        //http://localhost:3000/note/upload/2

        // node -- app.js 
        // upload -- router
        // 2 --userId

        const file = request.file.filename;

        const newNote = await notes.create({
            title: title,
            file_name: file,
            userId: userId,
        });

        return response.status(201).json({ message: "Note uploaded successfully", note: newNote });
    } catch (err) {
        console.error(err);
        return response.status(500).json({ error: "Internal server error" });
    }
};

export const getAllNotes = async (req, res) => {
    try {
        // const id = parseInt(req.params.userId)
        const data = await notes.findAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed', error: err.message });
    }
};



export const getNoteId = async (request, response) => {
    try {
        let id = parseInt(request.params.userId);
        let Note = await notes.findAll({
            where: {
                userId: id
            }
        })
        return response.status(201).json({ notes: Note })
    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "internal server error" })
    }
}

export const deleteById = async (request, response) => {
    try {
        let id = parseInt(request.params.userId);
        let del = await notes.destroy({
            where: {
                userId: id
            }
        })
        return response.status(201).json({ message: "Delete successs !" })
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" })
    }
}

export const titleName = async (request, response) => {
    try {
        let title = request.params.title;
        let id = parseInt(request.params.userId)
        let del = await notes.destroy({
            where: {
                userId: id,
                title: title
            }
        })
        return response.status(201).json({ message: "Delete success" })
    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "Internal server error" })
    }
}

export const updateNote = async (request, response) => {
    try {
        const userId = parseInt(request.params.userId);
        const oldTitle = request.params.title;

        const newtitle = request.body.title;
        const fileName = request.file.filename;
        console.log(fileName)

        const updateFields = {
            ...(newtitle && { title: newtitle }),
            ...(fileName && { file_name: fileName })
        };

        const result = await notes.update(updateFields, {
            where: { userId: userId, title: oldTitle }
        });

        return response.status(201).json({ message: "Update successfully" })
    } catch (err) {
        console.log(err);
        return response.status(500).json({ error: "Internal server error" })
    }
}
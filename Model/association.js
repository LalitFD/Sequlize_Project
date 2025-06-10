import { User } from "./user.model.js";
import { notes } from "./notes.model.js";
import { Books } from "./Books.model.js";
import { review } from "./review.model.js";

User.hasMany(notes);
notes.belongsTo(User);

User.hasMany(Books);
Books.belongsTo(User);

Books.hasMany(review);
review.belongsTo(Books);

// Final export
export { User, notes, Books, review };

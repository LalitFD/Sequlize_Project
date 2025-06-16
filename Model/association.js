import { User } from "./user.model.js";
import { notes } from "./notes.model.js";
import { Books } from "./Books.model.js";
import { review } from "./review.model.js";
import { cart } from "./cart.model.js";
import { cart_item } from "./cart_item.model.js";

User.hasMany(notes);
notes.belongsTo(User);

User.hasMany(Books);
Books.belongsTo(User);

Books.hasMany(review);
review.belongsTo(Books);

User.hasOne(cart);
cart.belongsTo(User);

cart.belongsToMany(Books, { through: cart_item });
Books.belongsToMany(cart, { through: cart_item });


export { User, notes, Books, review, cart, cart_item };

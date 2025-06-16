import { database } from "../Database/db.config.js";
import { cart } from "../Model/cart.model.js";
import { cart_item } from "../Model/cart_item.model.js";



export const addtoCart = async (request, response, next) => {
    let t = await database.transaction();
    try {
        let { userId, BookId } = request.body;

        let userCart = await cart.findOne({ where: { userId } })

        if (userCart) {
            let cartItem = await cart_item.findOne({ where: { BookId, cartId: userCart.id } });

            if (cartItem) {
                return response.status(200).json({ message: "item is already added in cart " })
            }
            else {
                await cart_item.create({ cartId: userCart.id, BookId }, { transaction: t });
                await t.commit();
                return response.status(201).json({ message: "item succesfully added in cart " })
            }
        }
        else {
            let newCart = await cart.create({ userId });
            await cart_item.create({ cartId: newCart.id, BookId }, { transaction: t })
            await t.commit();
            return response.status(201).json({ message: "item succesfully added in cart " })
        }
    } catch (err) {
        console.log(err)
        t.rollback();
        return response.status(500).json({ error: "Internal server error" })
    }
}



export const deleteCart = async (request, response, next) => {
    try {
        let userId = request.body;
        let del = await cart.destroy({ where: userId });
        return response.status(201).json({ message: "delet success" })
    } catch (err) {
        console.log(err)
        return response.status(500).json({ error: "Internal server error" })
    }
}
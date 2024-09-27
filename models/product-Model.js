import { ObjectId } from "mongodb";
import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    _id: { type: ObjectId, required: false, ref: 'category' },
    name: { type: String, required: false, default: null },
});

const productSchema = new Schema({
    name: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    brand: {
        type: String,
        required: false,
    },
    category: {
        type: categorySchema,
        required: false,
        default: ()=> ({})
    },
    quantity: {
        type: Number,
        required: false,
    },
    sku: {
        type: String,
        required: false,
    },
    regularPrice:{
        type: String,
        required: false,
    },
    discountPrice: {
        type: String,
        required: false,
    },
    thumbnail: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
    reviews: {
        type: String,
        required: false,
    },
    productDetails: {
        type: String,
        required: false
    }
})

export const productModel = mongoose.models.product || mongoose.model('product', productSchema)
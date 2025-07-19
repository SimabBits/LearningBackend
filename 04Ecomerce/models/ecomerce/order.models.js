import mongoose from 'mongoose'

const orderItemSchema = new mongoose({
  productId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  quantity:{
    type: Number,
    default: 0
  }

})


const orderSchema = new mongoose.Schema({
    price:{
      type: Number,
      required: true,
      default: 0 
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItem:{
      type: [orderItemSchema]

    },
    address:{
      type: String,
      required: true
    },
    statu:{
      type: String,
      enum: ["Pending","Cancelled","Delivered"],
      default: "Pending"
    }
},{timestamps: true})

export const Order = mongoose.model("Order",orderSchema);
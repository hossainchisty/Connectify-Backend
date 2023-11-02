const mongoose = require('mongoose');
const { generateId } = require('../../../utils/generateId');

// Order Schema Definition

const orderSchema = mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'Product',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: 'User',
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    cardName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['processing', 'completed', 'cancelled'],
      default: 'Processing',
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paymentMethod: {
      type: String,
      default: 'Card',
    },
  },
  { timestamps: true, versionKey: false },
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;

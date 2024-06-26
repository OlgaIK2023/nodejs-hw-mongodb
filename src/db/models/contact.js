import { model, Schema } from 'mongoose';

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: false,
    },

    isFavourite: {
      type: Boolean,
      required: true,
      default: false,
    },

    contactType: {
      type: String,
      required: true,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
    createdAt: {
      type: Date,
      required: true,
      timestamps: true, 
    },
    updatedAt: {
      type: Date,
      required: true,
      timestamps: true,
    },

  },
  
  {
    timestamps: true,
    versionKey: false,
  },

);


export const StudentsCollection = model('students', contactSchema);
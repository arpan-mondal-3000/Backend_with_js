// Importing the mongoose module
import mongoose from "mongoose";

// Making a schema for our data
// The Schema method in mongoose takes a javascript object as one of the parameters in which the data is modelled
const userSchema = new mongoose.Schema(
  {
    // We can use the properties of the object passed to the Schema to define different data our database will store
    username: {
      // Each property can be further tweaked by setting them as objects and using different properties
      type: String, // It is the type of data that is stored in the username field and type property is required in every field
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Password must be required"], // required can be used for conditional validation also by using an array such as in this example if the password is not provided then this custom message is returned
    },
  },
  { timestamps: true } // this parameter is provided if we want to store the createdAt and updatedAt time data in the database
);

// Exporting the model
// The model method takes two parameters, the first is the name of the model and the next is the schema on the basis of which then model is made
export const User = mongoose.model("User", userSchema);

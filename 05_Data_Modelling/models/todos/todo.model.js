import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    // If we need the create relation between two fields from two different schemas then we need to specify the type to be this special type and need to pass the reference of the model that we want to relate
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      // The ref property sets the reference to the mongoose model and the name of the model is the name passed inside the model method during the creation of the model
      ref: "User",
    },
    // As subTodos is an array so it is a good practice to set this property to be an array
    subTodos: [
      // In the array of subTodos the definition of each of the subTodos is set accordingly
      {
        // We are using the SubTodo model to store data in this field
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);

import mongoose from "mongoose"
import { ObjectID } from "mongodb"

const Schema = mongoose.Schema

ObjectID.prototype.valueOf = function () {
  return this.toString();
}

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  date: {
    type: Date
  }
})

export default mongoose.model("Task", TaskSchema)

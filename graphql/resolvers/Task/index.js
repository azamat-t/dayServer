import Task from "../../../server/models/Task"

export default {
  Query: {
    task: async (parent, { _id }, context, info) => {
      return await Task.findOne({ _id }).exec()
    },
    tasks: async (parent, args, context, info) => {
      const tasks = await Task.find({})
        .populate()
        .exec()

      return tasks.map(t => ({
        _id: t._id.toString(),
        title: t.title,
        text: t.text,
        status: t.status,
        date: t.date.toString()
      }))
    }
  },
  Mutation: {
    createTask: async (parent, { task }, context, info) => {
      const newTask = await new Task({
        title: task.title,
        text: task.text,
        status: task.status,
        date: task.date
      })

      return new Promise((resolve, reject) => {
        newTask.save((err, res) => {
          err ? reject(err) : resolve(res)
        })
      })
    },
    updateTask: async (parent, { _id, task }, context, info) => {
      return new Promise((resolve, reject) => {
        Task.findByIdAndUpdate(_id, { $set: { ...task } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res)
          }
        )
      })
    },
    deleteTask: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Task.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res)
        })
      })
    }
  }
}

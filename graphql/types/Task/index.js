export default `
  type Task {
    _id: String!
    title: String!
    text: String!
    status: String!
    date: String!
  }

  type Query {
    task(_id: ID!): Task!
    tasks: [Task!]!
  }

  type Mutation {
    createTask(task: CreateTaskInput): Task!
    updateTask(_id: String!, task: UpdateTaskInput!): Task!
    deleteTask(_id: String!): Task!
  }

  input CreateTaskInput {
    title: String!
    text: String!
    status: String!
    date: String!
  }
  
  input UpdateTaskInput {
    title: String!
    text: String!
    status: String!
    date: String!
  } 
`;

const todos = [
  {
    id: 1,
    title: "Learn Graphql",
    description: "Read Graphql docs",
  },
  {
    id: 2,
    title: "Try Graphql with NodeJS",
    description: "Read some tutorials",
  },
];

const resolvers = {
  Query: {
    getTodos: () => todos,
  },
};

export default resolvers;

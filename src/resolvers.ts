import { v4 } from "uuid";
import { ApolloError } from "apollo-server";
import { IResolvers } from "@graphql-tools/utils";
import { GQLContext } from "./gqlContext";

interface Todo {
  id: string;
  title: string;
  description?: string;
}

type InputTodo = Pick<Todo, "title" | "description">;

const todos: Todo[] = [
  {
    id: "1",
    title: "Learn Graphql",
    description: "Read Graphql docs",
  },
  {
    id: "2",
    title: "Try Graphql with NodeJS",
    description: "Read some tutorials",
  },
];

const resolvers: IResolvers = {
  Query: {
    getTodos: async (): Promise<Todo[]> => todos,
  },
  Mutation: {
    addTodo: async (
      parent: any,
      { title, description }: InputTodo,
      context: GQLContext,
      info: any
    ): Promise<Todo | ApolloError> => {
      //const { title, description } = args;
      console.log(title, description);
      try {
        const newTodo: Todo = {
          id: v4(),
          title,
          description,
        };
        todos.push(newTodo);
        return newTodo;
      } catch (err: any) {
        return new ApolloError(`Error occured while adding new todo ${err}`);
      }
    },
  },
};

export default resolvers;

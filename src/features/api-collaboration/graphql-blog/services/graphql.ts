import { Post } from "../types";

export async function getPosts(): Promise<Post[]> {
  return [
    {
      id: "1",
      title: "GraphQL Fundamentals",
      body: "Learn the basics of GraphQL queries and mutations."
    },
    {
      id: "2",
      title: "Apollo Client Setup",
      body: "Using Apollo Client with React applications."
    },
    {
      id: "3",
      title: "Frontend Performance",
      body: "Optimizing GraphQL requests for production apps."
    }
  ];
}
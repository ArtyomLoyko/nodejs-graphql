import { GraphQLObjectType, GraphQLString } from "graphql";
import { UUIDType } from "./uuid.js";

export const PostType = new GraphQLObjectType({
  name: 'PostType',
  fields: {
    id: { 
      type: UUIDType
    },
    title: {
      type: GraphQLString
    },
    content: {
      type: GraphQLString
    },
    authorId: {
      type: UUIDType
    },
  }
});
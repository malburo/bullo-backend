import { gql } from "apollo-server-express";

const labelTypes = gql`
  extend type Mutation {
    createLabel(input: createLabelInput): Label
  }
  type Label {
    id: ID!
    name: String!
    color: String!
    cardId: String!
  }
  input createLabelInput {
    name: String!
    color: String!
    cardId: String!
  }
`;

export default labelTypes;

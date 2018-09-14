export default `
type Team {
  owner: User!
  member: [User!]!
  channel: [Channel!]!
}
type TeamResponse {
  ok: Boolean!
  errors: [Error!]
}
type Mutation {
  createTeam(name: String!): TeamResponse!
}
`;

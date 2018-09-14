export default `

  type User {
    id: Int!
    username: String!
    email: String!
    team: [Team!]!
  }

  type Message {
    id: Int!
    text: String!
    user: User!
    channel: Channel!
  }

  type Channel {
    id: Int!
    name: String!
    public: Boolean!
    messages: [Message!]!
    users: [User!]!
  }

  type Team {
    owner: User!
    members: [User!]!
    channels: [Channel!]!
  }

`;

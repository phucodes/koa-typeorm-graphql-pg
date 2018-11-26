export const Query = `
    type Query {
        doctors: [Doctor]
        doctor(id: String!): Doctor
    }
`;
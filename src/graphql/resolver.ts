import { doctorResolver } from './resolvers/doctor';
import { doctorsResolver } from './resolvers/doctors';

export const resolvers = {
    Query: {
        ... doctorResolver,
        ... doctorsResolver
    },
};
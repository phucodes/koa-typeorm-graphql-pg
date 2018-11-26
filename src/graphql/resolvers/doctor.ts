import { getRepository } from 'typeorm';
import { Doctor } from '../entities/doctor';

export const doctorResolver = {
    async doctor(obj, { id }, context, info) {
        const repo = getRepository(Doctor);
        return await repo.findOne({id});
    }
}
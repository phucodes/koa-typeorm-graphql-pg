import { getRepository } from 'typeorm';
import { Doctor } from '../entities/doctor';

export const doctorsResolver = {
    async doctors() {
        const repo = getRepository(Doctor);
        return await repo.find();
    }
}
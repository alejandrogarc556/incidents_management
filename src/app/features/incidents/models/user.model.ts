import { UserRole } from './user-role.type';

export interface User {
    readonly id: number;
    name: string;
    email: string;
    role: UserRole;
}
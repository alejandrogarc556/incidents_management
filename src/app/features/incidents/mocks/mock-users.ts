import { User } from '../models/user.model';

export const MOCK_USERS: User[] = [
    {
        id: 1,
        name: 'John Administrator',
        email: 'admin@company.com',
        role: 'ADMIN'
    },
    {
        id: 2,
        name: 'Sarah Support',
        email: 'support@company.com',
        role: 'SUPPORT_AGENT'
    },
    {
        id: 3,
        name: 'Michael Requester',
        email: 'requester@company.com',
        role: 'REQUESTER'
    }
];
``
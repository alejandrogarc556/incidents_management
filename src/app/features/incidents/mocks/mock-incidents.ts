import { Incident } from '../models/incident.model';
import { MOCK_USERS } from './mock-users';

export const MOCK_INCIDENTS: Incident[] = [
    {
        id: 1,
        title: 'VPN connection failure',
        description: 'Users cannot establish connection to the corporate VPN.',
        status: 'OPEN',
        priority: 'HIGH',
        category: 'NETWORK',
        createdAt: new Date('2026-09-04T08:00:00'),
        createdBy: MOCK_USERS[2],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 2,
        title: 'Email service unavailable',
        description: 'Company email service is intermittently unavailable.',
        status: 'IN_PROGRESS',
        priority: 'CRITICAL',
        category: 'INFRASTRUCTURE',
        createdAt: new Date('2026-09-03T09:30:00'),
        updatedAt: new Date('2026-09-04T10:00:00'),
        createdBy: MOCK_USERS[2],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 3,
        title: 'Printer not responding',
        description: 'The office printer does not respond to print requests.',
        status: 'RESOLVED',
        priority: 'LOW',
        category: 'HARDWARE',
        createdAt: new Date('2026-09-01T11:00:00'),
        updatedAt: new Date('2026-09-02T15:45:00'),
        createdBy: MOCK_USERS[2]
    }
];
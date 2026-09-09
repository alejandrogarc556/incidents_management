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
    },
    {
        id: 4,
        title: 'Database connection timeout',
        description: 'Application cannot connect to the production database.',
        status: 'OPEN',
        priority: 'CRITICAL',
        category: 'DATABASE',
        createdAt: new Date('2026-09-05T07:15:00'),
        createdBy: MOCK_USERS[0],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 5,
        title: 'Application deployment failed',
        description: 'CI/CD pipeline failed during deployment.',
        status: 'IN_PROGRESS',
        priority: 'HIGH',
        category: 'DEVOPS',
        createdAt: new Date('2026-09-05T09:40:00'),
        createdBy: MOCK_USERS[0],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 6,
        title: 'Password reset request',
        description: 'User unable to access the system after password expiration.',
        status: 'CLOSED',
        priority: 'LOW',
        category: 'ACCESS',
        createdAt: new Date('2026-08-30T10:20:00'),
        updatedAt: new Date('2026-08-30T11:00:00'),
        createdBy: MOCK_USERS[2],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 7,
        title: 'API latency degradation',
        description: 'External API response times exceed acceptable thresholds.',
        status: 'OPEN',
        priority: 'HIGH',
        category: 'API',
        createdAt: new Date('2026-09-06T13:10:00'),
        createdBy: MOCK_USERS[0],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 8,
        title: 'Disk space warning',
        description: 'Production server reached 90% disk utilization.',
        status: 'RESOLVED',
        priority: 'MEDIUM',
        category: 'INFRASTRUCTURE',
        createdAt: new Date('2026-09-02T16:00:00'),
        updatedAt: new Date('2026-09-03T08:10:00'),
        createdBy: MOCK_USERS[0],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 9,
        title: 'Unauthorized login attempts',
        description: 'Multiple failed authentication attempts detected.',
        status: 'IN_PROGRESS',
        priority: 'CRITICAL',
        category: 'SECURITY',
        createdAt: new Date('2026-09-06T05:45:00'),
        createdBy: MOCK_USERS[0],
        assignedTo: MOCK_USERS[1]
    },
    {
        id: 10,
        title: 'Network packet loss',
        description: 'Users report connectivity issues between offices.',
        status: 'OPEN',
        priority: 'MEDIUM',
        category: 'NETWORK',
        createdAt: new Date('2026-09-07T14:30:00'),
        createdBy: MOCK_USERS[2],
        assignedTo: MOCK_USERS[1]
    }
];

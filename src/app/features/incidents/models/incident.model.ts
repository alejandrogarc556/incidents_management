import { IncidentPriority } from './incident-priority.type';
import { IncidentStatus } from './incident-status.type';
import { User } from './user.model';

export interface Incident {
    readonly id: number;
    title: string;
    description: string;
    status: IncidentStatus;
    priority: IncidentPriority;
    category: string;
    createdAt: Date;
    updatedAt?: Date;
    createdBy: User;
    assignedTo?: User;
}
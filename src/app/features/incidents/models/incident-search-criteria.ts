import { IncidentPriority } from './incident-priority.type';
import { IncidentStatus } from './incident-status.type';

export class IncidentSearchCriteria {

    constructor(
        public keyword?: string,
        public status?: IncidentStatus,
        public priority?: IncidentPriority,
        public category?: string
    ) { }
}
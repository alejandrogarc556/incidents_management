# Incident Service Responsibility

The IncidentService is responsible for managing the incident collection and providing access to application data.

Responsibilities:

- Retrieve all incidents.
- Search incidents by identifier.
- Create incidents.
- Delete incidents.
- Protect the internal collection from external modifications.

Components do not access mock data directly.

Components communicate exclusively with the service, improving maintainability, reusability, and separation of concerns.

The service acts as the single source of truth for incident data inside the application.
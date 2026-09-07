# Angular 20 - Day 1

## Objective

Set up the development environment and understand the initial structure of an Angular 20 application.

## Technologies

- Node.js
- NPM
- Angular CLI 20
- TypeScript
- SCSS
- Git

## Activities Performed

1. Verified installed versions of Node.js and NPM.
2. Installed Angular CLI 20 globally.
3. Created a new Angular project.
4. Enabled TypeScript strict mode.
5. Ran the application locally.
6. Reviewed the generated project structure.
7. Initialized a Git repository.
8. Created the project README file.
9. Documented the main project commands.

## Useful Commands

```bash
node -v
npm -v

npm install -g @angular/cli@20

ng version

ng new incidents_management

cd incidents_management

ng serve
```

## Deliverables

- Angular application running locally.
- Initialized Git repository.
- Project README file.
- Local execution evidence.
- Initial project commit.

## Next Steps

- Step by step with activity 2

______________________________________________________

# Daily Report - Day 2

## Objective of the Day

Apply static typing using TypeScript to define the core domain structures of the Incident Management System while following best practices and avoiding the use of `any`.

## Activities Performed

- Created the `IncidentStatus` type using union types.
- Created the `IncidentPriority` type using union types.
- Created the `UserRole` type.
- Implemented the `User` interface.
- Implemented the `Incident` interface.
- Created the `IncidentSearchCriteria` class.
- Added optional properties using the `?` operator.
- Added immutable properties using the `readonly` keyword.
- Created mock users data.
- Created mock incidents data.
- Organized domain models within the incidents feature module.
- Verified that no `any` type was used.

## Concepts Applied

- Primitive types.
- Arrays.
- Objects.
- Interfaces.
- Type aliases.
- Union types.
- Optional properties.
- Readonly properties.
- Constructors.
- Classes.
- Static typing.
- Domain modeling.

## Functional Evidence

- Initial domain models successfully created.
- Strongly typed mock data available for future features.
- TypeScript compilation completed without type errors.
- Incident management domain structure established.

## Tests Performed

- Verified successful project compilation.
- Validated model imports and dependencies.
- Checked type compatibility between interfaces and mock data.
- Confirmed the absence of the `any` type.
- Validated readonly and optional property definitions.

## Issues Encountered

- Evaluated the use of union types versus enums for domain constants.
- Defined an appropriate folder structure for application models and mock data.

## Solutions Applied

- Selected union types to align with the TypeScript learning objectives of the challenge.
- Organized models inside the `features/incidents` module to maintain a domain-driven structure.
- Separated mock data from domain models to improve maintainability.

## Technical Decisions

- Used interfaces for `User` and `Incident` because they represent data contracts.
- Used type aliases and union types to restrict status, priority, and role values.
- Used a class for `IncidentSearchCriteria` because it may later contain validation or helper logic.
- Kept mock data isolated from business models.

## Pending Work

- Implement typed functions with explicit parameter and return types.
- Create services to manage incident data.
- Implement incident listing functionality.
- Continue with the next activities of the Angular 20 learning challenge.

## Time Invested

- Approximately 2 hours. 1 40 aprox

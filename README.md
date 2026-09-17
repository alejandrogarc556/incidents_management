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

_______________________________________________________

# Daily Report - Day 3

## Objective of the Day

Understand the structure and responsibility of an Angular component by creating standalone components and implementing basic component interaction.

## Activities Performed

- Created the Header component.
- Created the Footer component.
- Created the Home component.
- Configured standalone component imports.
- Displayed the system title using interpolation.
- Displayed a simulated user name.
- Implemented a button to show and hide a section.
- Implemented event binding for user interaction.
- Implemented property binding to control visibility.
- Composed the application using reusable components.

## Concepts Applied

- Component decorator.
- Selector.
- Template.
- Stylesheet.
- Standalone components.
- Interpolation.
- Property binding.
- Event binding.
- Component composition.

## Functional Evidence

- Header component successfully implemented.
- Footer component successfully implemented.
- System title displayed through interpolation.
- Simulated user displayed on screen.
- Section visibility controlled through user interaction.
- Application successfully composed using standalone components.

**Screenshot:**

![](./public/Activity_3_evidence.png)

## Tests Performed

- Verified application rendering.
- Tested component composition.
- Verified interpolation functionality.
- Tested property binding behavior.
- Tested event binding functionality.
- Verified show/hide interaction.

## Issues Encountered

- Defining a scalable structure for reusable and feature-specific components.
- Determining the appropriate placement for layout-related components.

## Solutions Applied

- Placed Header and Footer components inside the shared module because they are reusable across multiple features.
- Kept page-specific functionality inside the Home feature.
- Used standalone components to simplify dependency management.

## Technical Decisions

- Used standalone components for all new components.
- Separated reusable layout components from feature-specific functionality.
- Managed component events directly from TypeScript.
- Avoided complex logic inside templates.

## Pending Work

- Create additional feature components.
- Implement routing.
- Start building incident-related screens.
- Continue applying Angular component best practices.

## Time Invested

- Approximately 2 hours.

________________________________________________________

# Daily Report - Day 4

## Objective of the Day

Render dynamic incident data using Angular's modern control flow syntax and improve the visual presentation of the application through responsive layouts and custom styling.

## Activities Performed

- Created the Incident List component.
- Implemented incident rendering using the `@for` directive.
- Configured a stable tracking expression using `track incident.id`.
- Implemented conditional rendering with `@if` and `@else`.
- Added an empty state using the `@empty` directive.
- Implemented status visualization using the `@switch` directive.
- Added visual indicators for incident priorities.
- Integrated mock incident data into the component.
- Added a custom scrollbar for the incident list container.
- Implemented a modern card-based layout for displaying incidents.
- Created and executed component tests.
- Configured zoneless testing support using `provideZonelessChangeDetection()`.

## Concepts Applied

- Angular Control Flow.
- `@for`.
- `@if`.
- `@else`.
- `@empty`.
- `@switch`.
- Tracking expressions.
- Conditional rendering.
- Standalone components.
- Component testing.
- Zoneless Change Detection.
- SCSS styling.
- Responsive layouts.

## Functional Evidence

- Dynamic incident list successfully rendered from mock data.
- Incident statuses displayed using the `@switch` directive.
- Incident priorities visually differentiated through custom styles.
- Empty state successfully implemented.
- Stable tracking configured using incident identifiers.
- Modern card-based interface implemented.
- Custom scrollbar successfully applied.
- Component tests executed successfully.

**Screenshot:**

![](./public/Activity_4_evidence.png)

## Tests Performed

- Verified successful rendering of the incident list.
- Verified incident tracking using `track incident.id`.
- Validated status and priority visualization.
- Verified empty state rendering.
- Executed component creation tests.
- Verified mock data loading.
- Verified incident collection size.
- Verified existence of open incidents.
- Verified existence of critical incidents.

## Issues Encountered

- Scroll behavior was not working as expected due to container sizing constraints.
- Component tests failed because Angular zoneless configuration was not provided during TestBed initialization.
- Determining the most appropriate layout structure for displaying larger incident collections.

## Solutions Applied

- Added proper height constraints and overflow configuration to the incident container.
- Configured `provideZonelessChangeDetection()` inside the testing module.
- Implemented a scrollable card-based layout to improve usability.
- Added a custom-styled scrollbar to provide a more polished user experience.

## Technical Decisions

- Used Angular's modern control flow syntax instead of legacy structural directives.
- Used `track incident.id` to provide stable item tracking.
- Kept incident-related functionality inside the incidents feature module.
- Reused mock data from previous activities to maintain consistency.
- Applied SCSS component encapsulation for styling.
- Maintained a zoneless Angular application architecture.

## Pending Work

- Implement application routing.
- Create incident detail views.
- Add filtering and search capabilities.
- Introduce Angular services for data management.
- Begin API integration preparation.

## Time Invested

- Approximately 3 hours.

____________________________________________________________

# Daily Report - Day 5

## Objective of the Day

Implement parent-child communication using Angular's modern component APIs while applying separation of responsibilities between container and presentation components.

## Activities Performed

- Created the IncidentCardComponent.
- Implemented a required input using `input.required()`.
- Implemented output events using `output()`.
- Added incident selection functionality.
- Added incident deletion functionality.
- Configured event emission from child to parent components.
- Moved incident presentation logic into a reusable card component.
- Kept incident collection management inside the container component.
- Refactored the incident list to render reusable incident cards.
- Implemented a selected incident indicator.
- Added action buttons for incident selection and removal.
- Added a user avatar to the application header.
- Implemented dynamic user initials generation using a TypeScript getter.
- Enhanced the header layout with a modern dashboard-style design.

## Concepts Applied

- Parent-child communication.
- Required inputs.
- Outputs.
- Event emission.
- Container components.
- Presentational components.
- Component reusability.
- Data immutability.
- Getter accessors.
- Component composition.
- Standalone components.
- SCSS styling.

## Functional Evidence

- IncidentCardComponent successfully created as a reusable presentation component.
- Parent component successfully manages the incident collection.
- Child component emits selection events.
- Child component emits deletion events.
- Selected incidents are correctly identified by the container component.
- Incidents can be removed from the collection through event communication.
- User avatar successfully displays generated initials.
- Header component enhanced with user information and avatar visualization.
- Application structure follows container and presentational component separation.

**Screenshot:**

![](./public/Activity_5_evidence.png)

## Tests Performed

- Verified required input binding.
- Verified output event emission.
- Verified parent-child communication flow.
- Verified incident selection functionality.
- Verified incident deletion functionality.
- Verified collection updates after deletion.
- Verified selected incident tracking.
- Verified avatar initials generation.
- Verified reusable card rendering.

## Issues Encountered

- Determining the correct responsibility boundaries between the parent and child components.
- Preserving the visual logic implemented during Day 4 while introducing component communication.
- Designing a reusable card component without exposing collection management responsibilities.

## Solutions Applied

- Moved incident visualization logic into the IncidentCardComponent.
- Kept collection mutations exclusively inside the container component.
- Implemented outputs for selection and deletion actions.
- Preserved status and priority visualization within the presentation component.
- Implemented a getter accessor to calculate avatar initials from the current user name.

## Technical Decisions

- Used `input.required()` instead of the traditional `@Input()` decorator.
- Used `output()` instead of the traditional `@Output()` decorator.
- Followed Angular's container/presentation component pattern.
- Prevented the child component from mutating input data directly.
- Kept state management inside the parent component.
- Reused Day 4 card styling within the new reusable component.
- Implemented avatar initials generation through a getter due to its simplicity and low computational cost.

## Pending Work

- Implement application routing.
- Create incident detail views.
- Add filtering capabilities.
- Introduce Angular services for state management.
- Continue improving component reusability.
- Prepare the application for API integration.

## Time Invested

- Approximately 2 hours 30 mins.

________________________________________________________________________________

# Daily Report - Day 6

## Objective of the Day

Improve the application's visual design, responsiveness, and accessibility by applying modern UI principles, reusable styling conventions, and responsive layouts.

## Activities Performed

- Defined global CSS variables for colors, spacing, shadows, and border radius.
- Refactored component styling to use a centralized design system.
- Improved the visual hierarchy of the dashboard interface.
- Redesigned incident cards using a more modern and minimalist appearance.
- Refined status and priority indicators using softer color palettes.
- Enhanced the header component with a cleaner user profile section.
- Improved avatar presentation and user information display.
- Created a responsive card grid using CSS Grid.
- Added responsive behavior for mobile devices.
- Implemented hover states for interactive elements.
- Implemented focus states for keyboard accessibility.
- Implemented disabled states for interactive controls.
- Improved card alignment and visual consistency across different content lengths.
- Standardized spacing and typography throughout the application.
- Reduced visual noise by simplifying button styling and color usage.

## Concepts Applied

- CSS Variables.
- Component Style Encapsulation.
- CSS Grid.
- Flexbox.
- Responsive Design.
- Mobile-first Adaptation.
- Visual Hierarchy.
- Accessibility.
- Focus States.
- Hover States.
- Disabled States.
- Design System Principles.
- Semantic Styling.

## Functional Evidence

- Responsive incident dashboard successfully implemented.
- Consistent design system applied across all components.
- Incident cards display with improved visual hierarchy.
- Responsive grid adapts correctly to different screen sizes.
- Keyboard focus indicators successfully implemented.
- Interactive elements provide visual feedback through hover and focus states.
- Card alignment improved for incidents with varying description lengths.
- Header component enhanced with a cleaner and more professional appearance.
- User avatar integrated into the overall visual system.

**Screenshot:**

![](./public/Activity_6_evidence.png)

## Tests Performed

- Verified responsive behavior on desktop resolution.
- Verified responsive behavior on mobile resolution.
- Tested keyboard navigation using focus states.
- Tested button hover interactions.
- Verified disabled state styling.
- Validated card alignment consistency.
- Verified incident grid responsiveness.
- Confirmed accessibility improvements for interactive controls.

## Issues Encountered

- Cards displayed inconsistent heights due to different content lengths.
- Initial design appeared visually overloaded with excessive color emphasis.
- Achieving a balance between visual appeal and usability required several design iterations.
- Maintaining consistency between reusable components after style refactoring.

## Solutions Applied

- Applied flexible card layouts to improve visual consistency.
- Introduced a unified design system through CSS variables.
- Reduced color saturation and emphasized neutral tones.
- Improved spacing and typography to strengthen visual hierarchy.
- Implemented responsive grid behavior for different screen sizes.
- Added accessibility-focused interaction states for buttons and controls.

## Technical Decisions

- Centralized design tokens using CSS variables.
- Applied a minimalist visual approach inspired by modern SaaS dashboards.
- Used CSS Grid for responsive card layouts.
- Used Flexbox for component-level alignment.
- Preserved component style encapsulation.
- Implemented accessibility improvements without introducing external UI libraries.
- Prioritized consistency and readability over decorative styling.
- Maintained a lightweight styling approach using native SCSS features.

## Pending Work

- Implement Angular routing.
- Create incident detail views.
- Add filtering and search capabilities.
- Introduce service-based data management.
- Improve accessibility with ARIA attributes where appropriate.
- Continue refining the overall user experience.

## Time Invested

- Approximately 1 hour 30 mins.

_________________________________________________________________________________________________

# Daily Report - Day 7

## Objective of the Day

Apply Angular built-in pipes and custom pipes to improve data presentation while keeping domain models immutable and maintaining a clear separation between business data and UI formatting concerns.

## Activities Performed

- Applied the `TitleCasePipe` to incident titles.
- Applied the `UpperCasePipe` to incident categories.
- Applied the `DatePipe` to creation dates.
- Created the `RelativeTimePipe` custom pipe.
- Implemented relative date formatting for incident creation dates.
- Created the `PriorityLabelPipe` custom pipe.
- Implemented readable priority labels for incident priorities.
- Integrated built-in and custom pipes into the IncidentCard component.
- Maintained incident models without introducing presentation-specific data.
- Verified that transformations were performed exclusively through pipes.
- Created an initial unit test for the `RelativeTimePipe`.
- Reviewed Angular pipe purity concepts.
- Fixed a failing component test caused by a required input initialization issue.
- Configured required component inputs using `fixture.componentRef.setInput()`.
- Added zoneless test support through `provideZonelessChangeDetection()`.
- Validated successful component rendering after input assignment.

## Concepts Applied

- Built-in Pipes.
- Custom Pipes.
- Pure Pipes.
- Pipe Transformations.
- Date Pipe.
- Title Case Pipe.
- Upper Case Pipe.
- Presentation Layer Responsibilities.
- Reusable Transformations.
- Data Immutability.
- Unit Testing.
- Component Testing.
- Zoneless Change Detection.
- Required Inputs.
- TestBed Configuration.

## Functional Evidence

- Incident titles are displayed using title case formatting.
- Incident categories are displayed in uppercase format.
- Creation dates are displayed using Angular's built-in Date Pipe.
- Relative time information is displayed through a reusable custom pipe.
- Priority values are transformed into readable labels through a custom pipe.
- Original incident data remains unchanged after presentation transformations.
- Custom pipes are reusable and independent from business logic.
- Pipe transformations successfully improve UI readability.
- IncidentCard component tests execute successfully after required input initialization.
- Zoneless Angular test configuration works correctly during component testing.

**Screenshot:**

![](./public/Activity_7_evidence.png)

## Tests Performed

- Verified successful creation of the `RelativeTimePipe`.
- Verified date transformation into relative labels.
- Verified handling of valid pipe inputs.
- Verified handling of undefined pipe inputs.
- Verified consistent pipe output for valid dates.
- Verified IncidentCard component creation.
- Verified required input assignment using mock incident data.
- Verified component rendering after input assignment.
- Verified zoneless testing configuration.
- Verified Angular TestBed initialization.
- Verified successful execution of component tests.

## Issues Encountered

- Determining the most appropriate relative date representation.
- Selecting meaningful transformations without modifying business objects.
- IncidentCard tests failed because the required input was not initialized before component rendering.
- Angular zoneless testing required additional configuration during TestBed setup.

## Solutions Applied

- Created a reusable `RelativeTimePipe` for relative date calculations.
- Created a reusable `PriorityLabelPipe` for readable priority labels.
- Kept presentation logic inside pipes rather than inside components.
- Initialized component inputs through `fixture.componentRef.setInput()`.
- Added `provideZonelessChangeDetection()` to the testing module configuration.
- Maintained all transformations as presentation-only operations.

## Technical Decisions

- Used built-in Angular pipes whenever an existing solution was available.
- Implemented custom pipes only for application-specific requirements.
- Maintained pipe purity and side-effect-free transformations.
- Kept presentation concerns outside business entities.
- Reused custom pipes through the shared layer.
- Preserved immutability of incident models.
- Continued using a zoneless Angular architecture across the application and testing environment.
- Used Angular's modern required input pattern together with explicit input assignment during unit tests.

## Pending Work

- Implement Angular routing.
- Create incident detail views.
- Add filtering and search functionality.
- Introduce service-based data management.
- Expand unit test coverage for custom pipes.
- Expand component testing coverage.
- Continue improving application maintainability through reusable utilities.

## Time Invested

- Approximately 2 hours.

## Related Commits

- test(day-7): add pipe unit tests and fix IncidentCard zoneless configuration

___________________________________________________________________________________________________

# Daily Report - Day 8

## Objective of the Day

Create reusable custom directives to encapsulate UI behavior, apply consistent interactions across components, and improve maintainability through reusable attribute directives.

## Activities Performed

- Created the `HighlightCriticalDirective`.
- Created the `FocusStyleDirective`.
- Implemented custom attribute directives.
- Applied dependency injection within directives.
- Used `ElementRef` for element access.
- Used `Renderer2` for safe DOM manipulation.
- Implemented conditional styling for critical incidents.
- Applied visual highlighting to critical incidents.
- Implemented focus visualization through directive logic.
- Used `HostBinding` to dynamically update element styles.
- Used `HostListener` to react to focus and blur events.
- Applied directives to reusable incident card components.
- Applied directives to interactive buttons.
- Ensured directive behavior works with keyboard navigation.
- Created unit tests for both directives.
- Configured zoneless testing support for directive tests.
- Refined directive tests to validate actual behavior instead of only class existence.
- Debugged Angular input binding issues in directive tests.
- Resolved testing issues related to Angular's zoneless configuration.

## Concepts Applied

- Attribute Directives.
- Reusable Behaviors.
- Dependency Injection.
- Renderer2.
- ElementRef.
- HostBinding.
- HostListener.
- Safe DOM Manipulation.
- Keyboard Accessibility.
- Focus Management.
- Conditional Styling.
- Unit Testing.
- Standalone Directives.
- Zoneless Testing.
- TestBed Configuration.

## Functional Evidence

- Critical incidents are visually highlighted through a reusable directive.
- Focus styles are automatically applied when interactive elements receive keyboard focus.
- Directive logic is independent from specific components.
- The same directive can be reused across multiple UI elements.
- Incident cards visually indicate critical priority levels.
- Focus behavior improves accessibility and keyboard navigation.
- Directive functionality is successfully covered by unit tests.
- Application behavior remains consistent with Angular's zoneless architecture.

**Screenshot:**

![](./public/Activity_8_evidence.png)

## Tests Performed

- Verified critical incidents receive visual highlighting.
- Verified non-critical incidents do not receive highlight styling.
- Verified critical incident box shadow styling.
- Verified focus state activation.
- Verified focus state removal on blur.
- Verified transition styling configuration.
- Verified directive initialization within host components.
- Verified directive behavior under zoneless Angular testing.
- Verified HostBinding updates element styles correctly.
- Verified HostListener responds to focus and blur events.

## Issues Encountered

- Angular zoneless testing configuration was missing from directive tests.
- Directive input bindings were initially misconfigured.
- Browser style normalization produced different CSS values than expected during assertions.
- Test scenarios required separate host components to validate different directive states.
- Angular generated expression change errors when modifying test values after initialization.

## Solutions Applied

- Added `provideZonelessChangeDetection()` to directive test configurations.
- Refactored tests to use dedicated host components for different scenarios.
- Adjusted assertions to validate effective style changes rather than browser-specific CSS strings.
- Corrected directive input bindings to align with Angular's modern input API.
- Maintained safe element manipulation through `Renderer2`.
- Isolated directive behavior from component-specific implementations.

## Technical Decisions

- Used attribute directives to encapsulate reusable UI behaviors.
- Used `Renderer2` instead of direct DOM manipulation.
- Used `HostBinding` for declarative style management.
- Used `HostListener` to react to browser events.
- Kept directives independent from application-specific components.
- Applied directive logic through reusable selectors.
- Continued using Angular's zoneless architecture.
- Implemented behavior-oriented tests rather than existence-only validation.
- Maintained separation between UI behavior and component business logic.

## Pending Work

- Implement Angular routing.
- Create incident detail pages.
- Add filtering and search functionality.
- Introduce services for state management.
- Expand directive test coverage.
- Continue improving application accessibility.
- Prepare the application for data persistence and API integration.

## Time Invested

- Approximately 2 hours and 30 minutes.


________________________________________________________________________________

# Daily Report - Day 9

## Objective of the Day

Centralize application data access through Angular services and understand dependency injection by moving incident management responsibilities outside of the component layer.

## Activities Performed

- Created the `IncidentService`.
- Configured the service using `@Injectable()`.
- Registered the service using `providedIn: 'root'`.
- Moved mock incident data access from components into the service layer.
- Implemented incident retrieval functionality.
- Implemented incident search by identifier.
- Implemented incident creation functionality.
- Implemented incident deletion functionality.
- Encapsulated the incident collection within the service.
- Prevented direct component access to the internal collection.
- Implemented defensive copy returns using array cloning.
- Refactored `IncidentListComponent` to use dependency injection.
- Removed direct dependencies on mock data from components.
- Updated incident selection and deletion flows to use service operations.
- Created unit tests for `IncidentService`.
- Created documentation describing the service responsibilities.

## Concepts Applied

- Services.
- Dependency Injection.
- Injectable Services.
- Singleton Services.
- Separation of Concerns.
- Encapsulation.
- Data Management.
- State Protection.
- Defensive Copies.
- Unit Testing.
- TestBed.
- Service Layer Pattern.
- Component-Service Communication.

## Functional Evidence

- Incident management logic was successfully moved into a dedicated service.
- Components no longer depend directly on mock data collections.
- The service acts as the single source of truth for incident data.
- Incident retrieval, creation, and deletion operations are centralized.
- Internal service state remains protected from external modification.
- Components communicate exclusively through the service layer.
- IncidentListComponent successfully loads data using dependency injection.
- Service operations correctly update the application state.
- Unit tests validate service behavior and data protection mechanisms.

## Tests Performed

- Verified service creation.
- Verified retrieval of all incidents.
- Verified retrieval of incidents by identifier.
- Verified handling of non-existing incident identifiers.
- Verified incident creation functionality.
- Verified incident deletion functionality.
- Verified behavior when deleting non-existing incidents.
- Verified defensive copy implementation.
- Verified that modifying returned collections does not affect the internal service state.
- Verified service integration with Angular TestBed.

## Issues Encountered

- Determining the correct ownership of application data between components and services.
- Preventing components from modifying the internal incident collection.
- Ensuring all data operations remained centralized after the refactor.
- Designing service methods that exposed behavior while protecting state.

## Solutions Applied

- Introduced `IncidentService` as the centralized data management layer.
- Moved all collection operations out of the component layer.
- Marked the internal collection as private.
- Implemented defensive copies when returning collections.
- Injected the service into consuming components using Angular dependency injection.
- Consolidated incident operations into reusable service methods.

## Technical Decisions

- Used a singleton service with `providedIn: 'root'`.
- Stored the incident collection as a private field.
- Returned defensive copies instead of direct collection references.
- Kept business data operations inside the service layer.
- Eliminated direct component dependencies on mock data sources.
- Applied dependency injection instead of manual instantiation.
- Created unit tests focused on service behavior rather than implementation details.
- Maintained separation between presentation logic and data management responsibilities.

## Pending Work

- Implement Angular routing.
- Create incident detail pages.
- Add filtering and search capabilities.
- Introduce asynchronous data retrieval patterns.
- Prepare the service layer for HTTP integration.
- Expand test coverage for service interactions.
- Continue evolving the application architecture toward a production-ready structure.

## Time Invested

- Approximately 1 hour 30 mins.

___________________________________________________________________________
# Daily Report - Day 10

## Objective of the Day

Manage local application state using Angular Signals and Computed Signals while applying immutable state updates and reactive UI patterns.

## Activities Performed

- Converted the incident collection into a Signal.
- Replaced traditional component state management with Angular Signals.
- Created a readonly Signal for incident access.
- Implemented a Signal for the search term.
- Implemented a Signal for priority filtering.
- Created a `computed` signal for the total number of incidents.
- Created a `computed` signal for critical incidents.
- Created a `computed` signal for open incidents.
- Created a `computed` signal for filtered incidents.
- Implemented reactive search functionality.
- Implemented reactive filtering by title and description.
- Updated the incident list component to consume Signal-based state.
- Added dashboard indicators for total, critical, and open incidents.
- Removed direct collection management from the component.
- Refactored create and delete operations to update state immutably.
- Avoided direct array mutations by using Signal update operations.
- Extended service unit tests to validate Signal and Computed behavior.
- Documented when `computed` should be used instead of `effect`.

## Concepts Applied

- Signals.
- Writable Signals.
- Readonly Signals.
- Computed Signals.
- Reactive State Management.
- Derived State.
- Immutable Updates.
- State Encapsulation.
- Signal Updates.
- Dependency Tracking.
- Computed Derivations.
- Service-Based State Management.
- Unit Testing.
- Reactive UI Updates.

## Functional Evidence

- Incident collection is managed through Angular Signals.
- Search functionality updates the UI reactively.
- Filtered incident results update automatically when the search term changes.
- Dashboard statistics update automatically when incidents are modified.
- Total incident count is derived through a computed signal.
- Critical incident count is derived through a computed signal.
- Open incident count is derived through a computed signal.
- Filtering logic reacts automatically to state changes.
- Components consume readonly state instead of directly modifying collections.
- Application state remains immutable during create and delete operations.

**Screenshot:**

![](./public/Activity_10_evidence.png)

## Tests Performed

- Verified service creation.
- Verified access to incident data through readonly Signals.
- Verified total incident calculation through a computed signal.
- Verified critical incident calculation through a computed signal.
- Verified open incident calculation through a computed signal.
- Verified retrieval of incidents by identifier.
- Verified handling of non-existing identifiers.
- Verified incident creation updates state correctly.
- Verified incident deletion updates state correctly.
- Verified search term filtering.
- Verified reactive updates when the search term changes.
- Verified filtered incident calculations.
- Verified service integration through Angular TestBed.

## Issues Encountered

- Existing component tests referenced the old incident collection property after the migration to Signals.
- Previous tests assumed direct access to component collections instead of service-managed state.
- Reactive filtering tests initially relied on dataset sizes rather than validating state changes.
- Service refactoring required updating component responsibilities.

## Solutions Applied

- Replaced direct collection access with Signal-based service access.
- Updated component tests to validate service state instead of local component state.
- Refactored filtering tests to compare actual filtered results rather than collection counts.
- Implemented readonly Signals to prevent unintended state mutations.
- Used immutable update operations through Signal APIs.

## Technical Decisions

- Used Signals as the primary state management mechanism.
- Kept incident state centralized inside the service layer.
- Exposed readonly Signals instead of writable Signals.
- Used `computed` for all derived values.
- Avoided storing values that can be derived from existing state.
- Avoided using `effect` for computed calculations.
- Maintained immutable state updates through Signal update operations.
- Preserved separation of concerns between components and services.
- Extended existing service tests to validate reactive state behavior.

## Pending Work

- Implement Angular routing.
- Create incident detail pages.
- Add advanced filtering options.
- Introduce asynchronous data retrieval.
- Prepare the service for HTTP integration.
- Expand Signal-based test coverage.
- Continue evolving the application toward a production-ready architecture.

## Time Invested

- Approximately 3 hours.


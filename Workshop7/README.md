# Workshop 7: Custom Configuration

**Duration:** 3 hours

### Part A: Creating CLAUDE.md (60 mins)

#### Activity 7.1: Project Context File

Create a comprehensive `CLAUDE.md`:

```markdown
# Project: E-Commerce Platform

## Overview
A microservices-based e-commerce platform handling 10K orders/day.

## Architecture
- API Gateway: Kong
- Services: Node.js (Express)
- Database: PostgreSQL + Redis cache
- Message Queue: RabbitMQ
- Deployment: Kubernetes on AWS

## Code Conventions
- ESLint with Airbnb config
- Prettier for formatting
- Jest for testing (min 80% coverage)
- Conventional commits

## Directory Structure
```
src/
├── services/       # Microservices
├── shared/         # Shared libraries
├── gateway/        # API gateway config
└── infrastructure/ # IaC (Terraform)
```

## Common Tasks
- "Add new endpoint": Create in services/, add route, write tests
- "New microservice": Use template in /templates/service
- "Database migration": Use Knex, put in /migrations

## What NOT to Do
- Don't use var (use const/let)
- Don't commit .env files
- Don't bypass TypeScript with 'any'
- Don't write raw SQL (use query builder)

## Getting Help
- Architecture questions: Ask about /docs/architecture.md
- API specs: Check /docs/openapi/
```

#### Activity 7.2: Context Validation

```
You: Read my CLAUDE.md and tell me:
     1. Do you understand the project structure?
     2. What additional information would help you?
     3. Are there any contradictions or unclear parts?
```

### Part B: Custom Instructions (60 mins)

#### Activity 7.3: Style Enforcement

Add to CLAUDE.md:

```markdown
## Code Style Instructions

When writing code for this project:
1. Always use TypeScript strict mode
2. Prefer functional programming patterns
3. Use dependency injection
4. Write self-documenting code (minimal comments)
5. Error messages should be user-friendly

When writing tests:
1. Use describe/it structure
2. Test behavior, not implementation
3. Use meaningful test names
4. One assertion per test when possible
```

#### Activity 7.4: Response Format Instructions

```markdown
## Communication Preferences

When explaining code:
- Start with the high-level purpose
- Then explain the implementation
- End with usage examples

When suggesting changes:
- Show before/after comparison
- Explain the reasoning
- Note any risks or considerations

When debugging:
- Ask clarifying questions first
- Form hypotheses before diving in
- Explain your reasoning process
```

### Part C: Team Standards (45 mins)

#### Activity 7.5: Team-Wide Configuration

```
You: Create a CLAUDE.md template that can be used across all 
     projects in our organization.
     
     Include:
     - Company coding standards
     - Security requirements
     - Documentation expectations
     - Review process
     - Common tools and patterns
```

#### Activity 7.6: Project-Specific Overrides

```markdown
## Project-Specific Rules

# This project has specific requirements that override company defaults:

Authentication: Use OAuth2 instead of JWT (legacy system integration)
Database: Oracle instead of PostgreSQL (client requirement)
Testing: Mocha instead of Jest (existing test suite)
```

### Part D: Templates and Snippets (15 mins)

#### Activity 7.7: Reusable Prompts

Create a `/prompts` directory:

```markdown
# prompts/new-feature.md
## New Feature Template

When adding a new feature, follow this checklist:

1. Create feature branch from develop
2. Add types in /types
3. Implement service in /services
4. Add routes in /routes
5. Write tests (unit + integration)
6. Update API documentation
7. Create PR using template

Start by asking me:
- Feature name and purpose
- Which existing modules it affects
- Expected data models
```

**Deliverable:**

- Complete CLAUDE.md for your own project
- Team configuration template

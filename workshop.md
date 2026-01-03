# Claude Code Workshops: Complete Hands-On Guide

A comprehensive 12-workshop curriculum for mastering agentic coding with Claude Code.

---

## Table of Contents

1. [Workshop 1: Getting Started with Claude Code](#workshop-1-getting-started-with-claude-code)
2. [Workshop 2: Mastering Prompts for Code](#workshop-2-mastering-prompts-for-code)
3. [Workshop 3: Navigating Codebases](#workshop-3-navigating-codebases)
4. [Workshop 4: Code Generation & Editing](#workshop-4-code-generation--editing)
5. [Workshop 5: Testing & Debugging](#workshop-5-testing--debugging)
6. [Workshop 6: Git Integration](#workshop-6-git-integration)
7. [Workshop 7: Custom Configuration](#workshop-7-custom-configuration)
8. [Workshop 8: Agentic Workflows](#workshop-8-agentic-workflows)
9. [Workshop 9: CI/CD Integration](#workshop-9-cicd-integration)
10. [Workshop 10: Anti-Patterns & Troubleshooting](#workshop-10-anti-patterns--troubleshooting)
11. [Workshop 11: Domain-Specific Applications](#workshop-11-domain-specific-applications)
12. [Workshop 12: Capstone Project](#workshop-12-capstone-project)
13. [Assessment Rubric](#assessment-rubric)

---

## Workshop 1: Getting Started with Claude Code

**Duration:** 3 hours

### Pre-Workshop Setup (30 mins before)

- Ensure Node.js 18+ installed
- Have a GitHub/GitLab account ready
- Terminal/CLI familiarity check

### Part A: Installation & Setup (45 mins)

#### Activity 1.1: Install Claude Code

```bash
# Install globally via npm
npm install -g @anthropic-ai/claude-code

# Verify installation
claude --version

# Start Claude Code
claude
```

#### Activity 1.2: Authentication

- Walk through the OAuth flow
- Understand API key options
- Verify authentication status

#### Activity 1.3: First Interaction

```
You: What can you help me with?
You: Explain what files are in this directory
You: What is your current context?
```

### Part B: Essential Commands (45 mins)

#### Activity 1.4: Command Exploration

| Command | Purpose | Try It |
|---------|---------|--------|
| `/help` | List all commands | Run and read output |
| `/clear` | Clear conversation | Test context reset |
| `/compact` | Summarize context | Use after long conversation |
| `/cost` | Show token usage | Monitor throughout |
| `/quit` | Exit Claude Code | Proper exit |

#### Activity 1.5: Navigation Exercise

```
1. Navigate to any code project you have
2. Run: claude
3. Ask: "Give me an overview of this project"
4. Ask: "What are the main entry points?"
5. Ask: "What dependencies does this project use?"
```

### Part C: Your First Task (45 mins)

#### Activity 1.6: Create a Simple Project

Prompt sequence:

```
You: Create a simple Node.js CLI tool that converts temperatures 
     between Celsius and Fahrenheit

You: Add input validation

You: Add a --help flag

You: Run it and test with 100 celsius
```

**Observation Points:**

- How does Claude Code create files?
- What permissions does it ask for?
- How does it handle errors?

### Part D: Wrap-Up & Reflection (15 mins)

**Discussion Questions:**

1. What surprised you about the interaction?
2. When did Claude ask for permission vs. proceed automatically?
3. How would you describe the experience to a colleague?

**Deliverable:** Screenshot of completed temperature converter running successfully

---

## Workshop 2: Mastering Prompts for Code

**Duration:** 3 hours

### Part A: Anatomy of Good Prompts (45 mins)

#### Activity 2.1: Prompt Comparison Exercise

Clone the workshop repository:

```bash
git clone https://github.com/your-org/claude-code-workshop
cd claude-code-workshop/module-2
```

**Bad Prompt:**

```
Fix the bug
```

**Better Prompt:**

```
The function calculateTotal in src/cart.js returns NaN when the 
cart contains items with string prices. Fix this by ensuring all 
prices are converted to numbers before calculation.
```

**Best Prompt:**

```
Fix the calculateTotal function in src/cart.js:

Problem: Returns NaN when prices are strings like "19.99"
Expected: Should handle both number and string prices
Constraint: Don't modify the item data structure

Please show me the fix and explain the change.
```

#### Activity 2.2: Transform Bad Prompts

Transform these vague prompts into effective ones:

1. "Make it faster"
2. "Add tests"
3. "Clean up this code"
4. "It's broken"

### Part B: The PLAN-IMPLEMENT-VERIFY Workflow (60 mins)

#### Activity 2.3: Structured Task Execution

```
PHASE 1 - PLAN:
You: I need to add user authentication to this Express app. 
     Before writing any code, outline the approach you'd take.
     Consider: middleware, routes, session management.

PHASE 2 - IMPLEMENT:
You: Good plan. Let's implement step 1: the authentication middleware.
     Use JWT tokens. Show me the code before creating files.

PHASE 3 - VERIFY:
You: Now let's verify this works. What tests should we write?
     Create the test file and run them.
```

#### Activity 2.4: Think Harder Prompts

When facing complex problems:

```
You: Think step by step about how to optimize this database query.
     Consider indexes, query structure, and caching options.
     What are the tradeoffs of each approach?
```

```
You: This is a complex architectural decision. Take your time and 
     analyze the pros and cons of microservices vs monolith for 
     this specific use case before recommending an approach.
```

### Part C: Iterative Refinement (45 mins)

#### Activity 2.5: The Feedback Loop

Starting code (buggy):

```javascript
// src/validator.js
function validateEmail(email) {
  return email.includes('@');
}
```

Iteration sequence:

```
You: This email validator is too simple. What edge cases does it miss?

You: Good analysis. Now improve it to handle those cases.

You: Actually, I prefer using a well-tested library. Refactor to use 
     a validation library instead.

You: The regex approach is fine for our needs. But add JSDoc comments 
     explaining the validation rules.
```

### Part D: Practice Scenarios (30 mins)

**Scenario Cards** (work in pairs):

| Scenario | Your Task |
|----------|-----------|
| Legacy Code | Write prompts to understand and refactor a 500-line function |
| New Feature | Write prompts to add pagination to an API endpoint |
| Bug Report | Write prompts based on: "Users report slow loading on dashboard" |
| Code Review | Write prompts to review a teammate's PR |

**Deliverable:** Document with 5 refined prompts and reasoning for each improvement

---

## Workshop 3: Navigating Codebases

**Duration:** 3 hours

### Part A: Project Discovery (45 mins)

#### Activity 3.1: Explore Unknown Territory

Clone a medium-sized open source project:

```bash
git clone https://github.com/expressjs/express
cd express
claude
```

**Discovery Prompts:**

```
You: I'm new to this codebase. Give me a high-level architecture overview.

You: What are the main modules and how do they interact?

You: Where is the routing logic implemented?

You: Trace a request from entry to response. What files are involved?
```

#### Activity 3.2: Documentation Extraction

```
You: Generate a markdown architecture document for this project 
     based on your analysis of the code.
```

### Part B: File Referencing Mastery (60 mins)

#### Activity 3.3: The @ Mention System

```
You: @src/router/index.js Explain this file's purpose

You: @package.json What are the production dependencies?

You: @src/router/index.js @src/middleware/init.js 
     How do these two files interact?

You: @src/**/*.test.js What testing patterns are used in this project?
```

#### Activity 3.4: Selective Context Loading

Practice efficient context management:

```
You: /clear

You: I only need to work on the authentication module. 
     @src/auth/ Load only these files and explain the auth flow.
```

### Part C: Context Window Management (45 mins)

#### Activity 3.5: Monitor and Manage

```
You: /cost
```

**Context Strategies:**

| Situation | Strategy |
|-----------|----------|
| Context getting full | Use `/compact` to summarize |
| Need fresh start | Use `/clear` and reload specific files |
| Large file | Ask for specific functions only |
| Multiple files | Reference only what's needed for current task |

#### Activity 3.6: Large File Handling

```
You: @src/large-file.js Focus only on the exported functions. 
     Don't load internal helpers unless needed.

You: In @src/large-file.js, explain only the processData function 
     and its direct dependencies.
```

### Part D: Codebase Archaeology (30 mins)

#### Activity 3.7: Understanding Legacy Code

```
You: This function has no documentation. Based on its implementation 
     and usage across the codebase, what does it do?

You: Find all places where this deprecated function is called. 
     What would be involved in removing it?

You: This file hasn't been modified in 3 years. Is it still used? 
     What depends on it?
```

**Deliverable:** Architecture document for an assigned open-source project

---

## Workshop 4: Code Generation & Editing

**Duration:** 3.5 hours

### Part A: Generating New Code (60 mins)

#### Activity 4.1: Function Generation

```
You: Create a function that:
     - Takes an array of user objects
     - Filters users by age range (min, max)
     - Sorts by registration date
     - Returns paginated results (page, pageSize)
     
     Include TypeScript types and handle edge cases.
```

#### Activity 4.2: Class Generation

```
You: Create a CacheManager class with:
     - get(key): retrieve cached value
     - set(key, value, ttlSeconds): store with expiration
     - delete(key): remove from cache
     - clear(): remove all entries
     - stats(): return hit/miss statistics
     
     Use Map internally. Include JSDoc documentation.
```

#### Activity 4.3: API Endpoint Generation

```
You: Create a complete REST endpoint for /api/products:
     - GET / - list with pagination and filters
     - GET /:id - single product
     - POST / - create (with validation)
     - PUT /:id - update
     - DELETE /:id - soft delete
     
     Use Express, include error handling middleware.
```

### Part B: Surgical Editing (60 mins)

#### Activity 4.4: Targeted Modifications

Given existing code:

```javascript
// src/userService.js
async function getUser(id) {
  const user = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return user;
}
```

Editing prompts:

```
You: @src/userService.js Modify getUser to:
     1. Add caching (check cache first, store result)
     2. Add logging for cache hits/misses
     3. Handle the case where user doesn't exist (throw custom error)
     
     Keep the function signature the same.
```

#### Activity 4.5: Multi-File Coordinated Edits

```
You: I'm renaming the User model to Account. Update:
     1. The model file itself
     2. All imports referencing User
     3. All variable names (user -> account)
     4. Database table references
     5. API endpoint names (/users -> /accounts)
     
     Show me the changes before applying them.
```

### Part C: Refactoring Patterns (45 mins)

#### Activity 4.6: Pattern Application

| Refactoring | Prompt |
|-------------|--------|
| Extract Method | "Extract the validation logic from this function into a separate validateInput function" |
| Extract Class | "This file has grown too large. Extract the notification-related code into a NotificationService class" |
| Replace Conditional with Polymorphism | "Refactor this switch statement to use the Strategy pattern" |
| Introduce Parameter Object | "This function has 8 parameters. Create an options object instead" |

#### Activity 4.7: Before/After Analysis

```
You: Before making changes, show me:
     1. The current code
     2. What you plan to change
     3. The resulting code
     4. Any risks or considerations

Then wait for my approval before editing files.
```

### Part D: Review and Approval Workflow (45 mins)

#### Activity 4.8: Safe Editing Practices

```
You: Make the following changes but show me the diff first. 
     Don't apply until I say "go ahead":
     
     Add error handling to all database calls in src/repositories/
```

#### Activity 4.9: Rollback Scenario

```bash
# If changes go wrong
git diff                    # See what changed
git checkout -- .           # Revert all changes
# OR
git stash                   # Stash changes for later review
```

**Deliverable:**

- Complete CRUD API with tests
- Document showing before/after code for 3 refactoring exercises

---

## Workshop 5: Testing & Debugging

**Duration:** 3.5 hours

### Part A: Test Generation (60 mins)

#### Activity 5.1: Unit Test Generation

Given production code:

```javascript
// src/utils/stringUtils.js
export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
```

```
You: Generate comprehensive unit tests for @src/utils/stringUtils.js
     
     Include tests for:
     - Normal inputs
     - Edge cases (empty string, special characters, unicode)
     - Boundary conditions
     
     Use Jest. Aim for 100% coverage.
```

#### Activity 5.2: Test Suite Structure

```
You: Create a test suite for the UserService class:
     
     Structure it with:
     - describe blocks for each method
     - beforeEach for common setup
     - afterEach for cleanup
     - Mock the database dependency
     - Test both success and error paths
```

### Part B: Test-Driven Development (60 mins)

#### Activity 5.3: TDD Workflow

```
STEP 1 - Write failing test first:
You: Write a failing test for a function that validates 
     Singapore NRIC numbers. Don't implement the function yet.

STEP 2 - Review the test:
You: Does this test cover all the NRIC validation rules?
     Add any missing test cases.

STEP 3 - Implement to pass:
You: Now implement the validateNRIC function to pass all tests.

STEP 4 - Refactor:
You: The implementation works. Can it be cleaner or more efficient?
     Refactor while keeping tests green.
```

#### Activity 5.4: Coverage Analysis

```
You: Run the tests with coverage and identify untested code paths.
     Generate additional tests to reach 90% coverage.
```

### Part C: Debugging Strategies (60 mins)

#### Activity 5.5: Symptom-Based Debugging

Scenario: "The API returns 500 errors randomly"

```
You: I'm seeing intermittent 500 errors on the /api/orders endpoint.
     
     Here's what I know:
     - Happens about 10% of requests
     - More common during high traffic
     - Error logs show "Connection timeout"
     - Started after last deployment
     
     Help me systematically debug this.
```

#### Activity 5.6: Error Message Analysis

```
You: I'm getting this error:

     TypeError: Cannot read property 'map' of undefined
       at OrderList (src/components/OrderList.jsx:15:23)
       at renderWithHooks (node_modules/react-dom/...)
     
     Here's the component: @src/components/OrderList.jsx
     
     What's causing this and how do I fix it?
```

#### Activity 5.7: Performance Debugging

```
You: This function is slow (takes 5+ seconds):
     @src/reports/generateReport.js
     
     Profile it and identify bottlenecks. Then suggest optimizations
     ranked by impact.
```

### Part D: Integration Testing (30 mins)

#### Activity 5.8: API Integration Tests

```
You: Create integration tests for the orders API:
     
     - Test the full flow: create order -> get order -> update -> delete
     - Use a test database
     - Clean up after each test
     - Test authentication/authorization
     
     Use Supertest with Jest.
```

**Deliverable:**

- Complete test suite achieving >80% coverage
- Debugging log documenting systematic approach to solving a bug

---

## Workshop 6: Git Integration

**Duration:** 3 hours

### Part A: Commit Message Generation (45 mins)

#### Activity 6.1: Contextual Commits

Make some changes manually, then:

```
You: Look at my staged changes and generate a commit message.
     Follow conventional commits format (feat/fix/docs/refactor).
     Include a body explaining WHY, not just what.
```

#### Activity 6.2: Commit Message Standards

```
You: Generate commit messages for my changes using this format:
     
     <type>(<scope>): <description>
     
     <body>
     
     <footer>
     
     Types: feat, fix, docs, style, refactor, test, chore
     Scope: the module/component affected
     Footer: BREAKING CHANGE or issue references
```

#### Activity 6.3: Batch Commits

```
You: I've made multiple unrelated changes. Help me:
     1. Identify logical groupings
     2. Stage and commit them separately
     3. Generate appropriate messages for each
```

### Part B: Pull Request Workflow (60 mins)

#### Activity 6.4: PR Description Generation

```
You: Generate a pull request description for my current branch.
     
     Include:
     - Summary of changes
     - Motivation and context
     - Testing done
     - Screenshots if UI changes
     - Breaking changes
     - Checklist for reviewers
```

#### Activity 6.5: PR Template Creation

```
You: Create a .github/PULL_REQUEST_TEMPLATE.md for our project.
     
     Our requirements:
     - Link to Jira ticket
     - Type of change (feature/bugfix/refactor)
     - Testing evidence
     - Database migration notes
     - Deployment notes
```

#### Activity 6.6: Code Review Assistance

```
You: Review this diff and provide feedback:
     
     git diff main..feature/user-auth
     
     Focus on:
     - Security issues
     - Performance concerns
     - Code style consistency
     - Missing tests
     - Documentation needs
```

### Part C: Branch Management (45 mins)

#### Activity 6.7: Branch Strategy

```
You: We have these branches with conflicts:
     - main
     - develop
     - feature/user-auth
     - feature/payment
     
     Help me understand the current state and plan the merges.
```

#### Activity 6.8: Merge Conflict Resolution

```
You: I have merge conflicts in these files:
     @src/config/database.js (conflicts)
     @src/models/User.js (conflicts)
     
     Show me both versions and help me resolve them correctly.
     Explain the implications of each choice.
```

### Part D: Git History Analysis (30 mins)

#### Activity 6.9: History Investigation

```
You: When was this bug introduced?
     
     git log --oneline -20
     
     The bug is in the calculateDiscount function.
     Help me bisect to find the breaking commit.
```

#### Activity 6.10: Change Documentation

```
You: Generate a CHANGELOG entry for version 2.1.0 based on 
     commits since the v2.0.0 tag.
     
     Group by: Features, Bug Fixes, Breaking Changes
```

**Deliverable:**

- 5 well-crafted commit messages with explanations
- 1 complete PR description following team template

---

## Workshop 7: Custom Configuration

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

---

## Workshop 8: Agentic Workflows

**Duration:** 3.5 hours

### Part A: Understanding Agentic Mode (45 mins)

#### Activity 8.1: Agent vs Interactive

| Mode | Characteristics | Use When |
|------|-----------------|----------|
| Interactive | Step-by-step approval | Learning, sensitive changes |
| Semi-agentic | Auto-approve safe operations | Routine development |
| Full agentic | Minimal intervention | CI/CD, batch operations |

#### Activity 8.2: Trust Levels

```
You: Set up auto-approve for:
     - File reads
     - Running tests
     - Linting
     
     But require approval for:
     - File writes
     - Git operations
     - External commands
```

### Part B: Multi-Step Autonomous Tasks (60 mins)

#### Activity 8.3: Feature Implementation

```
You: Implement a complete user notification system:
     
     Requirements:
     - Email notifications (SendGrid)
     - In-app notifications (WebSocket)
     - Notification preferences per user
     - Template system for messages
     
     Go ahead and create all necessary files, tests, and documentation.
     Show me a summary when done.
```

#### Activity 8.4: Codebase Refactoring

```
You: Refactor our authentication module:
     
     Current state: Monolithic auth.js with 800 lines
     Target state: Modular structure with separate files for:
     - Password validation
     - Token management
     - Session handling
     - OAuth providers
     
     Proceed autonomously but log each major change.
```

#### Activity 8.5: Monitoring Progress

During agentic tasks:

```
You: /cost          # Check resource usage
You: What's your current progress?
You: Show me what you've created so far.
You: Pause here - let me review before continuing.
```

### Part C: Headless Operations (60 mins)

#### Activity 8.6: CLI Automation

```bash
# Run Claude Code non-interactively
echo "Generate unit tests for all files in src/utils/" | claude --no-interactive

# With specific output
claude --no-interactive --output-file changes.log << EOF
Review all TODO comments in the codebase and create GitHub issues for each.
Output a summary of created issues.
EOF
```

#### Activity 8.7: Batch Processing

```bash
# Process multiple tasks from file
cat tasks.txt | claude --batch

# tasks.txt:
# 1. Add JSDoc comments to src/services/*.js
# 2. Generate tests for src/utils/*.js
# 3. Update README with current API endpoints
```

### Part D: Safety and Guardrails (45 mins)

#### Activity 8.8: Setting Boundaries

```markdown
# In CLAUDE.md

## Agentic Mode Guardrails

ALLOWED autonomously:
- Create/modify files in src/
- Run test commands
- Install dev dependencies
- Read any project file

REQUIRES confirmation:
- Modify package.json dependencies
- Change configuration files
- Delete files
- Git commits/pushes
- External API calls

NEVER do automatically:
- Modify .env or secrets
- Push to main/master
- Modify CI/CD configs
- Access production systems
```

#### Activity 8.9: Recovery Procedures

```
Scenario: Claude made unwanted changes

Recovery steps:
1. git status                    # See what changed
2. git diff                      # Review changes
3. git checkout -- <file>        # Revert specific files
4. git reset --hard HEAD         # Nuclear option
5. git reflog                    # Find previous states
```

**Deliverable:**

- Log file of agentic session implementing a complete feature
- Guardrails configuration document

---

## Workshop 9: CI/CD Integration

**Duration:** 3.5 hours

### Part A: GitHub Actions Setup (60 mins)

#### Activity 9.1: Basic PR Review Workflow

Create `.github/workflows/claude-review.yml`:

```yaml
name: Claude Code Review

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  review:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      
      - name: Install Claude Code
        run: npm install -g @anthropic-ai/claude-code
      
      - name: Run Code Review
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          git diff origin/main...HEAD > changes.diff
          echo "Review the following changes for:
          - Security vulnerabilities
          - Performance issues  
          - Code style violations
          - Missing tests
          
          Changes:
          $(cat changes.diff)" | claude --no-interactive > review.md
      
      - name: Post Review Comment
        uses: actions/github-script@v7
        with:
          script: |
            const fs = require('fs');
            const review = fs.readFileSync('review.md', 'utf8');
            github.rest.issues.createComment({
              owner: context.repo.owner,
              repo: context.repo.repo,
              issue_number: context.issue.number,
              body: review
            });
```

#### Activity 9.2: Test Workflow

```yaml
name: Claude Test Generation

on:
  push:
    paths:
      - 'src/**/*.js'
      - 'src/**/*.ts'

jobs:
  generate-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Find Changed Files
        id: changed
        run: |
          echo "files=$(git diff --name-only HEAD~1 | grep -E '\.(js|ts)$' | tr '\n' ' ')" >> $GITHUB_OUTPUT
      
      - name: Generate Tests
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          for file in ${{ steps.changed.outputs.files }}; do
            echo "Generate unit tests for $file" | claude --no-interactive >> tests.log
          done
```

### Part B: Automated Documentation (60 mins)

#### Activity 9.3: API Doc Generator

```yaml
name: Update API Documentation

on:
  push:
    branches: [main]
    paths:
      - 'src/routes/**'

jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Generate API Docs
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          echo "Analyze src/routes/ and generate OpenAPI 3.0 spec.
          Include all endpoints, request/response schemas, and examples." | \
          claude --no-interactive > docs/api/openapi.yaml
      
      - name: Commit Documentation
        run: |
          git config user.name "Claude Bot"
          git config user.email "claude@example.com"
          git add docs/
          git commit -m "docs: update API documentation" || exit 0
          git push
```

#### Activity 9.4: README Updater

```yaml
name: Keep README Updated

on:
  push:
    branches: [main]
    paths:
      - 'src/**'
      - 'package.json'

jobs:
  update-readme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Update README
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          echo "Update README.md to reflect current:
          - Project structure (from actual files)
          - Available scripts (from package.json)
          - Dependencies (from package.json)
          - API endpoints (from src/routes/)
          
          Keep existing sections not related to these topics." | \
          claude --no-interactive
```

### Part C: Issue Automation (45 mins)

#### Activity 9.5: Issue Triage

```yaml
name: Issue Triage

on:
  issues:
    types: [opened]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - name: Analyze Issue
        env:
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
        run: |
          echo "Analyze this GitHub issue and suggest:
          1. Appropriate labels (bug/feature/docs/question)
          2. Priority level (P0-P3)
          3. Which team member should be assigned
          4. Related issues or PRs
          
          Issue title: ${{ github.event.issue.title }}
          Issue body: ${{ github.event.issue.body }}" | \
          claude --no-interactive > triage.json
```

### Part D: Cost Management (45 mins)

#### Activity 9.6: Budget Controls

```yaml
# Add to workflow
env:
  ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
  CLAUDE_MAX_TOKENS: 10000  # Limit per run

steps:
  - name: Check Budget
    run: |
      # Get current month's usage
      USAGE=$(curl -s https://api.anthropic.com/v1/usage \
        -H "x-api-key: $ANTHROPIC_API_KEY" | jq '.tokens_used')
      
      if [ $USAGE -gt 1000000 ]; then
        echo "Monthly budget exceeded"
        exit 1
      fi
```

#### Activity 9.7: Usage Monitoring Dashboard

```
You: Create a simple HTML dashboard that shows:
     - Daily Claude API usage
     - Cost breakdown by workflow
     - Trend over last 30 days
     
     Fetch data from GitHub Actions logs and Anthropic usage API.
```

**Deliverable:**

- 3 working GitHub Actions workflows
- Documentation of CI/CD integration patterns

---

## Workshop 10: Anti-Patterns & Troubleshooting

**Duration:** 3 hours

### Part A: Common Mistakes (60 mins)

#### Anti-Pattern 1: Context Overload

```
❌ Wrong:
You: @src/ Look at all these files and find the bug

✅ Right:
You: The bug is in user authentication. 
     @src/auth/login.js @src/auth/middleware.js
     Error: "Token validation fails intermittently"
```

#### Anti-Pattern 2: Vague Prompts

```
❌ Wrong:
You: Make it better

✅ Right:
You: Improve this function's performance by:
     - Reducing time complexity
     - Minimizing memory allocations
     - Adding caching where beneficial
```

#### Anti-Pattern 3: Ignoring Claude's Questions

```
❌ Wrong:
Claude: Should I use JWT or session-based auth?
You: Just do it

✅ Right:
Claude: Should I use JWT or session-based auth?
You: Use JWT. We need stateless auth for our microservices.
     Tokens should expire in 1 hour with refresh tokens for 7 days.
```

#### Activity 10.1: Fix The Prompt

Transform these problematic prompts:

| Bad Prompt | Issues | Your Fix |
|------------|--------|----------|
| "Fix all the bugs" | Too vague, impossible scope | |
| "Write code like Google" | Unclear standard | |
| "Make it production ready" | Undefined criteria | |
| "Do what you think is best" | No guidance | |

### Part B: Hallucination Detection (45 mins)

#### Activity 10.2: Verification Strategies

```
Scenario: Claude suggests a library or API that doesn't exist

Prevention prompts:
You: Before using any library, verify it exists on npm and check 
     its weekly downloads. Only suggest well-maintained packages.

You: Show me the documentation link for that API endpoint.
     I want to verify it exists.

You: What version of this library introduced that feature?
     Let me check the changelog.
```

#### Activity 10.3: Reality Checking

```
You: You suggested using response.pagination() but I can't find 
     that in the Express documentation. Are you sure this exists?
     Show me an alternative that's documented.
```

### Part C: Recovery Strategies (45 mins)

#### Activity 10.4: When Things Go Wrong

| Situation | Recovery |
|-----------|----------|
| Claude went down wrong path | "Stop. Let's reconsider. The approach isn't working because..." |
| Generated code doesn't work | "The code fails with [error]. Let's debug step by step." |
| Lost context mid-task | `/compact` then re-state the goal |
| Circular conversation | `/clear` and start fresh with better context |

#### Activity 10.5: Redirect Techniques

```
You: I appreciate the suggestion, but that approach won't work 
     for our use case because [specific reason].
     
     Let's try a different approach. What if we [alternative]?
```

```
You: We've been going in circles. Let me reframe:
     
     Goal: [clear objective]
     Constraints: [limitations]
     What we've tried: [failed approaches]
     
     What's a completely different approach?
```

### Part D: Knowing Your Limits (30 mins)

#### Activity 10.6: When NOT to Use Claude Code

| Task | Why Not | Alternative |
|------|---------|-------------|
| Real-time debugging in production | No live system access | Use proper debugging tools |
| Security audits | May miss vulnerabilities | Use specialized security tools |
| Performance profiling | Can't measure actual performance | Use profilers |
| Database migrations on live data | Too risky | Manual review required |

#### Activity 10.7: Escalation Criteria

```
Know when to stop and get help:
- Same error after 3 different approaches
- Security-sensitive code changes
- Changes affecting production data
- Architectural decisions with long-term impact
- When you don't understand Claude's suggestion
```

**Deliverable:**

- Anti-pattern identification worksheet
- Troubleshooting runbook for common issues

---

## Workshop 11: Domain-Specific Applications

**Duration:** 3.5 hours

*(Choose 2-3 tracks based on participants)*

### Track A: Web Development (90 mins)

#### Activity 11A.1: React Component Generation

```
You: Create a reusable DataTable component with:
     - Sortable columns
     - Pagination
     - Row selection
     - Search/filter
     - Loading states
     - Empty states
     
     Use TypeScript and styled-components.
     Include Storybook stories.
```

#### Activity 11A.2: Next.js Full Stack

```
You: Create a Next.js 14 app with:
     - App router structure
     - Server components where appropriate
     - API routes for CRUD operations
     - Database with Prisma
     - Authentication with NextAuth
     
     Start with the project structure and core files.
```

### Track B: Backend Services (90 mins)

#### Activity 11B.1: API Design

```
You: Design and implement a RESTful API for a task management system:
     
     Resources: Users, Projects, Tasks, Comments
     Features:
     - Nested resources (project/tasks)
     - Filtering and pagination
     - Rate limiting
     - Request validation
     - Error handling
     - OpenAPI documentation
     
     Use Express with TypeScript.
```

#### Activity 11B.2: Microservice Template

```
You: Create a microservice template with:
     - Health check endpoint
     - Graceful shutdown
     - Structured logging
     - Configuration management
     - Docker setup
     - Kubernetes manifests
     - Integration test setup
```

### Track C: DevOps & Infrastructure (90 mins)

#### Activity 11C.1: Terraform Modules

```
You: Create Terraform modules for:
     1. VPC with public/private subnets
     2. EKS cluster with managed node groups
     3. RDS PostgreSQL with read replicas
     4. Application Load Balancer
     
     Include variable definitions, outputs, and example usage.
```

#### Activity 11C.2: CI/CD Pipeline

```
You: Create a complete CI/CD pipeline with:
     - GitHub Actions workflow
     - Build and test stages
     - Security scanning (SAST, dependency check)
     - Container image build
     - Deployment to staging (auto)
     - Deployment to production (manual approval)
     - Rollback procedure
```

### Track D: Data Engineering (90 mins)

#### Activity 11D.1: ETL Pipeline

```
You: Create a data pipeline that:
     1. Extracts data from REST API (paginated)
     2. Transforms JSON to normalized tables
     3. Loads to PostgreSQL
     4. Handles incremental updates
     5. Includes error handling and retry logic
     6. Logs progress and metrics
     
     Use Python with pandas and SQLAlchemy.
```

#### Activity 11D.2: Data Validation

```
You: Create a data quality framework:
     - Schema validation
     - Null checks
     - Range validation
     - Referential integrity
     - Custom business rules
     - Reporting dashboard
     
     Use Great Expectations or similar.
```

**Deliverable:** Complete working project in chosen domain

---

## Workshop 12: Capstone Project

**Duration:** 4 hours (+ independent work)

### Part A: Project Selection (30 mins)

#### Option 1: Full-Stack Application

Build a complete application with:

- Frontend (React/Vue/Next.js)
- Backend API
- Database
- Authentication
- Deployment configuration

#### Option 2: Developer Tool

Build a CLI tool or VS Code extension that:

- Solves a real development problem
- Has comprehensive tests
- Includes documentation
- Is publishable to npm/marketplace

#### Option 3: Infrastructure Project

Create a complete infrastructure setup:

- Multi-environment Terraform
- CI/CD pipelines
- Monitoring and alerting
- Documentation

### Part B: Project Planning with Claude (45 mins)

#### Activity 12.1: Requirements Document

```
You: Help me create a detailed PRD for [project idea].
     
     Include:
     - Problem statement
     - User stories
     - Technical requirements
     - Success criteria
     - Timeline estimate
     - Risk assessment
```

#### Activity 12.2: Architecture Design

```
You: Based on this PRD, design the system architecture.
     
     Include:
     - Component diagram
     - Data flow diagram
     - Technology choices with justification
     - API design
     - Database schema
```

### Part C: Implementation Sprint (120 mins)

#### Activity 12.3: Structured Implementation

Follow this workflow:

```
Phase 1 (30 min): Project Setup
- Initialize repository
- Create CLAUDE.md
- Set up development environment
- Create initial structure

Phase 2 (45 min): Core Features
- Implement main functionality
- Write tests as you go
- Document decisions

Phase 3 (30 min): Polish
- Error handling
- Edge cases
- Code cleanup

Phase 4 (15 min): Documentation
- Update README
- Add usage examples
- Create CHANGELOG
```

#### Activity 12.4: Progress Logging

Maintain a log:

```markdown
## Development Log

### Session 1: Setup
- Prompts used: [list key prompts]
- Challenges: [what was difficult]
- Solutions: [how you solved them]
- Lessons: [what you learned]

### Session 2: Core Implementation
...
```

### Part D: Presentation & Review (45 mins)

**Presentation Format:**

1. **Demo** (5 min): Show working application
2. **Architecture** (3 min): Explain design decisions
3. **Claude Code Usage** (5 min): Share effective prompts and patterns
4. **Challenges** (2 min): What was difficult, how you overcame it
5. **Q&A** (5 min): Questions from peers

**Peer Review Criteria:**

- Code quality and organization
- Test coverage
- Documentation completeness
- Effective use of Claude Code
- CLAUDE.md quality

### Capstone Deliverables

1. **GitHub Repository** containing:
   - Complete source code
   - CLAUDE.md file
   - Comprehensive README
   - Test suite
   - CI/CD configuration

2. **Development Journal** documenting:
   - Key prompts and patterns
   - Challenges and solutions
   - Lessons learned
   - Time tracking

3. **Presentation Slides** covering:
   - Project overview
   - Technical decisions
   - Claude Code insights

---

## Assessment Rubric

| Criteria | Excellent (4) | Good (3) | Satisfactory (2) | Needs Improvement (1) |
|----------|--------------|----------|------------------|----------------------|
| **Prompting Skills** | Strategic, context-rich prompts achieving goals efficiently | Good prompts with minor refinements needed | Basic prompts requiring multiple iterations | Vague prompts, over-reliance on Claude |
| **Code Quality** | Production-ready, well-tested, documented | Good quality with minor issues | Functional with notable gaps | Significant quality issues |
| **Claude Code Workflow** | Seamless integration, efficient tool use | Good workflow with occasional inefficiencies | Basic workflow, missed opportunities | Ineffective use of tools |
| **Project Completeness** | Exceeds requirements, polished | Meets all requirements | Meets most requirements | Missing key requirements |
| **Documentation** | Comprehensive, clear, professional | Good documentation, minor gaps | Basic documentation | Insufficient documentation |

---

## Appendix A: Quick Reference Card

### Essential Commands

```
/help     - Show all commands
/clear    - Clear conversation context
/compact  - Summarize and compress context
/cost     - Show token usage
/quit     - Exit Claude Code
```

### File Reference Syntax

```
@filename.js           - Reference specific file
@src/                  - Reference directory
@**/*.test.js          - Glob pattern
@src/a.js @src/b.js    - Multiple files
```

### Prompt Templates

```
# Bug Fix
The function [name] in [file] has a bug:
- Expected: [behavior]
- Actual: [behavior]
- Steps to reproduce: [steps]

# Feature Request
Add [feature] to [location]:
Requirements: [list]
Constraints: [list]
Show me the plan before implementing.

# Code Review
Review [file/changes] for:
- Security issues
- Performance
- Best practices
Provide specific suggestions.
```

---

## Appendix B: Troubleshooting Guide

| Problem | Solution |
|---------|----------|
| Claude doesn't see my files | Check you're in the right directory; use `@` syntax |
| Context too large | Use `/compact` or `/clear` and reload specific files |
| Getting repetitive answers | Rephrase prompt; provide more specific constraints |
| Code doesn't work | Share exact error; ask for debugging step-by-step |
| Claude suggests non-existent API | Ask for documentation link; verify manually |

---

## Appendix C: Resources

- [Claude Code Documentation](https://docs.anthropic.com/claude-code)
- [Anthropic Prompt Engineering Guide](https://docs.anthropic.com/claude/docs/prompt-engineering)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

*Workshop materials created for NUS-ISS Claude Code Training Program*
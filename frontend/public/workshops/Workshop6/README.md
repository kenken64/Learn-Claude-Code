# Workshop 6: Git Integration

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

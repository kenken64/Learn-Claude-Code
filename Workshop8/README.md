# Workshop 8: Agentic Workflows

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

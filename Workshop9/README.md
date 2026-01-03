# Workshop 9: CI/CD Integration

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

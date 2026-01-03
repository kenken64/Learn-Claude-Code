# Workshop 1: Getting Started with Claude Code

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

# Workshop 3: Navigating Codebases

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

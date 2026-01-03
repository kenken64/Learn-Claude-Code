# Claude Code Learning Curriculum

This is the main document for the curriculum of learning Claude Code. It outlines a comprehensive learning path for mastering Claude Code - Anthropic's command-line tool for agentic coding.

---

## Course Overview

| Attribute | Details |
|-----------|---------|
| **Duration** | 4-6 weeks (self-paced) |
| **Prerequisites** | Basic command line familiarity, programming experience in any language |
| **Tools Required** | Terminal/CLI, Node.js 18+, Git, Code editor |
| **Target Audience** | Developers, DevOps engineers, technical leads, educators |

---

## Workshop Curriculum Map

| Module | Workshops | Description |
|--------|-----------|-------------|
| **Module 1: Foundations** | **Workshop 1:** Getting Started with Claude Code | Setup, basic commands, and first interactions. |
| **Module 2: Core Capabilities** | **Workshop 3:** Navigating Codebases<br>**Workshop 4:** Code Generation & Editing<br>**Workshop 5:** Testing & Debugging | Core coding tasks, file operations, and debugging. |
| **Module 3: Effective Prompting** | **Workshop 2:** Mastering Prompts for Code<br>**Workshop 10:** Anti-Patterns & Troubleshooting | Advanced prompting, context management, and error handling. |
| **Module 4: Advanced Features** | **Workshop 6:** Git Integration<br>**Workshop 7:** Custom Configuration<br>**Workshop 8:** Agentic Workflows | Git workflows, customization, and autonomous agents. |
| **Module 5: Real-World Projects** | **Workshop 9:** CI/CD Integration<br>**Workshop 11:** Domain-Specific Applications<br>**Workshop 12:** Capstone Project | DevOps, specialized tracks, and final capstone project. |

---

## Module 1: Foundations (Week 1)

### 1.1 Introduction to Claude Code
- What is Claude Code and how it differs from chat interfaces
- Understanding agentic coding concepts
- Use cases and real-world applications
- Architecture overview: how Claude Code interacts with your system

### 1.2 Installation & Setup
- System requirements
- Installation methods:
  - npm: `npm install -g @anthropic-ai/claude-code`
  - Direct download options
- API key configuration
- Environment variables and configuration files
- Verifying installation

### 1.3 Basic Commands & Navigation
- Starting a session: `claude`
- Understanding the REPL interface
- Basic prompting techniques
- Exiting and session management
- Getting help: `/help` command

### 1.4 Understanding Permissions & Safety
- Permission model overview
- File system access controls
- Network access permissions
- Approving/denying actions
- Trust levels and implications

**Lab Exercise 1:** Install Claude Code, configure API access, and complete 5 basic file operations (create, read, edit, rename, delete).

---

## Module 2: Core Capabilities (Week 2)

### 2.1 File Operations
- Creating new files and projects
- Reading and analyzing existing code
- Editing files with precision
- Batch file operations
- Working with different file types

### 2.2 Code Generation & Refactoring
- Generating boilerplate code
- Implementing features from descriptions
- Refactoring existing code
- Adding documentation and comments
- Code style and formatting

### 2.3 Code Analysis & Understanding
- Explaining unfamiliar codebases
- Finding bugs and issues
- Security vulnerability detection
- Performance analysis
- Dependency analysis

### 2.4 Terminal & Shell Integration
- Running shell commands
- Installing dependencies
- Running tests
- Build processes
- Environment management

**Lab Exercise 2:** Use Claude Code to scaffold a complete REST API project with CRUD operations, tests, and documentation.

---

## Module 3: Effective Prompting Strategies (Week 3)

### 3.1 Prompting Fundamentals
- Clear and specific instructions
- Providing context effectively
- Breaking down complex tasks
- Iterative refinement

### 3.2 Context Management
- Using `/add` to include files
- Working with large codebases
- Managing conversation context
- When to start fresh vs. continue

### 3.3 Task Decomposition
- Breaking large projects into phases
- Milestone-based development
- Handling dependencies between tasks
- Progress tracking

### 3.4 Common Prompting Patterns
- "Implement X following the pattern in Y"
- "Refactor this code to..."
- "Debug this issue..."
- "Create tests for..."
- "Explain how this works..."

### 3.5 Anti-Patterns to Avoid
- Vague or ambiguous requests
- Over-specification vs. under-specification
- Ignoring Claude's questions
- Not reviewing generated code
- Context overload

**Lab Exercise 3:** Take an existing open-source project, onboard Claude Code to understand it, then implement a new feature using effective prompting.

---

## Module 4: Advanced Features (Week 4)

### 4.1 Slash Commands Deep Dive
- `/help` - Getting assistance
- `/add` - Adding files to context
- `/clear` - Managing context
- `/compact` - Compressing conversation
- `/config` - Configuration management
- `/cost` - Tracking API usage
- `/doctor` - Diagnostics
- `/init` - Project initialization
- `/review` - Code review mode
- `/vim` - Editor mode

### 4.2 Configuration & Customization
- `.claude/settings.json` configuration
- Project-specific settings
- Custom instructions and personas
- Memory and context persistence
- Model selection

### 4.3 MCP (Model Context Protocol) Integration
- Understanding MCP architecture
- Connecting to MCP servers
- Available MCP tools
- Building custom MCP integrations
- Use cases: databases, APIs, external tools

### 4.4 Git Integration
- Automated commit messages
- Branch management
- Code review workflows
- Merge conflict resolution
- Git history analysis

### 4.5 Headless & Automation Mode
- Running Claude Code in scripts
- CI/CD integration
- Batch processing
- Automated code reviews
- Scheduled tasks

**Lab Exercise 4:** Set up a complete development workflow with Git integration, custom MCP server, and automated code review pipeline.

---

## Module 5: Real-World Projects (Week 5)

### 5.1 Project: Full-Stack Application
- Requirements gathering with Claude
- Architecture design
- Frontend implementation
- Backend API development
- Database integration
- Testing and deployment

### 5.2 Project: Legacy Code Modernization
- Codebase analysis
- Documentation generation
- Incremental refactoring
- Adding test coverage
- Dependency updates

### 5.3 Project: DevOps Automation
- Infrastructure as Code generation
- CI/CD pipeline creation
- Docker/container configuration
- Kubernetes manifests
- Monitoring and logging setup

### 5.4 Project: Documentation & Technical Writing
- API documentation generation
- README creation
- Architecture decision records
- User guides and tutorials
- Code comments and JSDoc/docstrings

**Capstone Project:** Build a complete project from scratch using Claude Code as your primary development tool. Document the process, measure productivity gains, and present findings.

---

## Module 6: Best Practices & Team Integration (Week 6)

### 6.1 Workflow Optimization
- When to use Claude Code vs. manual coding
- Hybrid workflows
- Time and cost optimization
- Quality assurance practices

### 6.2 Code Quality & Review
- Reviewing AI-generated code
- Testing strategies
- Security considerations
- Performance implications
- Technical debt management

### 6.3 Team Collaboration
- Sharing configurations
- Establishing team conventions
- Knowledge sharing
- Training team members
- Code ownership and attribution

### 6.4 Cost Management
- Understanding token usage
- Optimizing API costs
- Monitoring and budgeting
- Caching strategies
- Model selection for cost efficiency

### 6.5 Ethical Considerations
- Code attribution and licensing
- Intellectual property considerations
- Dependency on AI tools
- Skill development balance
- Responsible AI usage

---

## Assessment Rubric

### Competency Levels

| Level | Description |
|-------|-------------|
| **Beginner** | Can perform basic operations, understands core concepts |
| **Intermediate** | Efficiently completes common tasks, uses advanced features |
| **Advanced** | Integrates Claude Code into complex workflows, teaches others |
| **Expert** | Optimizes processes, builds custom integrations, contributes to best practices |

### Skills Checklist

- [ ] Install and configure Claude Code
- [ ] Navigate the CLI interface efficiently
- [ ] Perform file operations confidently
- [ ] Generate and refactor code effectively
- [ ] Manage context and conversation strategically
- [ ] Use slash commands appropriately
- [ ] Configure project-specific settings
- [ ] Integrate with Git workflows
- [ ] Use headless/automation mode
- [ ] Manage costs and optimize usage
- [ ] Review and validate AI-generated code
- [ ] Apply ethical considerations

---

## Resources

### Official Documentation
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Anthropic API Reference](https://docs.anthropic.com/en/api)
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)

### Community Resources
- GitHub Discussions
- Discord communities
- Stack Overflow tags
- Blog posts and tutorials

### Recommended Reading
- Anthropic's prompt engineering guide
- Best practices for AI-assisted development
- Security considerations for AI coding tools

---

## Appendix A: Quick Reference Card

```
Starting Claude Code
────────────────────
claude                    # Start interactive session
claude "task"            # Start with initial task
claude -p "task"         # Print mode (one response)
claude --resume          # Resume last session

Essential Slash Commands
────────────────────────
/help                    # Show all commands
/add <file>              # Add file to context
/clear                   # Clear conversation
/compact                 # Compress context
/config                  # View/edit config
/cost                    # Show token usage
/doctor                  # Run diagnostics
/init                    # Initialize project
/review                  # Code review mode

Keyboard Shortcuts
──────────────────
Ctrl+C                   # Cancel current operation
Ctrl+D                   # Exit session
Tab                      # Autocomplete
Up/Down                  # Navigate history

Permission Responses
────────────────────
y                        # Yes, allow once
n                        # No, deny
a                        # Always allow this session
```

---

## Appendix B: Troubleshooting Guide

| Issue | Solution |
|-------|----------|
| API key not recognized | Check `ANTHROPIC_API_KEY` environment variable |
| Permission denied errors | Review file system permissions, run `/doctor` |
| Context too large | Use `/compact` or `/clear`, add files selectively |
| Slow responses | Check network, consider model selection |
| Unexpected behavior | Update to latest version, check `/doctor` output |
| Cost overruns | Use `/cost` regularly, set budget limits |

---

## Appendix C: Sample Prompts Library

### Project Scaffolding
```
Create a new TypeScript Express API with:
- RESTful routes for users and products
- PostgreSQL database with Prisma ORM
- JWT authentication
- Input validation with Zod
- Jest tests
- Docker configuration
```

### Code Review
```
Review this file for:
- Security vulnerabilities
- Performance issues
- Code style consistency
- Potential bugs
- Missing error handling
```

### Refactoring
```
Refactor this function to:
- Use async/await instead of callbacks
- Add proper TypeScript types
- Handle edge cases
- Add JSDoc documentation
```

### Bug Fixing
```
This code throws [error message] when [condition].
Debug and fix the issue. Explain what was wrong
and why your fix works.
```

### Documentation
```
Generate comprehensive documentation for this module including:
- Overview and purpose
- Installation instructions
- API reference
- Usage examples
- Configuration options
```

---

## Appendix D: Jargon Buster (For Kids!)

Here are simple explanations for the technical words used in this course:

| Word | What it means |
|------|---------------|
| **Agentic Coding** | An AI robot helper that can write code and do tasks for you, not just chat. |
| **API Key** | A secret password that lets your program talk to other programs (like Claude). |
| **Backend** | The "brain" of an app that runs on a server and handles data (you don't see this part). |
| **Boilerplate Code** | Boring, standard code that you have to write at the start of every project. |
| **Bug** | A mistake in the code that makes the program act weird or crash. |
| **CI/CD** | A robot system that automatically tests your code and delivers it whenever you save. |
| **CLI / Terminal** | A way to talk to the computer by typing text commands instead of clicking icons. |
| **Container (Docker)** | A magic lunchbox that holds your code and everything it needs to run anywhere. |
| **CRUD** | The 4 main things you do with data: **C**reate, **R**ead, **U**pdate (change), **D**elete. |
| **Debugging** | Being a detective to find and fix mistakes (bugs) in your code. |
| **Dependencies** | Other people's code that your project needs to work (like ingredients in a recipe). |
| **DevOps** | A job that mixes building software (Dev) and keeping it running smoothly (Ops). |
| **Environment Variables** | Secret notes that tell your computer how to run a program (like where to find keys). |
| **Framework** | A starter kit with tools and rules to help you build software faster. |
| **Frontend** | The part of an app you see and touch (buttons, screens, colors). |
| **Full-Stack** | Building both the Frontend (looks) and Backend (brain) of an app. |
| **Git** | A time machine for code. It saves versions so you can undo mistakes. |
| **JSON** | A popular way to write down data so both humans and computers can read it easily. |
| **Latency** | The lag or delay between asking a question and getting an answer. |
| **Library** | A collection of pre-written code you can use so you don't have to write everything from scratch. |
| **Linter** | A spell-checker for code that finds style mistakes. |
| **MCP (Model Context Protocol)** | A universal plug that lets AI connect to different tools and data easily. |
| **Node.js** | A tool that lets you run JavaScript code on your computer, not just in a browser. |
| **npm** | A giant library where you can download free code packages for Node.js. |
| **Refactoring** | Cleaning up your code to make it neater without changing what it does. |
| **REPL** | A chat window where you type code and the computer runs it immediately. |
| **REST API** | A set of rules for how programs talk to each other over the internet. |
| **Scaffold** | Building the basic skeleton of a project so you can start working on the fun parts. |
| **Token Usage** | How much "brain power" the AI uses. Usually, you pay for each token. |

---

*Curriculum Version: 1.0*  
*Last Updated: January 2025*  
*Author: NUS-ISS AI Development Program*
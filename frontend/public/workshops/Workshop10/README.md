# Workshop 10: Anti-Patterns & Troubleshooting

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

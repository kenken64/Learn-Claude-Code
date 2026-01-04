# Workshop 2: Mastering Prompts for Code

**Duration:** 3 hours

### Part A: Anatomy of Good Prompts (45 mins)

#### Activity 2.1: Prompt Comparison Exercise

Clone the workshop repository:

```bash
git clone https://github.com/kenken64/buggy-ecommerce
cd buggy-ecommerce
npm i
npm run dev
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

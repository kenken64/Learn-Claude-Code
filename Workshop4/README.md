# Workshop 4: Code Generation & Editing

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

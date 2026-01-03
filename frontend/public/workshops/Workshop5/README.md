# Workshop 5: Testing & Debugging

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

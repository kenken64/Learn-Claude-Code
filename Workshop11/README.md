# Workshop 11: Domain-Specific Applications

**Duration:** 3.5 hours

*(Choose 2-3 tracks based on participants)*

### Track A: Web Development (90 mins)

#### Activity 11A.1: React Component Generation

```
You: Create a reusable DataTable component with:
     - Sortable columns
     - Pagination
     - Row selection
     - Search/filter
     - Loading states
     - Empty states
     
     Use TypeScript and styled-components.
     Include Storybook stories.
```

#### Activity 11A.2: Next.js Full Stack

```
You: Create a Next.js 14 app with:
     - App router structure
     - Server components where appropriate
     - API routes for CRUD operations
     - Database with Prisma
     - Authentication with NextAuth
     
     Start with the project structure and core files.
```

### Track B: Backend Services (90 mins)

#### Activity 11B.1: API Design

```
You: Design and implement a RESTful API for a task management system:
     
     Resources: Users, Projects, Tasks, Comments
     Features:
     - Nested resources (project/tasks)
     - Filtering and pagination
     - Rate limiting
     - Request validation
     - Error handling
     - OpenAPI documentation
     
     Use Express with TypeScript.
```

#### Activity 11B.2: Microservice Template

```
You: Create a microservice template with:
     - Health check endpoint
     - Graceful shutdown
     - Structured logging
     - Configuration management
     - Docker setup
     - Kubernetes manifests
     - Integration test setup
```

### Track C: DevOps & Infrastructure (90 mins)

#### Activity 11C.1: Terraform Modules

```
You: Create Terraform modules for:
     1. VPC with public/private subnets
     2. EKS cluster with managed node groups
     3. RDS PostgreSQL with read replicas
     4. Application Load Balancer
     
     Include variable definitions, outputs, and example usage.
```

#### Activity 11C.2: CI/CD Pipeline

```
You: Create a complete CI/CD pipeline with:
     - GitHub Actions workflow
     - Build and test stages
     - Security scanning (SAST, dependency check)
     - Container image build
     - Deployment to staging (auto)
     - Deployment to production (manual approval)
     - Rollback procedure
```

### Track D: Data Engineering (90 mins)

#### Activity 11D.1: ETL Pipeline

```
You: Create a data pipeline that:
     1. Extracts data from REST API (paginated)
     2. Transforms JSON to normalized tables
     3. Loads to PostgreSQL
     4. Handles incremental updates
     5. Includes error handling and retry logic
     6. Logs progress and metrics
     
     Use Python with pandas and SQLAlchemy.
```

#### Activity 11D.2: Data Validation

```
You: Create a data quality framework:
     - Schema validation
     - Null checks
     - Range validation
     - Referential integrity
     - Custom business rules
     - Reporting dashboard
     
     Use Great Expectations or similar.
```

**Deliverable:** Complete working project in chosen domain

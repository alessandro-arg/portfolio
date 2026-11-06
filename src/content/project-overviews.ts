import type { ProjectOverview } from "@/types/portfolio";

export const projectOverviews = [
  {
    projectSlug: "homelab-platform",
    contextTitle: "From spreadsheet to self-hosted platform",
    context: [
      "Homelab Platform started as a practical replacement for managing internship applications in a spreadsheet. The first goal was intentionally small: build a reliable CRUD application for creating, tracking, updating, and deleting applications while learning Python, FastAPI, API design, validation, testing, and persistent storage.",
      "Instead of stopping once the application worked locally, I used the project to understand the full lifecycle of a self-hosted application. Over several phases, it evolved from an in-memory API into a persistent, containerized platform running on a Raspberry Pi with automated deployment, monitoring, a browser-based frontend, and private remote access.",
    ],
    architecture: [
      "The application runs as a Docker Compose stack on an ARM64 Raspberry Pi. A React and TypeScript frontend is built with Vite and served by an unprivileged Nginx container. Nginx acts as the main application entry point and proxies API requests through the internal Docker network to a FastAPI backend.",
      "FastAPI handles the application API while PostgreSQL provides persistent storage through SQLAlchemy. Alembic manages schema migrations, and a repository abstraction keeps HTTP behavior separate from database-specific logic. Prometheus, Grafana, node_exporter, and cAdvisor provide application, host, and container observability.",
      "Services start in a controlled order: PostgreSQL must become healthy before migrations run, migrations must complete before the backend starts, and the frontend starts only after the backend becomes healthy.",
    ],
    decisions: [
      {
        title: "Separate application logic from persistence",
        description:
          "The API was designed around a repository contract instead of coupling FastAPI endpoints directly to SQLAlchemy or PostgreSQL. The production application uses a PostgreSQL-backed repository, while an in-memory implementation remains available for fast and isolated API tests. This allowed persistent storage to be introduced without changing the existing API behavior.",
      },
      {
        title: "Make container startup deterministic",
        description:
          "Docker Compose health checks and service dependencies establish a predictable startup sequence. PostgreSQL must become healthy, Alembic migrations must finish successfully, the backend must become healthy, and only then is the frontend considered ready.",
      },
      {
        title: "Use a single application entry point",
        description:
          "Browser traffic enters through the frontend Nginx service, which reverse proxies API requests to FastAPI through Docker's internal network. This keeps the backend and database away from normal client access while giving users one application entry point.",
      },
      {
        title: "Deploy only validated commits",
        description:
          "GitHub Actions validates backend tests, PostgreSQL integration tests, the frontend build, and the containerized application before deployment. Successful changes to main are deployed through temporary Tailscale connectivity and OpenSSH, with exact-commit verification and post-deployment health validation.",
      },
      {
        title: "Keep infrastructure private by default",
        description:
          "The platform uses explicit network boundaries rather than exposing every service. Docker Compose separates application, data, monitoring, and test traffic, while FastAPI, PostgreSQL, and Prometheus remain restricted from normal client access. Tailscale provides private remote connectivity without public application ingress.",
      },
    ],
    outcome: [
      "The project progressed through eight completed phases covering backend development, persistent storage, containerization, Raspberry Pi deployment, CI/CD, monitoring, frontend development, and network security.",
      "The resulting platform runs continuously on a Raspberry Pi with persistent PostgreSQL storage, automated migrations, health-checked Docker services, a React frontend, automated testing and deployment, Prometheus and Grafana monitoring, reboot recovery, and private remote access through Tailscale.",
    ],
    lessons: [
      "Good architectural boundaries became easier to identify when they were introduced in response to real requirements instead of being designed prematurely.",
      "Running software reliably involves more than making it work locally; migrations, health checks, persistence, deployment validation, observability, and recovery all became part of the application architecture.",
      "Network security became easier to reason about after explicitly documenting which services should be reachable from containers, the host, the local network, Tailscale, and the public Internet.",
      "Building the project incrementally made it possible to add infrastructure and operational complexity while preserving behavior established in earlier phases.",
    ],
    resources: [
      {
        label: "README",
        href: "https://github.com/alessandro-arg/homelab-platform#readme",
      },
      {
        label: "Architecture",
        href: "https://github.com/alessandro-arg/homelab-platform/blob/main/docs/architecture.md",
      },
      {
        label: "Roadmap",
        href: "https://github.com/alessandro-arg/homelab-platform/blob/main/docs/roadmap.md",
      },
    ],
  },
  {
    projectSlug: "coordina",
    contextTitle: "Building a collaborative project management platform",
    context: [
      "Coordina started as a project and task management application inspired by tools such as Jira, Trello, and Linear. I wanted to build a larger product-style application where work could be organized into workspaces and projects instead of focusing on a single isolated feature.",
      "The project grew into a multi-user application with workspace membership, project organization, task assignment, analytics, filtering, and multiple task views. After the original implementation was already working, I later replaced its Appwrite-based backend with MongoDB, Auth.js, and Cloudinary so the application's data, authentication, and media storage were no longer tied to the original managed backend.",
    ],
    architecture: [
      "Coordina is a full-stack Next.js application organized around product features such as authentication, workspaces, members, projects, and tasks. Each feature keeps its UI, client-side API hooks, validation, and server routes close together, while shared application components and database infrastructure remain outside the feature modules.",
      "A Hono API runs through a catch-all Next.js route and combines the feature-specific server routes behind a single /api boundary. Auth.js provides authentication with Google, GitHub, and credential-based sign-in, while MongoDB and Mongoose store users, workspaces, memberships, projects, and tasks. Cloudinary handles uploaded workspace and project images.",
      "On the client, React Query manages server state and communicates with the Hono API through a typed RPC client. Tasks are represented by one shared data model and can be explored through table, Kanban, and calendar interfaces while filters, assignments, project relationships, due dates, and analytics operate on the same underlying workspace data.",
    ],
    decisions: [
      {
        title: "Organize application logic by product feature",
        description:
          "Instead of placing all API calls, forms, components, and schemas into large shared folders, the application groups related behavior around features such as workspaces, projects, members, and tasks. Each feature owns its client hooks, validation, UI, and Hono server routes, which makes the boundaries of a larger application easier to understand and maintain.",
      },
      {
        title: "Use workspaces as the authorization boundary",
        description:
          "Projects and tasks belong to workspaces, while users gain access through explicit membership records with ADMIN or MEMBER roles. Server routes verify the authenticated user's workspace membership before returning or modifying workspace resources, and administrative operations such as updating a workspace or resetting its invite code require the ADMIN role.",
      },
      {
        title: "Replace Appwrite with an owned MongoDB data layer",
        description:
          "The original application depended on Appwrite for database and authentication functionality. I later migrated the application incrementally to MongoDB and Mongoose, moved authentication to Auth.js with the MongoDB adapter, and moved image storage to Cloudinary. The refactor was performed feature by feature across authentication, workspaces, members, projects, tasks, and analytics while preserving the existing product behavior.",
      },
      {
        title: "Keep task views synchronized around one model",
        description:
          "Table, Kanban, and calendar views all operate on the same task data instead of maintaining separate representations. Kanban ordering is stored through numeric task positions, and drag-and-drop changes are submitted through a bulk-update endpoint that validates workspace ownership before updating task status and order.",
      },
      {
        title: "Isolate the live demo from persistent application data",
        description:
          "Demo users follow the same product flows without writing to the real MongoDB data used by normal accounts. Demo workspaces, projects, members, and tasks are stored in browser local storage, while the same React Query hooks branch to the real typed API for authenticated non-demo users. This keeps the public demo interactive without allowing visitors to modify persistent application data.",
      },
    ],
    outcome: [
      "Coordina became a complete project-management application with authentication, multi-user workspaces, invitations and member roles, projects, task assignment, filtering, analytics, and table, Kanban, and calendar task views.",
      "The later backend refactor removed the original Appwrite dependency while keeping the product usable. The current application uses MongoDB for persistent data, Auth.js for authentication, Cloudinary for media uploads, Hono for the API layer, and React Query for client-side server-state management.",
    ],
    lessons: [
      "Feature-oriented organization became increasingly valuable as the application grew because related UI, validation, client queries, and server behavior could evolve together without turning the project into one large shared layer.",
      "Authorization needs to be enforced around the resource being accessed, not only at sign-in. Modeling workspace membership explicitly made it possible to protect projects, tasks, analytics, invitations, and administrative operations consistently.",
      "Replacing an infrastructure dependency in an already working application is easier when the migration can be performed incrementally. Moving authentication and each domain API separately reduced the amount of product behavior that had to change at once.",
      "Interactive views are simpler to keep consistent when they operate on the same underlying domain model. The table, Kanban, calendar, filters, and analytics all benefit from tasks remaining one canonical resource rather than view-specific data.",
    ],
    resources: [
      {
        label: "README",
        href: "https://github.com/alessandro-arg/coordina#readme",
      },
      {
        label: "Roadmap",
        href: "https://github.com/alessandro-arg/coordina/blob/main/docs/roadmap.md",
      },
    ],
  },
] satisfies readonly ProjectOverview[];

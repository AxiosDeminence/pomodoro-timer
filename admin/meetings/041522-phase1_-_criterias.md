# [Apr. 15, 2022] Meeting Notes: [Emergency meeting for Phase 1 Criterias]

[Google Doc Link](https://docs.google.com/document/d/1uNcCuOKl3g9k1ljjAI71mNXv3BF6EIulGg5Jmg4HAEI/edit) (Visible with UCSD email)

## Absent Members
- Zian Lin
- Patrick Chiang (notified in advance)
- Jimmy Doan

## Discussion Points/Ideas
- Values
  - Organization
  - Robustness/Reliability
  - ~~Quality over Quantity~~
  - Simplicity (Conciseness)
    - Minimalism
  - Usefulness: Does it solve a problem that should be solved
  - Accessibility
    - Clarity (are features easy to understand and use)
    - Are different types of individuals able to use it (ie. technologically challenged or physically handicapped)
  - Maintainability
    - Somewhat covers testability and readability
    - Scalability?
- Constraints
  - Time (biggest constraint)
    - Individual availability vs common availability
  - Skillset
    - Learning new tech would take up time
    - Everyone is well versed with web development but not native mobile development
  - Existing codebase
    - How good is the project pool and how long would it take to clean up the codebase
    - How long would it take to adopt and familiarize ourselves with the project
- Metrics
  - Project's overall usefulness/goal (related to usefulness)
    - Are we interested in the project
  - Documentation
    - Organization
    - Onboarding documentation to bring team members to speed
    - Diagrams and useful explanations
    - Documentation for bugs and roadmaps
    - High level design (c4) and user stories
  - CI/CD pipeline and tests
    - Existing CI/CD pipeline can cut down on development time and will it need to be rebuilt?
  - Code readability
    - Is the code well-annotated
    - Are dependencies clearly listed out
    - Quality and simplicity over quantity
  - Code efficiency
    - Number of dependencies and overall flexibility/coupling of code
    - Code without an entire rewrite to add a feature is in our interests
    - Modularity of functions
  - Capability
    - Do we have the skills/technical ability to make the application
    - Do we have the time to make it as well
- Rating of Metrics
  - Out of 5 vs out of 10
- How to decide who reviews which repos
  - Two repos below your project in the #git-repo channel on slack. Loop back to beginning if needed.

## Decisions
- Values
  - Organization
  - Robustness/Reliability
  - Simplicity/Conciseness
  - Usefulness
  - Accessibility
  - Maintainability
- Constraints
  - Time (as the most restrictive)
  - Skillset of our developers
  - Complexity of the Codebase
- Metrics (Based on constraints and values)
  - Interests and Usefulness: Is it useful and are we interested in the project
  - Documentation: Organization, diagrams, onboarding docs, comprehensive explanations
  - CI/CD Pipeline and Tests: Will save time if already implemented
  - Code Quality: Readability and efficiency, modularity, and any red flags?
  - Capability: Do we have the knowledge on how to make the application

## To Do After Meeting
- Everyone will review two repos. Review the two repos underneath your post on the #git-repo channel on Slack.
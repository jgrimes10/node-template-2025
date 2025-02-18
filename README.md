# Template for Node.js Project

## Description

This is a basic template for setting up a Node.js project with Express.js. It provides a foundation for building web applications and APIs.

## Technologies Used

- **Node.js:** JavaScript runtime environment for server-side development.
- **Express.js:** Web application framework for Node.js, used for routing and middleware.
- **Nodemon:** Automatically restarts the node application when file changes in the directory are detected.
- **ESLint:** Linter to maintain code quality and consistency.
- **Zod:** Schema declaration and validation library.
- **Jest:** JavaScript testing framework.
- **Supertest:** HTTP assertion library for testing Express.js applications.
- **Sequelize:** ORM for interacting with databases.
- **SQLite:** Lightweight database used in non-production environments.
- **MySQL:** Database used in production environments.
- **Husky:** Git hooks made easy.

## Usage as a Template

1.  Click the "Use this template" button on the GitHub repository page.
2.  Choose a new repository name and create the new repository.
3.  Clone the new repository to your local machine:

    ```bash
    git clone <your-new-repository-url>
    ```

4.  Navigate to the project directory:

    ```bash
    cd <project-directory>
    ```

5.  Install dependencies:

    ```bash
    npm install
    ```

6.  Set up your environment variables. Copy `.env.example` to `.env` and modify the values as needed.

    ```bash
    cp .env.example .env
    ```

7.  Run the database migrations:

    ```bash
    npx sequelize db:migrate
    ```

8.  Start the server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    npm start
    ```

9.  Open your browser and go to `http://localhost:3000`.

## Contributing

Feel free to contribute to this project by submitting pull requests.

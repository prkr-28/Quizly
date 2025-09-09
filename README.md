# Quizly

Quizly is a full-stack web application designed for creating, managing, and taking quizzes, flashcards, and documents. It features a modern frontend built with React and Vite, and a robust backend powered by Express.js and MongoDB. The project is organized for scalability, maintainability, and ease of development.

## Features

- **User Authentication**: Secure login and registration with JWT and bcrypt.
- **Quiz Management**: Create, edit, and attempt quizzes with real-time feedback.
- **Flashcards**: Study and manage flashcards for efficient learning.
- **Document Handling**: Upload, parse, and manage documents (PDF support included).
- **Dashboard**: Personalized dashboard for users to track progress and access resources.
- **Role-based Access**: Middleware for user authentication and authorization.
- **Validation**: Zod-based schema validation for robust data integrity.
- **File Uploads**: Multer integration for handling file uploads.
- **Logging**: Centralized logging for errors and combined requests.
- **Frontend**: Responsive UI with reusable components, custom hooks, and context management.

## Project Structure

### Backend (`Quizly-Backend`)

- `src/`
  - `connections/`: Express and MongoDB connection setup.
  - `controllers/`: Route handlers for authentication, dashboard, documents, flashcards, and quizzes.
  - `interfaces/`: TypeScript interfaces for Express.
  - `libs/`: Utility libraries for bcrypt, JWT, and Express helpers.
  - `middlewares/`: Error handling, authentication, and validation middleware.
  - `models/`: Mongoose models for users, quizzes, flashcards, documents, and attempts.
  - `routes/`: API route definitions for all resources.
  - `services/`: Business logic for Groq AI integration and PDF parsing.
  - `uploads/`: Uploaded files storage.
  - `utils/`: Async error handling, file parsing, and multer configuration.
  - `validations/`: Zod schemas for request validation.
- `combined.log`, `error.log`: Log files.
- `nodemon.json`, `package.json`, `tsconfig.json`: Configuration files.

### Frontend (`Quizly-Frontend`)

- `src/`
  - `app.tsx`, `main.tsx`: App entry points.
  - `global-config.ts`, `global.css`: Global configuration and styles.
  - `_mock/`: Mock data for development.
  - `auth/`: Authentication logic, context, hooks, and views.
  - `components/`: Reusable UI components (carousel, popover, tabs, tables, etc.).
  - `constants/`: App-wide constants.
  - `hooks/`: Custom React hooks (e.g., quiz timer).
  - `layouts/`, `lib/`, `pages/`, `routes/`, `sections/`, `theme/`, `types/`, `utils/`: Modular structure for scalable development.
  - `assets/`: Images, icons, illustrations, fonts.
- `public/`: Static assets and redirects.
- `package.json`, `tsconfig.json`, `vite.config.ts`: Configuration files.

## Getting Started

### Backend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables (MongoDB URI, JWT secret, etc.).
3. Start the server:
   ```bash
   npm run dev
   ```

### Frontend

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Frontend**: React, Vite, TypeScript, CSS
- **Backend**: Express.js, MongoDB, Mongoose, TypeScript
- **Authentication**: JWT, bcrypt
- **Validation**: Zod
- **File Uploads**: Multer
- **Logging**: Winston (or similar)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

---

Quizly aims to make learning interactive and fun, providing tools for both educators and learners to create, share, and attempt quizzes and flashcards. The modular architecture ensures easy maintenance and future scalability.

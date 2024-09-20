# Yandex.Disk File Manager

## Overview

This web application allows users to interact with the Yandex.Disk API. Users can view files from a public link, select files to download, and enjoy a simple user interface built with React and Django Rest Framework.

## Table of Contents

- [Yandex.Disk File Manager](#yandexdisk-file-manager)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
    - [Backend](#backend)
    - [Frontend](#frontend)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Backend Setup](#backend-setup)
    - [Frontend Setup](#frontend-setup)
  - [Running the Application](#running-the-application)
  - [API Documentation](#api-documentation)
  - [Contributing](#contributing)
  - [License](#license)

## Features

- View files on Yandex.Disk using a public link.
- Download selected files directly to the local computer.
- Simple and intuitive web interface.
- Optional file filtering by type (e.g., images, documents).
- Ability to download multiple files simultaneously.
- Caching of file lists to reduce API requests.

## Technologies Used

### Backend

- Django
- Django Rest Framework
- yadisk (for interacting with Yandex.Disk API)

### Frontend

- React
- React Router
- Axios (for HTTP requests)

## Prerequisites

- Python 3.11+
- Node.js
- npm or yarn
- PostgreSQL/MySQL/SQLite (based on your database preference)

## Getting Started

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone yadisk-app
   cd yadisk-app/backend
   ```

2. **Create a virtual environment and activate it**:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Start the development server**:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd ../frontend
   ```

2. **Install dependencies**:

   ```bash
   npm install  # Or use `yarn` if you prefer
   ```

3. **Start the development server**:

   ```bash
   npm run dev  # Or use `yarn start`
   ```

## Running the Application

1. **Start the Django server**:

   ```bash
   cd backend
   python manage.py runserver
   ```

2. **Start the React server**:

   ```bash
   cd frontend
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the frontend.

## API Documentation

API documentation is available at `http://localhost:8000/api/swagger` (if using a tool like Swagger or DRF's built-in documentation).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# CSV SCANNER WITH DRAG AND DROP

[csv-scanner.webm](https://github.com/WilerMS/csv-scanner/assets/70902862/5ff932ca-9de1-4113-a897-e5ed15772224)

[![React](https://img.shields.io/badge/React-18.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.0.0-blue.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-2.2.0-blue.svg)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-14.17.0-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-4.17.1-green.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4.0-green.svg)](https://www.mongodb.com/)

## Description

This repository contains a monorepo for a web application that **allows users to upload CSV files using drag-and-drop functionality.** The files are processed in the server and storaged in a mongodb database. Users can search through the data in the web application. Additionally, users can share their search results with others simply by **sharing the URL**.

## Features

- [x] File uploader with drag-and-drop functionality
- [x] API for uploading files to the server
- [x] Server-side processing of the uploaded file
- [x] File storage in a MongoDB database with a unique fileId
- [x] Search functionality from the frontend using the API
- [x] Shareable search results via URL

## Monorepo Structure

The repository is divided into two workspaces:
1. **frontend**: Contains the React application with TypeScript, styled using TailwindCSS.
2. **backend**: Contains the Node.js server with Express and TypeScript.

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm
- MongoDB

### Installation

1. Clone the repository:
```bash
git clone https://github.com/WilerMS/csv-scanner.git
cd csv-scanner
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

To run the application, execute the following command from the root of the repository:
```bash
npm run dev
```

This will start both the frontend and backend servers concurrently.

## Usage

1. Drag and drop a CSV file into the uploader on the frontend.
2. The file will be sent to the backend for processing.
3. Once processed, a search bar will appear.
4. Use the search bar to filter through the data. The results will be displayed in card format.
5. Share your search results by copying and sharing the URL.

## API Endpoints

### Upload File

- **Endpoint**: `/api/csv`
- **Method**: POST
- **Description**: Uploads a CSV file to the server for processing.

### Search Data

- **Endpoint**: `/api/csv`
- **Method**: GET
- **Description**: Searches through the processed data based on query parameters.

## Contributing

Contributions are welcome! Please folk this repository and send me your pull requests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to reach out:

- GitHub: [Wiler Mariñez](https://github.com/wilerms)


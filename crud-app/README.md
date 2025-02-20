# CRUD App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed Node.js and npm.
- You have a basic understanding of JavaScript and React.

## Getting Started

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/crud-app.git
    cd crud-app
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

### Running the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Setup (Mock API with `json-server`)

This project uses [`json-server`](https://github.com/typicode/json-server) to simulate a REST API.

### Installation

First, install `json-server` globally:

```bash
npm install -g json-server
```

### Running the Mock API Server

To start the JSON server, run:

```bash
json-server --watch db.json --port 4000
```

This will serve the API at `http://localhost:4000`.

### API Usage Examples

#### Get All Topics
```bash
curl -X GET "http://localhost:4000/topics"
```

#### Get a Topic by ID
```bash
curl -X GET "http://localhost:4000/topics/550e8400-e29b-41d4-a716-446655440000"
```

#### Create a New Topic
```bash
curl -X POST "http://localhost:4000/topics" \
     -H "Content-Type: application/json" \
     -d '{
           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
           "title": "New Topic",
           "content": "This is a large string for content..."
         }'
```

#### Update a Topic
```bash
curl -X PUT "http://localhost:4000/topics/550e8400-e29b-41d4-a716-446655440000" \
     -H "Content-Type: application/json" \
     -d '{
           "id": "550e8400-e29b-41d4-a716-446655440000",
           "title": "Updated Title",
           "content": "Updated content..."
         }'
```

#### Delete a Topic
```bash
curl -X DELETE "http://localhost:4000/topics/550e8400-e29b-41d4-a716-446655440000"
```

# SENTINEL

SENTINEL is a real-time fraud response platform with a React frontend and a FastAPI backend.  
This repository is organized as a clean monorepo for local development, demos, and team collaboration.

## Monorepo Structure

```text
SENTINEL/
├── frontend/   # React + Vite UI
├── backend/    # FastAPI APIs + WebSocket + fraud pipeline
├── docs/       # project docs and notes
├── .gitignore
└── README.md
```

## Tech Stack

- Frontend: React, Vite, Cytoscape
- Backend: FastAPI, Uvicorn, Python
- Realtime: WebSocket + polling fallback

## Environment Setup

Frontend environment:

```bash
cp frontend/.env.example frontend/.env
```

Backend environment:

```bash
cp backend/.env.example backend/.env
```

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Backend Setup

```bash
cd backend
python -m venv venv
```

Windows:

```bash
venv\Scripts\activate
```

Mac/Linux:

```bash
source venv/bin/activate
```

Install dependencies and run:

```bash
pip install -r requirements.txt
uvicorn app.main:app --reload
```

## Demo Flow

1. Start backend and frontend in separate terminals.
2. Open frontend app in browser.
3. Backend emits transaction scoring and case updates.
4. Frontend `useWebSocket()` consumes updates and synchronizes `cases[]`.
5. Graph view renders from `caseData.nodes` and `caseData.edges`.
6. Action endpoints (`/action/freeze`, `/action/flag`, `/action/alert`) update case/action timeline in realtime.

## WebSocket Architecture

```text
Backend WS -> useWebSocket() -> cases[] -> Graph.jsx -> GraphModule -> GraphCanvas
```

Event types:
- `tx_scored`
- `case_updated`
- `action_taken`


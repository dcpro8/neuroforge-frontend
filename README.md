# 🚀 NeuroForge Frontend

**NeuroForge Frontend** is a single-page React application that serves as the UI layer for an AI-powered blueprint generation system.

It takes a product idea, sends it to a backend API, and renders a structured technical blueprint including features, database schema, APIs, UI components, and an implementation roadmap.

---

## 1. Project Overview
This frontend is designed as a lightweight interface for interacting with an AI system. It focuses on:
* Capturing user input
* Managing async generation state
* Rendering structured JSON into readable technical sections
  
---

## 2. Features
*   **✨ Idea Input:** Single input field with validation and submission handling.
*   **📊 Blueprint Rendering:** Displays AI-generated output in structured sections:
    *   Features
    *   Database Schema
    *   API Endpoints
    *   UI Components
    *   Roadmap
*   **📥 Markdown Export:** Export the generated blueprint as a `.md` file.
*   **⚡ State Management:** Global state using Zustand (loading, error, blueprint).
*   **🎬 UI Transitions:** Smooth animations using **Framer Motion**.

---

## 3. Architecture Overview

*   **Framework:** React + TypeScript (Vite)
*   **State:** Zustand
*   **Styling:** Tailwind CSS
*   **Networking:** Axios
*   **Animations:** Framer Motion
*   **Icons:** Lucide-React

---

## 4. Data Flow

   1. User enters idea in IdeaInput.tsx
   2. useGenerate.ts sends POST request to /api/generate
   3. Zustand store sets loading state
   4. Backend returns structured JSON blueprint
   5. Store updates with response
   6. Output components render sections
   7. ExportToolbar converts data to Markdown

---

## 5. Folder Structure
```text
src/
├── components/           # UI Presentation Layer
│   ├── Home.tsx          # Main layout container
│   ├── IdeaInput.tsx     # Input & validation logic
│   ├── ExportToolbar.tsx # Markdown export engine
│   ├── OutputFeatures.tsx
│   ├── OutputDatabase.tsx
│   ├── OutputAPIs.tsx
│   ├── OutputUI.tsx
│   └── OutputRoadmap.tsx
├── hooks/                # Logic & Lifecycle
│   └── useGenerate.ts    # API request & error management
├── store/                # State Management
│   └── useStore.ts       # Zustand global store
├── services/             # Networking
│   └── api.ts            # Axios configuration
├── types/                # Type Safety
│   └── blueprint.ts      # Interfaces for AI schema
└── App.tsx               # Root entry point
```

## 6. Setup Instructions

   1. Clone the repository
      
      ```text
      git clone https://github.com/dcpro8/neuroforge-frontend.git
      ```
      
      ```text
      cd neuroforge-frontend
      ```
      
   3. Install Dependencies

      ```text
      npm install
      ```
      
   5. Configure Environment
      
      Create a ```.env``` file in the root directory:
      
      ```text
      VITE_API_URL=http://localhost:5000
      ```
      
   7. Launch development server
      ```text
      npm run dev
      ```

## 7. Environment Variables

| Variable | Description |
| :--- | :--- |
| `VITE_API_URL` | The base URL for the backend API (e.g., `http://localhost:5000`). |

## 8. Notes

   * This is a blueprint generator UI, not a full product system
   * No authentication or data persistence
   * Data is lost on refresh (in-memory state only)
   * Export supports Markdown only

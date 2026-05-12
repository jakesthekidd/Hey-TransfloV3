
  import { createRoot } from "react-dom/client";
  import App from "./App.tsx";
  import "./index.css";

  // Error boundary for initial render
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) {
      throw new Error("Root element not found");
    }
    createRoot(rootElement).render(<App />);
  } catch (error) {
    console.error("Error rendering app:", error);
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; font-family: system-ui; color: red;">
          <h1>Error Loading Application</h1>
          <p>${error instanceof Error ? error.message : String(error)}</p>
          <pre style="background: #f5f5f5; padding: 10px; border-radius: 4px; overflow: auto;">
            ${error instanceof Error ? error.stack : String(error)}
          </pre>
        </div>
      `;
    }
  }
  
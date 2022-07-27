import { React } from "./deps.ts";
import { ReactDOM } from "./deps.ts";
import App from "./App.tsx";

// React needs to render after the DOM has loaded
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

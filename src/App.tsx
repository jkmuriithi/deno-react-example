import { React } from "./deps.ts";
import Logo from "./Logo.tsx";
// import styles from "./App.css" assert { type: "css" };

/** Create React App default page. */
export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo className="App-logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

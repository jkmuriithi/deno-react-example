// import React from "react"
import React from "https://esm.sh/react@18.2.0?dev";

// import ReactDOM from "react-dom/client"
import ReactDOM from "https://esm.sh/react-dom@18.2.0?dev&path=/client";

/*
 * In order to build for production, simply remove the "dev" query parameter
 * from each URL. I'm open to any PRs which offer a more automatic way
 * to switch between development and production dependencies under esbuild.
 */

export { React, ReactDOM };

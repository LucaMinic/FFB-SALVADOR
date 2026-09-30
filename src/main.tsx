
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import { router } from "./app/routes";
  import "./styles/index.css";

  // Pages are pre-rendered to static HTML at build time. Wait until the router has
  // loaded the current (lazy) page before mounting, so React swaps the static markup
  // for the live page in one go instead of flashing an empty screen in between.
  const routerReady = new Promise<void>((resolve) => {
    if (router.state.initialized) return resolve();
    const unsubscribe = router.subscribe((state) => {
      if (state.initialized) {
        unsubscribe();
        resolve();
      }
    });
  });

  routerReady.then(() => {
    createRoot(document.getElementById("root")!).render(<App />);
  });

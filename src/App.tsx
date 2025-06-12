import "./index.css";
import HomePage from "./pages/HomePage";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route index element={<HomePage id="HomePage" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

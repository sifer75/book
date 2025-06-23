import "./index.css";
import WrapperSections from "./pages/WrapperSections";
import { ThemeProvider } from "@/components/theme-provider";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route index element={<WrapperSections id="WrapperSections" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;

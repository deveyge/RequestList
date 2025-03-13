import "./styles/index.css";
import Layout from "../pages/Layout";
import UseTheme from "./providers/ThemeProvider/lib/UseTheme";
import { StoreProvider } from "./providers/StoreProvider/StoreProvider";

export default function App() {
  const { theme } = UseTheme();
  return (
    <StoreProvider>
      <div className={theme}>
        <Layout />
      </div>
    </StoreProvider>
  );
}

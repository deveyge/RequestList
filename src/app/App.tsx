import "./styles/index.css";
import Layout from "../pages/Layout";
import UseTheme from "./providers/ThemeProvider/lib/UseTheme";
import { StoreProvider } from "./providers/StoreProvider/StoreProvider";

export default function App() {
  const { theme } = UseTheme();
  return (
    <div className={theme}>
      <StoreProvider>
        <Layout />
      </StoreProvider>
    </div>
  );
}

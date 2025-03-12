import { AppRouter } from "app/providers/router";
import Header from "../widgets/Header";
import Footer from "../widgets/Footer";
import { ThemeSwitcher } from "shared/ThemeSwitcher";

function layout() {
  return (
    <div className="to-muted bg-gradient-to-b from-background">
      <Header />
      <ThemeSwitcher />
      <main className="container mx-auto min-h-screen px-4 py-8">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default layout;

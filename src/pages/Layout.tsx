import { AppRouter } from "app/providers/router";
import { Header } from "../widgets/Header";
import { ThemeSwitcher } from "shared/ThemeSwitcher";

function layout() {
  return (
    <div className="">
      <Header />
      <ThemeSwitcher />
      <main className="container mx-auto min-h-screen px-4 py-8">
        <AppRouter />
      </main>
    </div>
  );
}

export default layout;

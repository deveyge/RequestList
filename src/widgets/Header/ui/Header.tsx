import { Link } from "react-router-dom";
import { ThemeSwitcher } from "shared/ThemeSwitcher";

export default function Header() {
  return (
    <header className=" bg-primary ">
      <div className="flex flex-row justify-between container mx-auto py-3 items-center">
        <Link to={'/requests'}><h1 className="text-xl font-semibold uppercase">RequestList</h1></Link>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

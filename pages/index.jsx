import { Header } from "../components/header";
import { Game } from "../components/game_new";

export default function HomePage() {
  return (
    <HomePageLayOut header={<Header />}>
      <Game />
    </HomePageLayOut>
  );
}

function HomePageLayOut({ header, children }) {
  return (
    <div className="bg-slate-50 min-h-screen">
      {header}
      <main className="mt-6 mx-auto w-max">{children}</main>
    </div>
  );
}

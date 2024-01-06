import Link from "next/link";
import { ArrowLeftIcon } from "../game_new/ui/icons/arrow-left-icon";
import { StarIcon } from "../game_new/ui/icons/star-icon";
import { UserIcon } from "../game_new/ui/icons/user-icon";
import { TimeIcon } from "../game_new/ui/icons/time-icon";

export function GameTitle({ playersCount }) {
  return (
    <div className="ml-2">
      <Link
        href="#"
        className="flex items-center gap-2 text-teal-600 text-xs leading-tight -mb-0.5"
      >
        <ArrowLeftIcon />
        На главную
      </Link>
      <h1 className="text-4xl text-black leading-tight">Крестики Нолики</h1>
      <div className="flex items-center gap-3 text-xs leading-tight text-slate-400">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />
          {playersCount}
        </div>
        <div className="flex items-center gap-1">
        <TimeIcon />
        1 мин на ход
        </div>
      </div>
    </div>
  );
}

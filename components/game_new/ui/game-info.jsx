import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { TimeIcon } from "./icons/time-icon";

export function GameInfo({playersCount, isRatingGame, timeMod}) {
  return (
    <div className="flex items-center gap-3 text-xs leading-tight text-slate-400">
      {isRatingGame && <StarIcon />}
      <div className="flex items-center gap-1">
        <UserIcon />
        {playersCount}
      </div>
      <div className="flex items-center gap-1">
        <TimeIcon />{timeMod}
      </div>
    </div>
  );
}

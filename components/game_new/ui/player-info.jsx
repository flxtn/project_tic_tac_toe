import clsx from "clsx";
import { GameSymbol } from "./game-symbol";
import Image from "next/image";
import { useNow } from "../../lib/timers";

export function PlayerInfo({
  isRight,
  name,
  avatar,
  rating,
  symbol,
  timer,
  timerStartAt,
}) {

  
  const now = useNow(1000, timerStartAt);
  const mils = Math.max(now ? timer - (now - timerStartAt) : timer, 0);
  const seconds = Math.ceil(mils / 1000);
  const minute_string = String(Math.floor(seconds / 60)).padStart(2, "0");
  const seconds_string = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;
  const getTimerColor = () => {
    if (timerStartAt) {
      return isDanger ? "text-orange-500" : "text-slate-900";
    }
    return "text-slate-200";
  };

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <div
          className={" text-teal-600 flex items-center gap-2 text-start w-44"}
        >
          <Image src={avatar} height={48} width={48} alt="avatar" unoptimized />
          <div className="overflow-hidden">
            <div className="text-lg leading-tight truncate">{name}</div>
            <div className="text-slate-400 text-xs leading-tight">
              Рейтинг: {rating}
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
          <GameSymbol symbol={symbol} />
        </div>
      </div>
      <div
        className={clsx("w-px h-8 bg-slate-200", isRight && "order-2")}
      ></div>
      <div
        className={clsx(
          "text-lg leading-tight font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor()
        )}
      >
        {minute_string}:{seconds_string}
      </div>
    </div>
  );
}

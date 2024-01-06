import { Profile } from "../profile";
import { clsx } from "clsx";
import { GameSymbol } from "./game-symbol";
import { GAME_SYMBOLS } from "./constants";
import avatarSrc1 from "./images/avatar1.png";
import avatarSrc2 from "./images/avatar2.png";
import avatarSrc3 from "./images/avatar3.png";
import avatarSrc4 from "./images/avatar4.png";
import { useEffect, useState } from "react";

const players = [
  {
    id: 1,
    name: "Hohol_igrok1",
    avatar: avatarSrc1,
    symbol: GAME_SYMBOLS.CROSS,
    rating: 1488,
  },
  {
    id: 2,
    name: "Hohol_igrok2",
    avatar: avatarSrc2,
    symbol: GAME_SYMBOLS.ZERO,
    rating: 1488,
  },
  {
    id: 3,
    name: "Hohol_igrok3",
    avatar: avatarSrc3,
    symbol: GAME_SYMBOLS.TRIANGLE,
    rating: 1488,
  },
  {
    id: 4,
    name: "Hohol_igrok4",
    avatar: avatarSrc4,
    symbol: GAME_SYMBOLS.SQUARE,
    rating: 1488,
  },
];

export function GameInfo({
  className,
  playersCount,
  currentMove,
  isWinner,
  onPlayerTimeOver,
}) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3"
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          onTimeOver={() => onPlayerTimeOver(player.symbol)}
          isRight={index % 2 === 1}
          isTimer={currentMove === player.symbol && !isWinner}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight, isTimer, onTimeOver }) {
  const [seconds, setSeconds] = useState(60);
  const minute_string = String(Math.floor(seconds / 60)).padStart(2, "0");
  const seconds_string = String(seconds % 60).padStart(2, "0");
  const isDanger = seconds < 10;

  const getTimerColor = () => {
    if (isTimer) {
      return isDanger ? "text-orange-500" : "text-slate-900";
    }
    return "text-slate-200";
  };

  useEffect(() => {
    if (isTimer) {
      const interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);

      return () => {
        clearInterval(interval);
        setSeconds(60);
      };
    }
  }, [isTimer]);

  useEffect(() => {
    if (seconds === 0) {
      onTimeOver();
    }
  }, [seconds]);

  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
          <GameSymbol symbol={playerInfo.symbol} />
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

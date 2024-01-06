import { useCallback, useMemo, useReducer } from "react";
import { PLAYERS } from "./constants";
import { BackLink } from "./ui/back-link";
import { GameCells } from "./ui/game-cell";
import { GameInfo } from "./ui/game-info";
import { GameLayout } from "./ui/game-layout";
import { GameMoveInfo } from "./ui/game-move-info";
import { GameOverModal } from "./ui/game-over-modal";
import { GameTitle } from "./ui/game-title";
import { PlayerInfo } from "./ui/player-info";
import {
  GAME_STATE_ACTIONS,
  gameStateReducer,
  initGameState,
} from "./model/game-state-reducer";
import { getNextMove } from "./model/get-next-move";
import { computeWinner } from "./model/compute-winner";
import { computeWinnerSymbol } from "./model/compute-winner-symbol";
import { computePlayerTimer } from "./model/compute-player-timer";
import { useInterval } from "../lib/timers";

export function Game() {
  const PLAYERS_COUNT = 4;

  const [gameState, dispatch] = useReducer(
    gameStateReducer,
    {
      playersCount: PLAYERS_COUNT,
      defaultTimer: 60000,
      currentMoveStart: Date.now(),
    },
    initGameState
  );

  useInterval(
    1000,
    !!gameState.currentMoveStart,
    useCallback(() => {
      dispatch({
        type: GAME_STATE_ACTIONS.TICK,
        now: Date.now(),
      });
    }, [])
  );

  const winnerSequence = useMemo(() => computeWinner(gameState), [gameState]);
  const nextMove = getNextMove(gameState);
  const winnersymbol = computeWinnerSymbol(gameState, {
    winnerSequence,
    nextMove,
  });

  const winnerPlayer = PLAYERS.find((player) => player.symbol === winnersymbol);

  const handleCellClick = useCallback((index) => {
    dispatch({
      type: GAME_STATE_ACTIONS.CELL_CLICK,
      index,
      now: Date.now(),
    });
  }, []);

  const { cells, currentMove } = gameState;

  return (
    <>
      <GameLayout
        backLink={<BackLink />}
        gametitle={<GameTitle />}
        gameInfo={
          <GameInfo
            isRatingGame
            playersCount={PLAYERS_COUNT}
            timeMod={"1 мин на ход."}
          />
        }
        playersList={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => {
          const { timer, timerStartAt } = computePlayerTimer(
            gameState,
            player.symbol
          );
          return (
            <PlayerInfo
              key={player.id}
              avatar={player.avatar}
              name={player.name}
              rating={player.rating}
              isRight={index % 2 === 1}
              symbol={player.symbol}
              timer={timer}
              timerStartAt={timerStartAt}
            />
          );
        })}
        gameMoveInfo={
          <GameMoveInfo currentMove={currentMove} nextMove={nextMove} />
        }
        gameCells={cells.map((cell, index) => (
          <GameCells
            key={index}
            index={index}
            disabled={!!winnersymbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={handleCellClick}
            symbol={cell}
          />
        ))}
      />
      <GameOverModal
        winnerName={winnerPlayer?.name}
        players={PLAYERS.slice(0, PLAYERS_COUNT).map((player, index) => (
          <PlayerInfo
            key={player.id}
            avatar={player.avatar}
            name={player.name}
            rating={player.rating}
            isRight={index % 2 === 1}
            timer={gameState.timers[player.symbol]}
            symbol={player.symbol}
          />
        ))}
      ></GameOverModal>
    </>
  );
}

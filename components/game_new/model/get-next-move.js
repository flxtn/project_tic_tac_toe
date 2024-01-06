import { MOVE_ORDER } from "../constants";

export function getNextMove(gameState) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, gameState.playersCount).filter(
    (symbol) => gameState.timers[symbol] > 0
  );

  const nextMoveIndex = slicedMoveOrder.indexOf(gameState.currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}

export function computeWinnerSymbol(gameState, { winnerSequence, nextMove }) {
  return gameState.currentMove === nextMove
    ? gameState.currentMove
    : gameState.cells[winnerSequence?.[0]];
}

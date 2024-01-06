import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";

export function GameField({
  className,
  cells,
  currentMove,
  nextMove,
  handleCellClick,
  winnerSequence,
  winnersymbol
}) {
  const actions = (
    <div className="flex items-center gap-1">
      <UiButton className="w-[91px]" size="md" variant="primary">
        Ничья
      </UiButton>
      <UiButton className="w-[106px]" size="md" variant="outline">
        Сдаться
      </UiButton>
    </div>
  );
  return (
    <GameFieldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((symbol, index) => (
          <GameCell key={index} disabled={!!winnersymbol} isWinner={winnerSequence?.includes(index)} onClick={() => handleCellClick(index)}>
            {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
          </GameCell>
        ))}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameFieldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex items-center gap-1 text-slate-900 font-semibold text-xl leading-tight">
          Ход:
          <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-xs leading-tight">
          Следующий:
          <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-3 pl-px pt-px">
      {children}
    </div>
  );
}

function GameCell({ children, onClick, isWinner, disabled }) {
  return (
    <button
    disabled={disabled}
      className={clsx(
        "border border-slate-200 -ml-px -mt-px flex items-center justify-center",
        isWinner && "bg-orange-600/10"
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

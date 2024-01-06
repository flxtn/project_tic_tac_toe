

export function GameLayout({
  backLink,
  gametitle,
  gameInfo,
  playersList,
  gameMoveInfo,
  gameCells,
}) {
  return (
    <div className="pb-10">
      <div className="ml-2">
        {backLink}
        {gametitle}
        {gameInfo}
      </div>
      <div
        className={
          "mt-4 bg-white rounded-2xl shadow-md px-8 py-4 justify-between grid grid-cols-2 gap-3"
        }
      >
        {playersList}
      </div>
      <div className={"mt-6 bg-white rounded-2xl shadow-md px-8 pt-5 pb-7"}>
        <div className="flex gap-3 justify-between">
          <div className="mr-auto">{gameMoveInfo}</div>
        </div>
        <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] mt-3 pl-px pt-px">
          {gameCells}
        </div>
      </div>
    </div>

  );
}

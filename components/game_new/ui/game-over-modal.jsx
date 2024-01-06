import { UIModal } from "../../uikit/ui-modal";
import { UiButton } from "../../uikit/ui-button";

export function GameOverModal({ winnerName, players }) {
  return (
    <UIModal width="md" isOpen={winnerName}>
      <UIModal.Header>Игра завершена!</UIModal.Header>
      <UIModal.Body>
        <div className="text-sm">
          Победитель: <span className="text-teal-600">{winnerName}</span>
        </div>
        <div className="justify-between grid grid-cols-2 gap-3 mt-2">
          {players}
        </div>
      </UIModal.Body>
      <UIModal.Footer>
        <UiButton size="md" variant="outline">
          Вернуться
        </UiButton>
        <UiButton size="md" variant="primary">
          Играть снова
        </UiButton>
      </UIModal.Footer>
    </UIModal>
  );
}

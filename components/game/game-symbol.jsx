import { GAME_SYMBOLS } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { RoundIcon } from "./icons/round-icon";
import { SquareIcon } from "./icons/square-icon";
import { TringeIcon } from "./icons/tringle-icon";



export function GameSymbol({ symbol, className }) {
    const Icon = {
        [GAME_SYMBOLS.CROSS]: CrossIcon,
        [GAME_SYMBOLS.SQUARE]: SquareIcon,
        [GAME_SYMBOLS.TRIANGLE]: TringeIcon,
        [GAME_SYMBOLS.ZERO]: RoundIcon
    }[symbol] ?? CrossIcon

    return <Icon className={className} />
}
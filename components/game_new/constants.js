import avatarSrc1 from "./ui/images/avatar1.png";
import avatarSrc2 from "./ui/images/avatar2.png";
import avatarSrc3 from "./ui/images/avatar3.png";
import avatarSrc4 from "./ui/images/avatar4.png";

export const GAME_SYMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  SQUARE: "square",
  TRIANGLE: "triangle",
};

export const MOVE_ORDER = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];

export const PLAYERS = [
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

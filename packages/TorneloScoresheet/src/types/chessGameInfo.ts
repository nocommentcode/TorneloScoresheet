import { Moment } from 'moment';

export type GameInfo = {
  name: string;
  site: string;
  date: Moment;
  round: number;
  subRound: number;
  result: string;
  players: Player[];
  pgn: string;
};

export enum PlayerColour {
  White,
  Black,
}

export const PLAYER_COLOUR_NAME: Record<PlayerColour, string> = {
  0: 'White',
  1: 'Black',
};

export type Player = {
  color: PlayerColour;
  firstName: string;
  lastName: string;
  elo: number;
  country: string;
  fideId: number;
};

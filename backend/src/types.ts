export interface HexCoord {
  q: number;
  r: number;
}

export enum HexType {
  EMPTY = 'empty',
  NUTRIENT = 'nutrient',
  POLLUTED = 'polluted',
  MYCELIUM = 'mycelium',
  START = 'start',
}

export interface HexCell {
  coord: HexCoord;
  type: HexType;
  nutrientId?: string;
}

export interface GameState {
  id: string;
  level: number;
  gridRadius: number;
  cells: Record<string, HexCell>;
  nutrients: string[];
  connectedNutrients: string[];
  startCoord: HexCoord;
  myceliumCells: HexCoord[];
  steps: number;
  optimalSteps: number;
  status: 'playing' | 'won' | 'lost';
  createdAt: number;
  updatedAt: number;
  puzzleId?: string;
  puzzleName?: string;
  puzzleDifficulty?: PuzzleDifficulty;
}

export interface CreateGameRequest {
  level?: number;
  gridRadius?: number;
  puzzleId?: string;
}

export type PuzzleDifficulty = 'easy' | 'medium' | 'hard';

export interface PuzzleCell {
  q: number;
  r: number;
  type: 'start' | 'nutrient' | 'polluted';
  nutrientId?: string;
}

export interface Puzzle {
  id: string;
  name: string;
  difficulty: PuzzleDifficulty;
  recommendedSteps: number;
  gridRadius: number;
  startCoord: HexCoord;
  cells: PuzzleCell[];
}

export interface ExtendMyceliumRequest {
  coord: HexCoord;
}

export interface ApiResponse<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

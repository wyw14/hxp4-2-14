import { Puzzle } from './types';

export const PUZZLES: Puzzle[] = [
  {
    id: 'puzzle_01',
    name: '初见菌丝',
    difficulty: 'easy',
    recommendedSteps: 4,
    gridRadius: 3,
    startCoord: { q: 0, r: 0 },
    cells: [
      { q: 0, r: 0, type: 'start' },
      { q: 2, r: -1, type: 'nutrient', nutrientId: 'n1' },
      { q: -2, r: 1, type: 'nutrient', nutrientId: 'n2' },
      { q: 1, r: 1, type: 'polluted' },
      { q: -1, r: -1, type: 'polluted' },
    ],
  },
  {
    id: 'puzzle_02',
    name: '三岔路口',
    difficulty: 'easy',
    recommendedSteps: 6,
    gridRadius: 3,
    startCoord: { q: 0, r: 0 },
    cells: [
      { q: 0, r: 0, type: 'start' },
      { q: 2, r: 0, type: 'nutrient', nutrientId: 'n1' },
      { q: -2, r: 0, type: 'nutrient', nutrientId: 'n2' },
      { q: 0, r: 2, type: 'nutrient', nutrientId: 'n3' },
      { q: 1, r: -1, type: 'polluted' },
      { q: -1, r: 1, type: 'polluted' },
    ],
  },
  {
    id: 'puzzle_03',
    name: '蜿蜒小径',
    difficulty: 'medium',
    recommendedSteps: 8,
    gridRadius: 4,
    startCoord: { q: 0, r: 0 },
    cells: [
      { q: 0, r: 0, type: 'start' },
      { q: 3, r: -1, type: 'nutrient', nutrientId: 'n1' },
      { q: -3, r: 1, type: 'nutrient', nutrientId: 'n2' },
      { q: 1, r: 3, type: 'nutrient', nutrientId: 'n3' },
      { q: 1, r: 0, type: 'polluted' },
      { q: -1, r: 0, type: 'polluted' },
      { q: 0, r: 1, type: 'polluted' },
      { q: 2, r: 1, type: 'polluted' },
      { q: -2, r: -1, type: 'polluted' },
    ],
  },
  {
    id: 'puzzle_04',
    name: '污染迷宫',
    difficulty: 'medium',
    recommendedSteps: 10,
    gridRadius: 4,
    startCoord: { q: 0, r: 0 },
    cells: [
      { q: 0, r: 0, type: 'start' },
      { q: 3, r: 1, type: 'nutrient', nutrientId: 'n1' },
      { q: -3, r: -1, type: 'nutrient', nutrientId: 'n2' },
      { q: 2, r: -3, type: 'nutrient', nutrientId: 'n3' },
      { q: -2, r: 3, type: 'nutrient', nutrientId: 'n4' },
      { q: 1, r: 1, type: 'polluted' },
      { q: 1, r: -1, type: 'polluted' },
      { q: -1, r: 1, type: 'polluted' },
      { q: -1, r: -1, type: 'polluted' },
      { q: 2, r: 0, type: 'polluted' },
      { q: -2, r: 0, type: 'polluted' },
      { q: 0, r: 2, type: 'polluted' },
    ],
  },
  {
    id: 'puzzle_05',
    name: '终极挑战',
    difficulty: 'hard',
    recommendedSteps: 14,
    gridRadius: 5,
    startCoord: { q: 0, r: 0 },
    cells: [
      { q: 0, r: 0, type: 'start' },
      { q: 4, r: 0, type: 'nutrient', nutrientId: 'n1' },
      { q: -4, r: 0, type: 'nutrient', nutrientId: 'n2' },
      { q: 2, r: 3, type: 'nutrient', nutrientId: 'n3' },
      { q: -2, r: -3, type: 'nutrient', nutrientId: 'n4' },
      { q: 0, r: 4, type: 'nutrient', nutrientId: 'n5' },
      { q: 1, r: 0, type: 'polluted' },
      { q: -1, r: 0, type: 'polluted' },
      { q: 0, r: 1, type: 'polluted' },
      { q: 0, r: -1, type: 'polluted' },
      { q: 2, r: 1, type: 'polluted' },
      { q: 2, r: -1, type: 'polluted' },
      { q: -2, r: 1, type: 'polluted' },
      { q: -2, r: -1, type: 'polluted' },
      { q: 3, r: -2, type: 'polluted' },
      { q: -3, r: 2, type: 'polluted' },
      { q: 1, r: 2, type: 'polluted' },
      { q: -1, r: -2, type: 'polluted' },
    ],
  },
];

export function getPuzzleById(id: string): Puzzle | undefined {
  return PUZZLES.find((p) => p.id === id);
}

export function getAllPuzzles(): Puzzle[] {
  return PUZZLES.map((p) => ({ ...p }));
}

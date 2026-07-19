import type { KeyConfig } from "../types";
  
export const row1: KeyConfig[] = [
  { label: '~', letter: '~', variant: 'base' },
  { label: '1', letter: '1', variant: 'base' },
  { label: '2', letter: '2', variant: 'base' },
  { label: '3', letter: '3', variant: 'base' },
  { label: '4', letter: '4', variant: 'base' },
  { label: '5', letter: '5', variant: 'base' },
  { label: '6', letter: '6', variant: 'base' },
  { label: '7', letter: '7', variant: 'base' },
  { label: '8', letter: '8', variant: 'base' },
  { label: '9', letter: '9', variant: 'base' },
  { label: '0', letter: '0', variant: 'base' },
  { label: 'experience', section: 'experience', variant: 'accent' },
];

export const row2: KeyConfig[] = [
  { label: 'projects', section: 'projects', variant: 'accent' },
  { label: 'q', letter: 'q', variant: 'base' },
  { label: 'w', letter: 'w', variant: 'base' },
  { label: 'e', letter: 'e', variant: 'base' },
  { label: 'r', letter: 'r', variant: 'base' },
  { label: 't', letter: 't', variant: 'base' },
  { label: 'y', letter: 'y', variant: 'base' },
  { label: 'u', letter: 'u', variant: 'base' },
  { label: 'i', letter: 'i', variant: 'base' },
  { label: 'o', letter: 'o', variant: 'base' },
];

export const row3: KeyConfig[] = [
  { label: 'résumé', section: 'résumé', variant: 'accent' },
  { label: 'a', letter: 'a', variant: 'base' },
  { label: 's', letter: 's', variant: 'base' },
  { label: 'd', letter: 'd', variant: 'base' },
  { label: 'f', letter: 'f', variant: 'base' },
  { label: 'g', letter: 'g', variant: 'base' },
  { label: 'h', letter: 'h', variant: 'base' },
  { label: 'contact', section: 'contact', variant: 'accent' },
];

export const row4: KeyConfig[] = [
  { label: 'about', section: 'about', variant: 'accent' },
  { label: 'z', letter: 'z', variant: 'base' },
  { label: 'x', letter: 'x', variant: 'base' },
  { label: 'c', letter: 'c', variant: 'base' },
  { label: 'v', letter: 'v', variant: 'base' },
  { label: 'b', letter: 'b', variant: 'base' },
  { label: 'n', letter: 'n', variant: 'base' },
  { label: '✿', variant: 'sakura' },
];

export const row5: KeyConfig[] = [
  { label: 'blog', section: 'blog', variant: 'art', stretch: true },
];

export const keyboardRows: KeyConfig[][] = [row1, row2, row3, row4, row5];
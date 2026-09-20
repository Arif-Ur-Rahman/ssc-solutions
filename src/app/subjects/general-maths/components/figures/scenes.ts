// components/figures/scenes.ts
//
// Every figure the subject draws, in one lookup. Split by exercise only
// because a single file of sixty-odd scenes is hard to read.

import type { Scene } from "./types";
import { scenes1 } from "./scenes1";
import { scenes10 } from "./scenes10";
import { scenes52 } from "./scenes52";
import { scenes161 } from "./scenes161";
import { scenes162 } from "./scenes162";

export const scenes: Record<string, Scene> = {
  ...scenes1,
  ...scenes10,
  ...scenes52,
  ...scenes161,
  ...scenes162,
};

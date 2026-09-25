// components/figures/scenes.ts
//
// Every figure the subject draws, in one lookup. Split by exercise only
// because a single file of sixty-odd scenes is hard to read.

import type { Scene } from "./types";
import { scenes1 } from "./scenes1";
import { scenes10 } from "./scenes10";
import { scenes12 } from "./scenes12";
import { scenes14 } from "./scenes14";
import { scenes15 } from "./scenes15";
import { scenes52 } from "./scenes52";
import { scenes71 } from "./scenes71";
import { scenes72 } from "./scenes72";
import { scenes8 } from "./scenes8";
import { scenes6 } from "./scenes6";
import { scenes161 } from "./scenes161";
import { scenes162 } from "./scenes162";

export const scenes: Record<string, Scene> = {
  ...scenes1,
  ...scenes10,
  ...scenes12,
  ...scenes14,
  ...scenes15,
  ...scenes52,
  ...scenes71,
  ...scenes72,
  ...scenes8,
  ...scenes6,
  ...scenes161,
  ...scenes162,
};

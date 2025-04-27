#!/usr/bin/env node

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

try {
  // Run commitizen
  execSync('npx cz --no-verify', { stdio: 'inherit' });
} catch (error) {
  console.error('Commit failed:', error.message);
  process.exit(1);
}
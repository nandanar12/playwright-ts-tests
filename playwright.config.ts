import { defineConfig } from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  reporter: [['html', { open: 'on-failure' }]],

  use: {
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',    // helps debugging
  },

}); 
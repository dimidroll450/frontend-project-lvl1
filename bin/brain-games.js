#! /usr/bin/env node

import { welcome, getName, greeting } from '../src/cli.js';

welcome();
const name = getName();
greeting(name);

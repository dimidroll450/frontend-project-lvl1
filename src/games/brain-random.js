import isPrime from './brain-prime.js';
import progression from './brain-progression.js';
import calculator from './calculator.js';
import isEven from './game-even.js';
import gcd from './gcd-game.js';
import { getRandomValue } from '../utils.js';

const games = [isPrime, progression, calculator, isEven, gcd];

export default getRandomValue(games);

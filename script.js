'use strict';

'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔄 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔄 Substitution'],
  [64, '🔸 Yellow Card'],
  [69, '🛑 Red Card'],
  [70, '🔄 Substitution'],
  [72, '🔄 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔸 Yellow Card'],
]);

// 1) Create an array of of the different events that happened with no duplicates.

const gameEventsArr = [...new Set([...gameEvents.values()])];

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

// 2) After the game has finished, it was found that the yellow card from munute 64 was unfair. Remove this event from the game events log.

gameEvents.delete(64);

// 3) Compute and log the following string to the console: "An event happened, on average, every 9 minutes." (Keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / (gameEvents.size - 1)} minutes.`
);

// 4) Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL

for (const [time, event] of gameEvents) {
  time <= 45
    ? console.log(`[FIRST HALF] ${time}: ${event}`)
    : console.log(`[SECOND HALF] ${time}: ${event}`);
}

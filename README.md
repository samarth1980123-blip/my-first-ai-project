const scenes = [
  {
    id: 'intro',
    location: 'Rooftop Relay',
    objective: 'Find the signal beacon',
    title: 'The Storm Above the Skyline',
    description:
      'The city is dark except for emergency lamps and the distant hum of generators. You are Mira Holt, a courier with one job: trace the missing transmission that has started the city-wide blackout. Your twin brother, Leo, is somewhere underground, and his last message said: “If the signal survives the rain, the city can still be saved.”',
    details: [
      'The rain lashes the rooftop as the skyline flickers in and out.',
      'A cracked relay box hums beneath your boots.',
      'Your comms crackle with a warning: “No one is safe after midnight.”'
    ],
    choices: [
      {
        label: 'Climb down the service ladder toward the old tram line',
        detail: 'A risky route through the maintenance tunnels.',
        effects: { energy: -12, morale: +8, health: -6, credits: 0 },
        next: 1,
        item: 'Arc-light Battery'
      },
      {
        label: 'Stop to help a family trapped in the stairwell',
        detail: 'You risk delay to save civilians.',
        effects: { energy: -8, morale: +14, health: -4, credits: 0 },
        next: 2,
        item: 'Emergency Rations'
      },
      {
        label: 'Trade your spare tools for a map and a ride',
        detail: 'Fast, expensive, and efficient.',
        effects: { credits: -12, morale: +4, energy: -4, health: 0 },
        next: 3,
        item: 'Transit Map'
      }
    ]
  },
  {
    id: 'tram',
    location: 'Old Tram Line',
    objective: 'Reach the substation before the floodline rises',
    title: 'The Tunnel Beneath the Harbor',
    description:
      'Water leaks through the service tunnel in silver streaks. The air smells of metal, moss, and old smoke. Somewhere deeper, the blackout signal pulses like a heartbeat.',
    details: [
      'A maintenance hatch rattles in the wind.',
      'You spot an abandoned cargo cart with a sealed battery pack.',
      'A lone station guard whispers, “The signal was never meant for the public.”'
    ],
    choices: [
      {
        label: 'Force open the sealed battery cart and take the power core',
        detail: 'High reward, high risk.',
        effects: { health: -10, morale: +5, energy: -14, credits: +8 },
        next: 4,
        item: 'Power Core'
      },
      {
        label: 'Follow the guard to the maintenance desk for intel',
        detail: 'A safer route that may reveal the truth.',
        effects: { morale: +12, energy: -8, health: -2 },
        next: 5,
        item: 'Encrypted Notes'
      }
    ]
  },
  {
    id: 'family',
    location: 'North Stairwell',
    objective: 'Escort the refugees to shelter',
    title: 'A Family in the Dark',
    description:
      'A mother and her teenager stand under flickering emergency lights, huddled with two bags and a tiny radio. They tell you the city is turning hostile because people think the blackout is a cover for a military sweep.',
    details: [
      'The radio crackles with a voice saying, “The lights are coming back. Do not trust the towers.”',
      'The teenager hands you a folded map with a marked signal node.',
      'You hear sirens rising from the east.'
    ],
    choices: [
      {
        label: 'Escort them to the church shelter and keep moving',
        detail: 'You protect innocents at the cost of speed.',
        effects: { morale: +18, energy: -12, health: -2 },
        next: 5,
        item: 'Church Map'
      },
      {
        label: 'Take the map and hurry toward the signal node',
        detail: 'A harsh choice, but the clock is running out.',
        effects: { morale: -4, energy: -10, health: -6 },
        next: 4,
        item: 'Signal Marker'
      }
    ]
  },
  {
    id: 'market',
    location: 'Glass Market',
    objective: 'Secure a route to the control tower',
    title: 'The Shopping District After Midnight',
    description:
      'A once-busy market sits under rain and ruin. Broken kiosks line alleyways, and the air tastes like ozone. You can hear voices from the rooftops—people chanting, bargaining, and preparing for a fight.',
    details: [
      'An old mechanic offers to sell you a drone for a steep price.',
      'Several residents point toward the city tower where a glowing sign flickers to life.',
      'A small explosion ripples through the distance, followed by sirens.'
    ],
    choices: [
      {
        label: 'Buy the drone and scout the tower from above',
        detail: 'A smart move if you can afford it.',
        effects: { credits: -16, energy: -8, morale: +6 },
        next: 6,
        item: 'Scout Drone'
      },
      {
        label: 'Use the crowd’s fear to sneak through the old transit tunnel',
        detail: 'Discreet, dangerous, and quicker.',
        effects: { energy: -14, morale: +4, health: -8 },
        next: 7,
        item: 'Transit Pass'
      }
    ]
  },
  {
    id: 'signal',
    location: 'Signal vault',
    objective: 'Decide who gets the transmission',
    title: 'The Hidden Relay Room',
    description:
      'Inside the relay chamber, a faint green pulse flares across the walls. A hidden transmitter is broadcasting a looped message: “The city is not the problem. The people are.” The final signal is being sent to the skyline control tower.',
    details: [
      'Leo’s voice cuts in over the channel: “Mira, listen—keep the grid alive. The tower can reroute the power if we stop the sabotage.”',
      'A second voice crackles in: “The city needs a scapegoat. We could rewrite the story.”',
      'The room is filling with gas from a damaged pipe.'
    ],
    choices: [
      {
        label: 'Connect the citywide relay and restore power to the tower',
        detail: 'You trust Leo and the system.',
        effects: { energy: -10, morale: +15, health: -8 },
        next: 8,
        item: 'Grid Key'
      },
      {
        label: 'Destroy the transmitter and keep the truth from being weaponized',
        detail: 'You reject the narrative and choose the people over the machine.',
        effects: { energy: -12, morale: +18, health: -9 },
        next: 9,
        item: 'Truth Archive'
      }
    ]
  },
  {
    id: 'intel',
    location: 'Maintenance Desk',
    objective: 'Uncover the cause of the blackout',
    title: 'The Quiet Conspiracy',
    description:
      'The maintenance desk is a maze of scratched schematics and emergency logs. You discover that the blackout was deliberately triggered by a private tower consortium to force a data takeover and bankrupt the city’s districts.',
    details: [
      'Someone has been rerouting power through hidden channels inserted beneath the line.',
      'The notes mention a name: Arlen Voss.',
      'The tower consortium wants the city fractured before dawn.'
    ],
    choices: [
      {
        label: 'Take the proofs to the public defender and expose the conspiracy',
        detail: 'The truth could save the city—but it may also start a panic.',
        effects: { morale: +20, energy: -10, health: -5 },
        next: 8,
        item: 'Evidence Bundle'
      },
      {
        label: 'Use the notes to blackmail the tower and negotiate a safer blackout exit',
        detail: 'A more practical route with dangerous consequences.',
        effects: { credits: +12, morale: +8, energy: -8 },
        next: 9,
        item: 'Negotiation Leverage'
      }
    ]
  },
  {
    id: 'tower',
    location: 'Skyline Tower',
    objective: 'Choose the future of the city',
    title: 'The Tower Above the Rain',
    description:
      'The control tower rises above the city like a broken crown. The emergency lights flicker and the skyline trembles with footsteps, sirens, and desperate voices below. One final choice will decide whether the city wakes up to order or chaos.',
    details: [
      'You can see Leo on a maintenance catwalk, signaling for help.',
      'The tower’s public feed is live, broadcasting to the whole city.',
      'A countdown appears on the main screen: 04:32:17.'
    ],
    choices: [
      {
        label: 'Broadcast the truth and call for calm, not control',
        detail: 'The city learns what happened and chooses its own path.',
        effects: { morale: +18, energy: -6, health: -4 },
        next: 10,
        item: 'Public Broadcast'
      },
      {
        label: 'Use the generator surge to force a citywide reset',
        detail: 'A hard reboot may save infrastructure, but it could plunge the city into fear.',
        effects: { morale: -10, energy: -18, health: -10 },
        next: 10,
        item: 'Emergency Reset'
      }
    ]
  },
  {
    id: 'finale',
    location: 'Dawnline',
    objective: 'Survive to the morning',
    title: 'The City Reaches Dawn',
    description:
      'The storm clears. The skyline glows with pale gold, and a strange silence settles over the streets. City lights return in slices, then in waves. Your last decision has changed everything.',
    details: [
      'People begin to gather in the streets, no longer fearing the dark.',
      'Leo steps out of the shadows and lets out a breath he has held for hours.',
      'The future is uncertain, but one thing is clear: the city is still alive.'
    ],
    choices: [
      {
        label: 'Restart the story with a different strategy',
        detail: 'Try again and chase a new ending.',
        effects: { health: 0, energy: 0, morale: 0, credits: 0 },
        next: 0,
        item: 'New Night'
      }
    ]
  }
];

const game = {
  stats: {
    health: 100,
    energy: 100,
    morale: 70,
    credits: 20
  },
  inventory: ['Flashlight', 'Radio'],
  currentScene: 0,
  log: ['The blackout began at 11:47 PM. The city is waiting on one signal.'],
  lastChoice: null
};

const sceneTitle = document.getElementById('scene-title');
const sceneDescription = document.getElementById('scene-description');
const sceneList = document.getElementById('scene-list');
const choicesContainer = document.getElementById('choices');
const inventoryEl = document.getElementById('inventory');
const logEl = document.getElementById('log');
const statusPill = document.getElementById('status-pill');
const locationTag = document.getElementById('location-tag');
const objectiveTag = document.getElementById('objective-tag');

function clampValue(value) {
  return Math.max(0, Math.min(100, value));
}

function updateHUD() {
  document.getElementById('health').textContent = clampValue(game.stats.health);
  document.getElementById('energy').textContent = clampValue(game.stats.energy);
  document.getElementById('morale').textContent = clampValue(game.stats.morale);
  document.getElementById('credits').textContent = Math.max(0, game.stats.credits);

  inventoryEl.innerHTML = '';
  for (const item of game.inventory) {
    const li = document.createElement('li');
    li.textContent = item;
    inventoryEl.appendChild(li);
  }

  logEl.innerHTML = '';
  for (const entry of game.log.slice(-6)) {
    const div = document.createElement('div');
    div.className = 'log-entry';
    div.textContent = entry;
    logEl.appendChild(div);
  }
}

function addLog(message) {
  game.log.push(message);
  if (game.log.length > 12) {
    game.log.shift();
  }
}

function applyChoice(choice) {
  if (!choice) return;

  Object.entries(choice.effects).forEach(([key, value]) => {
    if (key === 'credits') {
      game.stats.credits += value;
      return;
    }

    game.stats[key] = clampValue(game.stats[key] + value);
  });

  if (choice.item) {
    game.inventory.push(choice.item);
  }

  const currentScene = scenes[game.currentScene];
  const flavor = choice.label.replace(/^./, (m) => m.toUpperCase());
  addLog(`${flavor}. ${currentScene.title} shifts under your feet.`);

  if (game.stats.health <= 0 || game.stats.energy <= 0 || game.stats.morale <= 0) {
    renderEnding('collapse');
    return;
  }

  if (choice.next === 10) {
    renderEnding(determineEnding());
    return;
  }

  if (choice.next === 0) {
    resetGame();
    return;
  }

  game.currentScene = choice.next;
  renderScene();
}

function determineEnding() {
  const { health, morale, credits, energy } = game.stats;

  if (health >= 70 && morale >= 70 && energy >= 45) {
    return 'victory';
  }

  if (credits >= 40 && morale >= 60) {
    return 'negotiated';
  }

  if (morale >= 80 && health >= 50) {
    return 'truth';
  }

  return 'uncertain';
}

function renderEnding(type) {
  const endings = {
    victory: {
      title: 'The City Wakes',
      description:
        'You broadcast the truth, rescue Leo, and keep the city from fracturing. The tower opens, the lights return in waves, and the people of the city begin to rebuild together.',
      summary: 'Ending: Dawn of Trust'
    },
    negotiated: {
      title: 'The City Holds',
      description:
        'You choose compromise over spectacle. The blackout ends, the tower is controlled, and the public survives the night without bloodshed. It is not perfect—but it is enough to keep the city alive.',
      summary: 'Ending: Quiet Compromise'
    },
    truth: {
      title: 'The Story Breaks',
      description:
        'By refusing the lie, you force the city to look at the truth. The tower falls silent, the people rise with their own voices, and the old powers lose their grip on the skyline.',
      summary: 'Ending: Shattered Narrative'
    },
    uncertain: {
      title: 'The Morning Is Unclear',
      description:
        'The city survives, but only by force. The people endure the aftermath with fear and exhaustion. The tower still hums in the distance, and the next chapter is far from over.',
      summary: 'Ending: Fractured Dawn'
    },
    collapse: {
      title: 'The City Fades Out',
      description:
        'The pressure of the night breaks you before the dawn. Your last message is lost in the static as the city slips deeper into darkness. The story ends with rain, silence, and a world that never woke up.',
      summary: 'Ending: Blackout'
    }
  };

  const ending = endings[type];
  sceneTitle.textContent = ending.title;
  sceneDescription.textContent = ending.description;
  sceneList.innerHTML = `<li>${ending.summary}</li>`;
  choicesContainer.innerHTML = '<button class="choice-btn" id="play-again"><span class="choice-label">Play again</span><span class="choice-detail">Try a different route through the city.</span></button>';
  document.getElementById('play-again').addEventListener('click', () => {
    resetGame();
  });

  statusPill.textContent = 'Mission Complete';
  locationTag.textContent = 'Final Outcome';
  objectiveTag.textContent = ending.summary;
  addLog(ending.summary);
  updateHUD();
}

function resetGame() {
  game.stats = { health: 100, energy: 100, morale: 70, credits: 20 };
  game.inventory = ['Flashlight', 'Radio'];
  game.currentScene = 0;
  game.log = ['The blackout began at 11:47 PM. The city is waiting on one signal.'];
  renderScene();
}

function renderScene() {
  const scene = scenes[game.currentScene];

  sceneTitle.textContent = scene.title;
  sceneDescription.textContent = scene.description;
  sceneList.innerHTML = scene.details.map((detail) => `<li>${detail}</li>`).join('');
  locationTag.textContent = scene.location;
  objectiveTag.textContent = scene.objective;
  statusPill.textContent = `Night Cycle ${game.currentScene + 1}`;

  choicesContainer.innerHTML = '';
  scene.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.className = 'choice-btn';
    button.innerHTML = `
      <span class="choice-label">${choice.label}</span>
      <span class="choice-detail">${choice.detail}</span>
    `;

    button.addEventListener('click', () => applyChoice(choice));
    choicesContainer.appendChild(button);
  });

  updateHUD();
}

renderScene();

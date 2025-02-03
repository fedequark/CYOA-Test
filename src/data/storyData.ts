export interface StoryNode {
  id: string;
  text: string;
  choices: Choice[];
}

interface Choice {
  text: string;
  nextNode: string;
}

export const storyNodes: Record<string, StoryNode> = {
  start: {
    id: 'start',
    text: 'You stand before an ancient stone archway, its surface etched with glowing runes. The path ahead splits into two directions.',
    choices: [
      {
        text: 'Take the path that leads into the misty forest',
        nextNode: 'forest'
      },
      {
        text: 'Enter the dark cave beneath the arch',
        nextNode: 'cave'
      }
    ]
  },
  forest: {
    id: 'forest',
    text: 'The mist swirls around your feet as you enter the forest. Through the trees, you spot a flickering light and hear distant music.',
    choices: [
      {
        text: 'Follow the mysterious music',
        nextNode: 'fairy_circle'
      },
      {
        text: 'Stay on the main path',
        nextNode: 'woodcutter'
      }
    ]
  },
  cave: {
    id: 'cave',
    text: 'The cave is dark but warm. Strange crystals in the walls emit a soft purple glow. You hear water dripping somewhere in the darkness.',
    choices: [
      {
        text: 'Examine the crystals more closely',
        nextNode: 'crystal_chamber'
      },
      {
        text: 'Follow the sound of water',
        nextNode: 'underground_river'
      }
    ]
  },
  fairy_circle: {
    id: 'fairy_circle',
    text: 'You discover a ring of mushrooms where ethereal beings dance in the moonlight. They notice your presence and pause.',
    choices: [
      {
        text: 'Accept their invitation to dance',
        nextNode: 'start'
      },
      {
        text: 'Quietly back away',
        nextNode: 'start'
      }
    ]
  },
  woodcutter: {
    id: 'woodcutter',
    text: "You encounter an old woodcutter's cottage. Smoke rises from the chimney and the door is slightly ajar.",
    choices: [
      {
        text: 'Knock on the door',
        nextNode: 'start'
      },
      {
        text: 'Continue past the cottage',
        nextNode: 'start'
      }
    ]
  },
  crystal_chamber: {
    id: 'crystal_chamber',
    text: 'The crystals pulse with ancient magic. You feel a strange energy coursing through your body.',
    choices: [
      {
        text: 'Channel the crystal energy',
        nextNode: 'start'
      },
      {
        text: 'Resist the power',
        nextNode: 'start'
      }
    ]
  },
  underground_river: {
    id: 'underground_river',
    text: 'You find a swift underground river. A small boat is tethered nearby, gently bobbing in the current.',
    choices: [
      {
        text: 'Board the boat',
        nextNode: 'start'
      },
      {
        text: 'Search for another path',
        nextNode: 'start'
      }
    ]
  }
};
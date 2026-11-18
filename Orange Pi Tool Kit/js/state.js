// =======================
// PROGRAM REGISTRY & CENTRAL STATE STORE
// =======================

export const programRegistry = {
  'fall-term': { label: 'Fall Term', botName: 'ai_eco_bot' },
  'winter-term': { label: 'Winter Term', botName: '<BOT_NAME>' },
  'spring-term': { label: 'Spring Term', botName: '<BOT_NAME>' },
  'summer-camp': { label: 'Summer Camp', botName: '<BOT_NAME>' },
  'winter-camp': { label: 'Winter Camp', botName: '<BOT_NAME>' },
  'cny-camp': { label: 'Chinese New Year Camp', botName: '<BOT_NAME>' },
  'easter-camp': { label: 'Easter Camp', botName: '<BOT_NAME>' }
};

const state = {
  program: 'fall-term',
  os: 'windows',
  username: '',
  isOneDrive: false,
  folderName: '',
  eventCode: '',
  fileName: '',
  ip: ''
};

/**
 * Returns a read-only copy of the current state.
 */
export function getState() {
  return { ...state };
}

/**
 * Updates a specific key in the state.
 */
export function updateState(key, value) {
  if (Object.prototype.hasOwnProperty.call(state, key)) {
    state[key] = value;
  }
}

/**
 * Builds the dynamic remote target path on the Orange Pi:
 * /opt/bigbang/students/<botName>/<eventCode>/
 */
export function getRemoteTargetPath(currentState = state) {
  const prog = programRegistry[currentState.program] || programRegistry['fall-term'];
  const botName = prog.botName || '<BOT_NAME>';
  const eventCode = currentState.eventCode || '<EVENT_CODE>';
  return `/opt/bigbang/students/${botName}/${eventCode}/`;
}
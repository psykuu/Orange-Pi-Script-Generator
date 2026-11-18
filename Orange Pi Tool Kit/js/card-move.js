// =======================
// CARD 3: SUDO MOVE COMPILER
// =======================
import { getRemoteTargetPath } from './state.js';

export function buildSudoMove(state) {
  const fileName = state.fileName || '<FILE_NAME>';
  const target = getRemoteTargetPath(state);
  return `sudo mv /home/orangepi/${fileName} ${target}`;
}

export function renderCardMove(state) {
  const codeEl = document.getElementById('cmd-sudo-mv');
  if (codeEl) {
    codeEl.textContent = buildSudoMove(state);
  }
}
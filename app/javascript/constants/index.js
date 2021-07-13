export const API_ROOT = 'http://localhost:3000'
export const API_WS_ROOT = 'ws://localhost:3000/cable'
export const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content
}

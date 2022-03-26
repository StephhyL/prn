/**
 * This helper formats seconds into human readable format
 */
export function timeFormat(seconds) {
  if (seconds < 60) {
    return `${seconds} seconds`;
  } else if (seconds >= 60 && seconds < 3600) {
    return `${Math.floor(seconds / 60)} minutes`;
  } else {
    return `${Math.floor(seconds / 60 / 60)} hour`;
  }
}

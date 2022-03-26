/**
 * This helper formats seconds into human readable format
 */
export function timeFormat(seconds) {
  if (seconds === 0) {
    return `00:00`;
  }
  if (seconds < 60) {
    if (seconds < 10) {
      return `00:0${seconds}`;
    }
    return `00:${seconds}`;
  } else if (seconds >= 60 && seconds < 3600) {
    const minute = Math.floor(seconds / 60);
    const second = Math.round((seconds / 60 - minute) * 60);
    if (minute < 10) {
      if (second < 10) {
        return `0${minute}:0${second}`;
      }
      return `0${minute}:${second}`;
    }
    if (second < 10) {
      return `0${minute}:0${second}`;
    }
    return `${minute}:${second}`;
  } else {
    return `${Math.floor(seconds / 60 / 60)} hour left`;
  }
}

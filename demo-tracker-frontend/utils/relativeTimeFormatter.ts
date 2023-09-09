export function formatRelativeTime(timestamp: number): string {
  const now = Date.now();
  const timeDifference = now - timestamp;

  const rtf = new Intl.RelativeTimeFormat("fa-IR", { numeric: "auto" });

  if (timeDifference < 60000) {
    return rtf.format(-Math.floor(timeDifference / 1000), "second");
  } else if (timeDifference < 3600000) {
    return rtf.format(-Math.floor(timeDifference / 60000), "minute");
  } else if (timeDifference < 86400000) {
    return rtf.format(-Math.floor(timeDifference / 3600000), "hour");
  } else if (timeDifference < 2592000000) {
    return rtf.format(-Math.floor(timeDifference / 86400000), "day");
  } else if (timeDifference < 31536000000) {
    return rtf.format(-Math.floor(timeDifference / 2592000000), "month");
  } else {
    return rtf.format(-Math.floor(timeDifference / 31536000000), "year");
  }
}

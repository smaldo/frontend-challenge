export function timeToWords(time: string) {
  let words = ""
  const delta = (new Date().getTime() - new Date(time).getTime())/ 1000;
  const days = Math.trunc(Math.floor(delta / 86400));
  const hours = Math.trunc(Math.floor(delta / 3600) % 24);
  const minutes = Math.trunc(Math.floor(delta / 60) % 60);
  if (days >= 1) {
    if (days === 1) {
      words = "1 day ago"
    } else {
      words = days + " days ago"
    }
  } else if (hours >= 1) {
    if (hours === 1) {
      words = "1 hour ago"
    } else {
      words = hours + " hours ago"
    }
  } else if (minutes >= 1) {
    if (minutes <= 1) {
      words = "Just now"
    } else {
      words = minutes + " minutes ago"
    }
  }
  return words;
}

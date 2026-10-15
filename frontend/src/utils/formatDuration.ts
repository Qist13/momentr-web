// Formats a duration in seconds as m:ss, or h:mm:ss for an hour or longer.
export function formatDuration(totalSeconds: number): string {
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const hours = Math.floor(totalSeconds / 3600);

    const ss = String(seconds).padStart(2, "0");

    if (hours > 0) {
        const mm = String(minutes).padStart(2, "0");
        return `${hours}:${mm}:${ss}`;
    }

    return `${minutes}:${ss}`;
}

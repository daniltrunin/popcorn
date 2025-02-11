export default function runtime(data) {
    const totalMin = data.runtime;
    const hours = Math.floor(totalMin / 60);
    const minutes = totalMin % 60;
    if (hours == 0) {
        return `${minutes}m`;
    }
    return `${hours}h ${minutes}m`;
}
export const convertSecsToMins = (seconds: number) => {
    let minutes = Math.floor(seconds / 60)
    let secs = seconds % 60

    return `${minutes < 10 ? "0" : ""} ${minutes} : ${secs < 10 ? "0" : ""} ${secs}`
}

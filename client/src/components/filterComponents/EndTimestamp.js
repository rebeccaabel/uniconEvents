export default function (a) {
    let result = new Date(`${a} 24:00:00`).getTime()
    return result
}
export default function (a) {
    let result = new Date(`${a} 00:00:00`).getTime()
    return result
}
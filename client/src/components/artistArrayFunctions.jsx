import { artists } from "./artistArray.jsx";

export function sortByMostRecentAdded() {
    let sortingNumber = 0
    let artistsSortedByDateAdded = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].dateAdded.getTime() >= sortingNumber) {
            artistsSortedByDateAdded.unshift(artists[i])
            sortingNumber = artists[i].dateAdded.getTime()
        } else {
            artistsSortedByDateAdded.push(artists[i])
            sortingNumber = artists[i].dateAdded.getTime()
        }
    }
    return artistsSortedByDateAdded
}

export function sortIfToday() {
    const today = new Date()
    let sortedArray = []
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getFullYear() == today.getFullYear() &
            artists[i].date.getMonth() == today.getMonth() &
            artists[i].date.getDate() == today.getDate()

            /*  
            IMPLEMENT THIS WHEN WE GET THE REAL JSON-FILE FOR THE EVENTS
            & artists[i].date.getHours() < today.getHours() 
            */
        ) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortIfTomorrow() {
    const today = new Date()
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getFullYear() == today.getFullYear() &
            artists[i].date.getMonth() == today.getMonth() &
            artists[i].date.getDate() + 1 == today.getDate()
            ) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortIfThisWeek() {
    const today = new Date()
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getFullYear() == today.getFullYear() &
            artists[i].date.getMonth() == today.getMonth() &
            artists[i].date.getDate() >= today.getDate() &
            artists[i].date.getDate() +7 < today.getDate() 
        ) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortIfThisMonth() {
    const today = new Date()
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getMonth() == today.getMonth()
        ) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortIfThisYear() {
    const today = new Date()
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getFullYear() == today.getFullYear()
        ) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortIfNextYear() {
    const today = new Date()
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date.getFullYear() == today.getFullYear() + 1) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortIfInName(input) {
    const name = input
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].title == name) {
            sortedArray.push(artists[i])
        }
    }
}

export function sortByLocation(input) {
    const location = input
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].location == location) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}

export function sortBetweenTwoDates(input1, input2) {
    let sortedArray = []

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].date == location) {
            sortedArray.push(artists[i])
        }
    }
    return sortedArray
}
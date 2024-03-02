//arr = [{title, color, year}]

export function filterCars(arr, word) {
    return arr.filter(item => item.title.toLowerCase().includes(word.toLowerCase()))
}
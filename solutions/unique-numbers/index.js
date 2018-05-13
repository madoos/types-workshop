const numbers = [1, 1, 2, 2, 3, 3, 4, 4]

function unique(numbers) {
    return Array.from(new Set(numbers))
}

const uniqueNumbers = unique(numbers)
console.log(uniqueNumbers)

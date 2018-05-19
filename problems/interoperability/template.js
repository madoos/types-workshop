class Duple {
    constructor(first, second) {
        if (typeof first === typeof second) {
            this.first = first
            this.second = second
        } else {
            throw new Error('the arguments are not the same type')
        }
    }

    static from(iterable) {
        // your implementation
    }

    ['your-implementation']() {
        // your implementation
    }
}

const duple = new Duple('foo', 'baz')
const array = Array.from(duple)
const otherDuple = Duple.from(['foo', 'baz'])

console.log(array)
console.log(otherDuple)
for (let item of duple) {
    console.log(item)
}

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
        const iterator = iterable[Symbol.iterator]()
        const first = iterator.next().value
        const second = iterator.next().value

        return new Duple(first, second)
    }

    *[Symbol.iterator]() {
        yield this.first
        yield this.second
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

Object.prototype.merge = function(src) {
    for (const key of Object.keys(src)) {
        this[key] = src[key]
    }
    return this
}

const a = { a : 'a' }
const b = { b : 'b' }
const c = { c : 'c' }

console.log(a.merge(b).merge(c))

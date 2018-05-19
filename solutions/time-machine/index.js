function timeMachine(target) {
    const states = []
    const storeState = state => states.push(Object.assign({}, state))

    Object.defineProperty(target, 'backInTime', {
        enumerable   : false,
        configurable : false,
        writable     : false,
        value        : () => states.pop()
    })

    target = new Proxy(target, {
        set : (obj, prop, value) => {
            storeState(obj)
            return Reflect.set(obj, prop, value)
        },
        deleteProperty : (obj, prop, value) => {
            storeState(obj)
            return Reflect.deleteProperty(obj, prop)
        }
    })

    return target
}

const example = timeMachine({ state : 'FIRST_STATE' })
example.state = 'SECOND_STATE'
example.state = 'THIRD_STATE'
delete example.state

console.log(example.backInTime())
console.log(example.backInTime())
console.log(example.backInTime())

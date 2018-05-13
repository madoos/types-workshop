const users = new WeakSet()
let __users__ = []

const addUser = () => {
    __users__.push({
        name : Math.random()
            .toString(36)
            .substring(7)
    })

    users.add(__users__[__users__.length - 1])
}

const clearUsers = () => {
    __users__ = []
}

setInterval(addUser, 250)
setInterval(clearUsers, 1000)
setTimeout(() => process.exit(0), 4000)
console.log(true)

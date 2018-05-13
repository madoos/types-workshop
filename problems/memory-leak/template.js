const users = new Set()
let __users__ = []

const addUser = () => {
    __users__.push({
        name : Math.random()
            .toString(36)
            .substring(7)
    })

    users.add(__users__[__users__.length - 1])
    console.log('added 1 user. Total:', users.size)
}

const removeUser = () => {
    const firstUser = users.values().next().value
    users.delete(firstUser)
    console.log('deleted 1 user of', users.size)
}

const clearUsers = () => {
    __users__ = []
    console.log(
        '*************destroy all users in Array ***************',
        __users__.length
    )
    console.log('-------------users in Set----------------', users.size)
}

setInterval(addUser, 250)
setInterval(removeUser, 1000)
setInterval(clearUsers, 2000)

const reporter = new Map()
const users = [{ name : 'Ana' }, { name : 'Eric' }]

function showName(user) {
    console.log(user.name)
    let called = reporter.get(user) || 0
    called++
    reporter.set(user, called)
    return reporter
}

showName(users[0])
showName(users[0])
showName(users[1])
const calledWithAna = reporter.get(users[0]) // => 2

console.log(calledWithAna)

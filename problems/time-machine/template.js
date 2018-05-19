function timeMachine(target) {
    // your implementation
}

const example = timeMachine({ state : 'FIRST_STATE' })
example.state = 'SECOND_STATE'
example.state = 'THIRD_STATE'
delete example.state

console.log(example.backInTime())
console.log(example.backInTime())
console.log(example.backInTime())

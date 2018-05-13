Cuándo usar Set?

```javascript
const usersCreated = new Set()

class User {
  constructor() {
    usersCreated.add(this)
  }

  static instancesCreated() {
    return usersCreated
  }
}

const created = User.instancesCreated().size
```

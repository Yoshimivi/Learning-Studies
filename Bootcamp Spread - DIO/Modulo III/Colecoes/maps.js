function getAdmins(map) {
  let admins = []
  for ([key, value] of map) {
    if (value === 'Admin') {
      admins.push(key)
    }
  }
  return admins
}

const users = new Map()

users.set('Renata', 'Admin')
users.set('Robson', 'User')
users.set('Maria', 'User')
users.set('Carla', 'Admin')
users.set('Cleber', 'User')

console.log(getAdmins(users))

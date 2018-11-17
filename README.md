# graphSQL

## Add user
mutation {
  addUser(id: "1", name: "Dan Abramov", email: "dan@dan.com") {
    id
    name
    email
  }
}

## Get all users
query {
  users {
    id
    name
    email
  }
}

## Get a specific user
query {
  user(id: "2"){
    id
    name
    email
  }
}

## Edit user
mutation {
  editUser(id: "3", name: "Danny Boy Abramov", email: "dan@dan.com") {
    id
    name
    email
  }
}

## Delete user
mutation {
  deleteUser(id: "2") {
    id
    name
    email
  }
}

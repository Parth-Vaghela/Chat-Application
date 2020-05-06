const users = [];

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase()
  room = room.trim().toLowerCase()
  //validate the data
  if(!username || !room){
    return {
      error : 'Username and room are required'
    }
  }
  //check existing user
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username
  })
  //for validate Username
  if(existingUser){
    return {
      error : 'Username is in use'
    }
  }
  //store a user
  const user = { id, username, room };
  users.push(user);
  return { user }
}

//remove a user by socket.id 
const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id
  })
  if(index !== -1 ){
    return users.splice(index, 1)[0];
  }
}

//get user by socket.id
const getUser = (id) => {
  return users.find((user)=> user.id === id )
}

//get a data which users are avilable in room 
const getUsersInRoom = (room) => {
  room = room.trim().toLowerCase()
  return users.filter((user) => user.room === room)
} 

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
}
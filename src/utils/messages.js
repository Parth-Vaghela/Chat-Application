//for a message
const generateMessage = (username, text) => {
  return {
    username,
    text,
    createdAt : new Date().getTime()
  }
}

//for generating locatin message 
const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt : new Date().getTime()
  }
}

module.exports = { generateMessage ,  generateLocationMessage }
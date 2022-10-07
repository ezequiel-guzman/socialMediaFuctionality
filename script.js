var database = [
  {
    username: "eze",
    password: "111",
  }
];

var newsfeed = [
  {
    user: "boddy",
    timeline: "so awesome to learn new things",
  },
  {
    user: "sally",
    timeline: "javascript will be my career.",
  }
];

var userNamePrompt = prompt("what is your user name?");
var passwordPrompt = prompt("what is your password?");

function signin(user,pass) {
  if (user === database[0].username && pass === database[0].password){
    console.log(newsfeed);
  } else {
    console.log("wrong");
  }
}

signin(userNamePrompt, passwordPrompt);
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};

var landscape = [];
function generateLandscape() {
  for (var i = 0; i < 11; i++) {
    var row = [];
    for (var j = 0; j < 11; j++) {
      // Generate a random boolean, skewed more towards false
      var obstacle = Math.random() >= 0.8;
      row.push(obstacle);
    }
    landscape.push(row);
  }
}

generateLandscape();

function turnLeft(rover) {
  console.log("turnLeft was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "E":
      rover.direction = "N";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "W":
      rover.direction = "S";
      break;
    default:
      console.log("Wrong direction value");
  }
}

function turnRight(rover) {
  console.log("turnRight was called!");

  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
    default:
      console.log("Wrong direction value");
  }
}

function moveForward(rover) {
  console.log("moveForward was called");

  switch (rover.direction) {
    case "N":
      if (rover.y > 0 && !landscape[rover.y - 1][rover.x]) {
        rover.y--;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    case "E":
      if (rover.x < 10 && !landscape[rover.y][rover.x + 1]) {
        rover.x++;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    case "S":
      if (rover.y < 10 && !landscape[rover.y + 1][rover.x]) {
        rover.y++;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    case "W":
      if (rover.x > 0 && !landscape[rover.y][rover.x - 1]) {
        rover.x--;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    default:
      console.log("Wrong direction value");
  }

  rover.travelLog.push(rover.x + ", " + rover.y);
  console.log("Rover Travel Log: " + rover.travelLog);
}

function moveBackward(rover) {
  console.log("moveBackward was called");

  switch (rover.direction) {
    case "N":
      if (rover.y < 10 && !landscape[rover.y + 1][rover.x]) {
        rover.y++;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    case "E":
      if (rover.x > 0 && !landscape[rover.y][rover.x - 1]) {
        rover.x--;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    case "S":
      if (rover.y > 0 && !landscape[rover.y - 1][rover.x]) {
        rover.y--;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    case "W":
      if (rover.x < 10 && !landscape[rover.y][rover.x + 1]) {
        rover.x++;
      } else {
        console.log("Obstacle in the way");
      }
      break;
    default:
      console.log("Wrong direction value");
  }

  rover.travelLog.push(rover.x + ", " + rover.y);
  console.log("Rover Travel Log: " + rover.travelLog);
}

function commandList(rover, commands) {
  var regexCheck = new RegExp("[^rlfb]");

  if (regexCheck.exec(commands)) {
    console.log(
      "Command list contains invalid character. Only r, l, b and f are allowed."
    );
  } else {
    for (var i = 0; i < commands.length; i++) {
      switch (commands[i]) {
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackward(rover);
          break;
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        default:
          console.log("Wrong command");
      }
    }
  }
}

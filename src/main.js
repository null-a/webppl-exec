var child_process = require('child_process');

module.exports = {

  exec: function(command) {
    return child_process.execSync(command).toString();
  }

};

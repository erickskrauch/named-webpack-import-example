const test1 = require('./test1.png!=!my-loader!');

/**
 * I'm expecting a link to the generated image.
 * The file will be located in the path assets/test1.png,
 * according to the loader rules for png.
 */
console.log(test1);

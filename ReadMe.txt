Steps I followed for this demo :
Reference Source : https://medium.com/nerd-for-tech/webpack-react-optimised-from-scratch-da8f75024ba4 

# with -y we are getting all default value
1. npm init -y


/*  command output will look like...

Wrote to /home/user/Documents/November21/webpack-practise/package.json:
{
  "name": "webpack-practise",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


*/

# installing as dev dependencies as we only require them for development mode

2. npm install webpack webpack-cli --save-dev
/*
dev dependency tree will look
{
 "devDependencies": {
     "webpack": "^5.23.0",
     "webpack-cli": "^4.5.0"
 }
}
*/


3.let's add a script to our package.json
"scripts": {
    "dev": "webpack --mode development"
  }

4. npm run dev
o/p :

ERROR in main Module not found: Error: Can’t resolve ‘./src’
What happened?
we have seen this error because webpack is looking for JS files inside the src folder in the root. but we haven’t created anything yet.
Let's create our basic folder structure.

5. >mkdir src
  > echo 'console.log("Hey Webpack!")' > src/index.js

#run again

6. > npm run dev

#you will see a folder 🗂 is created with name dist and a file with name main.js is created,
#which is basically a bundle of your app. (src/index.js)
#Let’s tune our webpack
#Although we have created our bundle and that is not enough. We want much more from webpack, and webpack is capable of doing many better things.
#let's create a configuration file that will tell webpack to do things precisely.

7. > touch webpack.config.js

#Webpack is written in JavaScript and runs on top of a headless JavaScript environment such as Node.js. In this file, you’ll need at least a module. exports, which is the Common JS export for Node.js:

8. module.exports = {
}
#adding entry point
#the entry point in the configuration file lets chose a specific file as an entry point instead of the default.

9. module.exports = {
 entry: { index: path.resolve(__dirname, "src", "index.js") }
 // or
 entry: path.resolve(__dirname, "src", "index.js")
 
.
.
.
// other entities
}

#Adding output
#same as entry point we can specify where webpack should create bundle than choosing default
10. module.exports = {
// other entities
.
.
output : {
 path: path.resolve(__dirname, "dist"),
 filename: "bundle.js"
}
.
.
}

Add Modern javascript feature loader
add Modern javascript feature loader
We are good with our bundle but what if we want to work on modern Js (ES6+) but not all browsers and not even node.js environment supports all modern JS.
what if we can use modern Js in our project and create a bundle with supportive Js which can run on all platforms.
Sounds great!
Let’s add a loader for that.

11. > npm i @babel/core babel-loader @babel/preset-env --save-dev

lets create babel.config.json

12. > touch babel.config.json
and add some configuration to it

13. {
  "presets": [
    "@babel/preset-env"
  ]
}

lets add babel-loader babel.config.json
module.exports = {
// other entities
.
.
.
module : {
 rules: [
   {
    test: /\.js$/,
    exclude: /node_modules/,
    use: ["babel-loader"]
   }
  ] 
}
.
.
.
}
With the above setup, we are good to go with any modern JS Project, But this is not very useful yet as we crave for more let's explore a bit more into webpack.

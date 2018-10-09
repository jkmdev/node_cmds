<!--
# Julia's Node Commands

Simple command line applications for various use cases, like note taking, development environment start up, etc. Written in node.js.

spawn -> creates new terminal window from current window

## Installing / Getting started

This application was developed on and for my fedora linux OS. This application will not work on Windows without some tweaking of your own.

If you haven't already done so, install the latest release of node (not the stable version, but the latest), and make sure you node and npm are working by running:

```shell
node -v
npm -v
```

To install and use this application, in the root of this project run:

```shell
npm install
npm link
```

Running `npm link` should ensure the commands run globally on your system.

### Initial Configuration

Some projects require initial configuration (e.g. access tokens or keys, `npm i`).
This is the section where you would document those requirements.

## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/awesome-project.git
cd awesome-project/
npm install
```

And state what happens step-by-step.

## Features

Working commands:

* quicknote <some text> : sends inputted text to a QUICKNOTE.txt in your Documents folder.

//opens default workspace for javascript-based projects
//user is prompted to select the project they want to on
//a text editor and two command line windows will then open the project
//when atom closes, the terminals close too
//assumes a Project folder exists in the user's directory
  //in the future the project folder can be set on the command line
//in the future can take arguments that change programs to be opened
//really needs error handling to be implemented

#### Argument 1
Type: `String`  
Default: `'default value'`

State what an argument does and how you can use it. If needed, you can provide
an example below.

Example:
```bash
awesome-project "Some other value"  # Prints "You're nailing this readme!"
```

#### Argument 2
Type: `Number|Boolean`  
Default: 100

Copy-paste as many of these as you need.

## Contributing

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.


## Licensing

The code in this project is licensed under MIT license. -->

# Metadefender-Opswat

This program was developed in order to scan a file against the metadefender.opswat.com API.

## Prerequisites

In order for the project to work, you must make sure you have the following installed on your computer:

- Node.js
- TypeScript

Also, you must change the following in the config.ts file:

- API_KEY with the one obtaine dafter registering an account to metadefender.opswat.com
- FILE_PATH with the path to the file that you want to scan

## Installation steps

1. Clone the repository to your computer:
 
`git clone https://github.com/PaulM296/Metadefender-Opswat.git`

3. Navigate to project's root directory.
4. Open a terminal and then run the following command in order to install the necessary dependencies:

`npm install`

## Compilation steps

In order to compile the TypeScript code into JavaScript code, the following command must be used:

  `npm run build`

## Starting the program

Lastly, in order to start the API server, use the following command:

`npm start`

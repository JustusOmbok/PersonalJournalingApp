# Personal Journaling App - Mobile

## Overview
This is the frontend for the Personal Journaling App, built with React Native.

## Prerequisites
Node.js (>= 14.x)
React Native
TypeScript
Android/iOS development environment setup (Android Studio/Xcode)

## Getting Started
### Clone the Repository

   ##### git clone https://github.com/yourusername/PersonalJournalingAppFrontend.git
   ##### cd PersonalJournalingAppFrontend

### Install Dependencies

   npm install

### Setup Environment Variables

      ##### Create a .env file in the root directory and add the following:

REACT_APP_API_URL=http://localhost:5000/api

### Run the Application

#### Android
npx react-native run-android

### Run Tests
   ##### npm test
   ##### Available Scripts
   ##### npm start: Starts the Metro Bundler.
   ##### npm test: Runs the test suite.
   ##### npm run android: Builds and runs the app on an Android device/emulator.

## Project Structure
   ##### src/: Contains the source code
   ##### components/: Contains React components
   ##### screens/: Contains screen components
   ##### App.tsx: Main app component
   ##### index.ts: Entry point of the application

## API Usage
### User Endpoints
#### Register User

   ##### URL: ${REACT_APP_API_URL}/users/register
   Method: POST
   Body:
      {
      "username": "string",
      "password": "string"
      }
   Response:
      {
      "message": "User registered successfully"
      }

#### Login User

   ##### URL: ${REACT_APP_API_URL}/users/login
   Method: POST
   Body:
      {
      "username": "string",
      "password": "string"
      }
   Response:
      {
      "token": "string"
      }

#### Get User Profile

   ##### URL: ${REACT_APP_API_URL}/users/profile
   Method: GET
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Response:
         {
         "id": "number",
         "username": "string"
         }

### Entry Endpoints
#### Create Entry

   ##### URL: ${REACT_APP_API_URL}/entries
   Method: POST
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Body:
         {
         "title": "string",
         "content": "string",
         "category": "string",
         "date": "string"
         }
   Response:
         {
         "message": "Entry created successfully"
         }

#### Get Entries
   ##### URL: ${REACT_APP_API_URL}/entries
   Method: GET
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Response:
         [
         {
            "id": "number",
            "title": "string",
            "content": "string",
            "category": "string",
            "date": "string"
         }
         ]

#### Get Entry by ID

   ##### URL: ${REACT_APP_API_URL}/entries/:id
   Method: GET
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Response:
         {
         "id": "number",
         "title": "string",
         "content": "string",
         "category": "string",
         "date": "string"
         }

#### Update Entry
   ##### URL: ${REACT_APP_API_URL}/entries/:id
   Method: PUT
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Body:
         {
         "title": "string",
         "content": "string",
         "category": "string",
         "date": "string"
         }
   Response:
         {
         "message": "Entry updated successfully"
         }

#### Delete Entry
   ##### URL: ${REACT_APP_API_URL}/entries/:id
   Method: DELETE
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Response:
         {
         "message": "Entry deleted successfully"
         }

#### Get Entry Summary
   ##### URL: ${REACT_APP_API_URL}/entries/summary/:period
   Method: GET
   Headers:
         {
         "Authorization": "Bearer <token>"
         }
   Params:
         period: daily, weekly, monthly
   Response:
   
## License
This project is licensed under the MIT License.
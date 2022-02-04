# Technical test ZX Ventures API
_Technical test for ZX Ventures about city information REST API_

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

# API Countries
## Get Suggestion cities

**URL: https://9m514waznf.execute-api.sa-east-1.amazonaws.com/dev/api**
* **URL:** /search/
* **PARAMS:** q : string
* **Method:** GET

### Response
```bash
 {
    "search": [
        {
            "name": "Washington, United States",
            "latitude": "38.89511",
            "longitude": "-77.03637",
            "score": 49.54639434814453
        },
        {
            "name": "Columbia River Gorge, United States",
            "latitude": "45.7047",
            "longitude": "-121.7917",
            "score": 30.28864097595215
        },
        {
            "name": "Puget Sound Region, United States",
            "latitude": "47.833",
            "longitude": "-122.435",
            "score": 30.28864097595215
        },
        {
            "name": "Olympia, United States",
            "latitude": "47.03787",
            "longitude": "-122.9007",
            "score": 28.61639976501465
        }
    ]
}
```

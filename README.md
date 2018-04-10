# [React](https://reactjs.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) [![Coverage Status](https://img.shields.io/coveralls/facebook/react/master.svg?style=flat)](https://coveralls.io/github/facebook/react?branch=master) [![CircleCI Status](https://circleci.com/gh/facebook/react.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/facebook/react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://reactjs.org/docs/how-to-contribute.html#your-first-pull-request)

# Heart Rate Viewer

Developed by: Souhaila Noor

Course: Medical Design Software

I created a webpage that pulls information from a database by using React-js. This webpage uses material-ui components. 
This repository builds on an [heart rate database repository](https://github.com/souhaila30/heart_rate_databases_introduction) where the database is created and populated by using flask and mongodb. 

Steps:
1. npm install
2. Install dependencies in requirements.txt from [heart rate database repository](https://github.com/souhaila30/heart_rate_databases_introduction) in a virutal environment
3. Run web_server.py in flask from [heart rate database repository](https://github.com/souhaila30/heart_rate_databases_introduction) using host='0.0.0.0'
4. Run mongodb on Docker 
5. npm start run

After you complete these steps, you should see this page in your browser. 

<img src="hr_page.png" height="500px"/> 

After you enter an email address associated with a user in the database, the table and chart will populate with the heart rate times and heart rates measurements.

<img src="hr_table.png" height="500px"/> 

<img src="hr_chart.png" height="500px"/> 

# Heart Rate Viewer
[React](https://reactjs.org/) 

Developed by: Souhaila Noor

Course: Medical Design Software

I created a webpage that pulls information from a database using React-js. This webpage uses material-ui components. 
This repository builds on an [heart rate database repository](https://github.com/souhaila30/heart_rate_databases_introduction) where the database is created and populated using flask and mongodb. 

Steps:
1. npm install
2. Install dependencies in requirements.txt from [heart rate database repository](https://github.com/souhaila30/heart_rate_databases_introduction) in a virutal environment
3. Run web_server.py in flask from [heart rate database repository](https://github.com/souhaila30/heart_rate_databases_introduction): FLASK_APP=web_service.py flask run --host='0.0.0.0'

4. Run mongodb on Docker: docker run -v $PWD/db:/data/db -p 27017:27017 mongo
5. npm start run

After you complete these steps, you should see this page in your browser. 

<img src="hr_page.png" height="500px"/> 

After you enter an email address associated with a user in the database, the table and chart will populate with the heart rate times and heart rates measurements.

<img src="hr_table.png" height="500px"/> 

<img src="hr_chart.png" height="500px"/> 

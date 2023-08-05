# Dormed-Django

Dormed-Django is a full-stack web application built with Django and React. The application was developed as a multi-language platform for a sanatorium in Busko-Zdrój, Poland. It is designed to handle a variety of services including room reservations, treatment scheduling, and general information dissemination.

## Technologies Used

The following technologies were used in the development of this application:

- Python
- Django
- React
- MySQL
- Django REST API
- HTML
- CSS
- React i18n

The application's Front-End was developed using React while the Back-End was developed using Python and Django. Django REST API was used to fetch data from the server, with the data being stored in a MySQL database. The site was then deployed on the Pythonanywhere service.

The website supports three languages: Ukrainian, English, and Polish. Front-End internationalization is handled using React i18n, and Back-End translation is handled with Django model-translation.

Additional features and technologies include GoogleMap API, emailJS, and React-Bootstrap for UI.

## Installation

To get the project up and running, follow these steps:

1. Clone the repository:
```
git clone https://github.com/DemetrPI/dormed-django.git
```

2. Install the required dependencies:

For the backend:

Navigate into the backend directory and create a virtual environment:
```
cd backend
python3 -m venv venv
```
Activate the virtual environment:
```
source venv/bin/activate
```
Install the required python packages:
```
pip install -r requirements.txt
```

For the frontend:

Navigate into the frontend directory and install the required npm packages:
```
cd ../frontend
npm install
```

3. Run the application:

For the backend:
```
python manage.py runserver
```

For the frontend:
```
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

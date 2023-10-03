# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    pkg-config \
    gcc \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*
    

# Install Yarn
RUN npm install -g yarn

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt /app/
COPY .env /app/
COPY manage.py /app/

# Install Python dependencies
RUN pip install -r requirements.txt

# Copy the rest of your project files into the container
COPY dormed/ /app/dormed/
COPY dormed_main/ /app/dormed_main/
COPY locale/ /app/locale/
COPY media/ /app/media/
COPY frontend/ /app/frontend/

# Build the React frontend using Yarn
WORKDIR /app/frontend
RUN yarn install
RUN yarn build

# Switch back to the project root directory
WORKDIR /app

# Expose the port where Django will run
EXPOSE 8000

# Start Django development server
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "dormed.wsgi:application"]

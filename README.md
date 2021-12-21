# IP-Address-Management-Solution
This is a technical test for a job application for a Full Stack Developer at Virtual Staff 365

## How to Set Up



1. Clone the Git Repository:

   Run ```https://github.com/aseer154/IP-Address-Management-Solution.git```

2. cd into the project directory:

   Run ```cd IP-Address-Management-Solution```

## Backend
3. cd into the "Backend" folder:
   Run ```cd api```

4. Copy .env.example file and rename as .env;
   Alternatively, run ```cp .env.example .env```

5. Edit database credentials in your newly generated/created .env file

6. Run ```composer install``` to install all libraries and dependencies in the composer.lock file

7. Run ```php artisan key:generate``` to set the APP_KEY value in the .env file

8. Having created a database, and specifying the same with the right credentials in your .env file, run ```php artisan migrate``` to create the 

9. Run ```php artisan passport:install``` to create clients for Laravel Passport

10. Run ```php artisan serve``` to run the PHP development server. Alternatively, you can run your project with XAMPP or WAMP.

## Frontend

10. cd into the "Frontend" folder:
    Run ```cd client```

11. Run ```npm install``` to download all packages and dependencies needed for our client

12. While making sure that the API (Laravel) Server is up and running, run ```npn start``` to start your react application
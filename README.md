
# Euvic Recruitment Task
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


This is my approach to the challenge presented before me by Euvic Recruitment Team

My solution includes implementation of following features:
- Frontend and Backend talk over API
- Project is fully containerized with Docker Compose and Dockerfiles. 
- After startup our frontent and API will be available under http://localhost:8080 and http://localhost/api/count respecitvely.
- Servers levarage ease of scalability and are load balanced with Nginx
- An exemplary mock of cerfication retrival is shown using automated certbot with scheduled updates 
- Whole solution is available here with simple CI/CD.  


## Run Locally

Clone the project

```bash
  git clone https://github.com/irekkosek/euvic_task.git
```

Go to the project directory

```bash
  cd my-project
```

Start Compose Services 

```bash
  docker compose up
```



## API Reference

#### Get counter state

```http
  GET /api/count
```









## Feedback

If you have any feedback, please reach out to me at irekkosek.IK@gmail.com


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Running Tests

To run tests, create a pull request

```bash
  gh pr
```


## Features

- Fully Containerized
- Linted with Hadolint
- Images built and deployed to ghcr.io
- Supports simple CI/CD
- Loadbalanced with Nginx 


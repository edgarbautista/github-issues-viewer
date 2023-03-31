# GitHub Issues Viewer

## How to run

#### Install NODE.JS (Current version v14.4.0 - but latest should be fine)
https://nodejs.org/en/download/

#### Open the command line or terminal. Go to the project directory and run:
```
yarn run dev
```
## RUN with Docker

### Install docker
https://docs.docker.com/get-docker/

#### Build the image
```
docker build -t github_issues_viewer . 
```

#### Run the container
```
docker run --name github_issues_viewer -p 3000:3000 -p 3001:3001 -p 5001:5001 -d github_issues_viewer
```
Check http://localhost:3000

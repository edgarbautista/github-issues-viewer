# GitHub Issues Viewer

![githubviewer 2023-03-31 10_35_46](https://user-images.githubusercontent.com/36816412/229158357-dae3ce2a-4860-45af-90bd-d9330e3c9b69.gif)

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

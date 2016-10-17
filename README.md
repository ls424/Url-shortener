# Url-shortener
##Introduction
This is a Mean-stack(MongoDB Express AngularJS Node.JS) web application currently deployed locally to deliver URL shortening service. It takes a regular long URL as input and returns a long URL as an output. When users type a short URL which is generated before in the browser, they will be directed to the website that the original long url points to. All the data pairs shortUrl:longUrl is stored in mongodb and will be migrated to Apache Cassandra later to extend scalability. Besides, the service provides the REST APIs that other apps and services can access data by sending HTTP requests.
The whole web application is packaged in Docker which is easy to be deployed on different machines.

##How to deploy locally 

###On windows:

####Prepared work before deployment
In this project, we are using Mlab which provideds cloud service of MongoDB. So you should go to mlab to register for a account and set up a mongodb first. On your main page, you could find the following instruction:
     To connect using a driver via the standard MongoDB URI, copy and paste the URI i am using in my code which is under the folder of app/services/urlServices.js
#####Step 1 Configure your Docker, Make sure you have installed Docker on your machine and the default docker-machine is running.
     default   *        virtualbox   Running   tcp://192.168.99.100:2376           v1.12.2
#####Step 2  Build your project to a docker image
     docker build -t lin/tinyurl .
#####Step 3 Start your docker container
     docker run --name tinyCon -p 3000:3000 -d lin/tinyurl
#####Step 4 Start Nginx and redis
     docker docker-compose up --build
#####Step 5 Open your browser and type in(192.168.99.100 is the ip address of the docker-machien that the container is running in, it might varies when your local computer geenrate different ip address, we are listening at port of 80)
     192.168.99.100:80
     
     
####On Linux:
TODO

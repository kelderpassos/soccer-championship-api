FROM node:16.14-alpine  
# create the necessary image to run the application

WORKDIR /app-backend 
# stablish a folder inside the container to receive the files

COPY package* ./
# copy to the container the everything with package in the name and paste to the root folder

RUN npm install
# run the necessary command to install every dependency

COPY . .
# copy all our project to the container

EXPOSE 3001
#expose the port where the container will run

RUN npx tsc
# compile the index

CMD [ "npm", "start" ]
# starts the application

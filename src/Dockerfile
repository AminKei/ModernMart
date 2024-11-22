# Step 1: Use an official Node.js runtime as a parent image  
AS build  
FROM node:14
# Step 2: Set the working directory  
WORKDIR /app  

# Step 3: Copy package.json and package-lock.json (if available)  
COPY package*.json ./  

# Step 4: Install the app dependencies  
RUN npm install  

# Step 5: Copy the rest of the application source code  
COPY . .  

# Step 6: Build the React application for production  
RUN npm run build  

# Step 7: Start a new stage from a lightweight web server  
FROM nginx:alpine  

# Step 8: Copy the build files from the previous stage to the Nginx web server  
COPY --from=build /app/build /usr/share/nginx/html  

# Step 9: Expose the port that the web server will run on  
EXPOSE 80  

# Step 10: Command to run Nginx  
CMD ["nginx", "-g", "daemon off;"]
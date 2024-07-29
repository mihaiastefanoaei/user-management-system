# Stage 0: Build Stage
FROM node:20-alpine as dev

WORKDIR /app

COPY package.json .

RUN npm install

CMD [ "npm", "start" ]

# Stage 1: Build Stage
FROM node:20-alpine as build

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

#RUN npm run build

# Stage 2: Production Stage
FROM node:20-alpine

ENV NODE_ENV=production

# Install runtime dependencies
RUN apk add --no-cache curl shadow

# Create a non-root user and set permissions
RUN groupadd -r customgroup && useradd -r -g customgroup customuser
ENV HOME="/home/customuser"
RUN mkdir -p ${HOME} && chown -R customuser:customgroup ${HOME}

WORKDIR ${HOME}/app

# Copy only the necessary files from the build stage
COPY --from=build /app ./

RUN npm install -g server

RUN chown -R customuser:customgroup ${HOME}

USER customuser



CMD ["serve", "-s", "build"]

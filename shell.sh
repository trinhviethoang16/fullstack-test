# Install and config environment for project
apt-get update
apt-get install -y nginx certbot python3-certbot-nginx net-tools docker docker-compose fontconfig openjdk-17-jre-headless gnupg curl

# Jenkins config
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
apt-get update
apt-get install -y jenkins

# MongoDB config
apt-get install -y gnupg curl
curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt-get update
apt-get install -y mongodb-org
systemctl start mongod
apt-get install -y mongodb-mongosh

# Development enviroment config
cat <<EOL > /etc/nginx/sites-available/develop.conf
server {
    listen 9000;
    location / {
        proxy_pass http://127.0.0.1:9000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOL
ln -s /etc/nginx/sites-available/develop.conf /etc/nginx/sites-enabled/

# Staging enviroment config
cat <<EOL > /etc/nginx/sites-available/staging.conf
server {
    listen 9500;
    location / {
        proxy_pass http://127.0.0.1:9500;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOL
ln -s /etc/nginx/sites-available/staging.conf /etc/nginx/sites-enabled/

# Backend enviroment config
cat <<EOL > /etc/nginx/sites-available/backend.conf
server {
    listen 9001;
    location / {
        proxy_pass http://127.0.0.1:9001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
EOL
ln -s /etc/nginx/sites-available/backend.conf /etc/nginx/sites-enabled/

# Docker config
usermod -aG docker $USER
usermod -aG docker jenkins
newgrp docker
chmod 666 /var/run/docker.sock

# Start services
systemctl restart docker.service containerd.service jenkins.service

docker stop frontend
docker rm frontend
docker stop backend
docker rm backend

# Development enviroment
docker pull trinhviethoang16/frontend:develop
docker run -d -p 9000:3000 trinhviethoang16/frontend:develop

# Staging environment
docker pull trinhviethoang16/frontend:lastest
docker run -d -p 9500:3000 trinhviethoang16/frontend:latest

# Backend environment
docker pull trinhviethoang16/backend:lastest
docker run -d -p 9001:3001 trinhviethoang16/backend:latest

# # Load environment variables from .env file
source "/vagrant/.env"

# # Dump and Restore data
DUMP_DIR="/vagrant/data/dump/"
DUMP_DATE=`date +%Y-%m-%d`
mongodump --uri=$MONGO_CONNECTION_STRING --db fullstack-test --out "$DUMP_DIR/User_$DUMP_DATE"
# mongorestore --db fullstack-test "$DUMP_DIR/User_$DUMP_DATE"
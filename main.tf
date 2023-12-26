terraform {
  required_providers {
    digitalocean = {
      source = "digitalocean/digitalocean"
      version = "2.34.0"
    }
  }
}

resource "digitalocean_droplet" "fullstack-test" {
  image  = "ubuntu-22-04-x64"
  name   = "fullstack-test"
  region = "sgp1"
  size   = "s-1vcpu-1gb"
  ssh_keys = [
    digitalocean_ssh_key.default.fingerprint
  ]

  provisioner "remote-exec" {
    inline = [
      "sudo apt-get update",
      "sudo apt-get install -y ca-certificates curl gnupg",
      "sudo install -m 0755 -d /etc/apt/keyrings",
      "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg",
      "sudo chmod a+r /etc/apt/keyrings/docker.gpg",
      "echo \"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo \"$VERSION_CODENAME\") stable\" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null",
      "sudo apt-get update",
      "sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin",
      "sudo apt-get install -y nginx certbot python3-certbot-nginx net-tools",
      "docker pull trinhviethoang16/frontend-amd64:latest",
      "docker pull trinhviethoang16/backend-amd64:latest",
      "echo 'server { listen 80; location / { server_name: 68.183.188.125; proxy_pass http://127.0.0.1:3000; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } }' | sudo tee /etc/nginx/sites-available/production.conf",
      "sudo ln -s /etc/nginx/sites-available/production.conf /etc/nginx/sites-enabled/",
      "echo 'server { listen 80; location / { server_name: 68.183.188.125; proxy_pass http://127.0.0.1:3001; proxy_set_header Host $host; proxy_set_header X-Real-IP $remote_addr; } }' | sudo tee /etc/nginx/sites-available/backend.conf",
      "sudo ln -s /etc/nginx/sites-available/backend.conf /etc/nginx/sites-enabled/",
      "sudo docker run -d -p 3000:3000 trinhviethoang16/frontend-amd64:latest",
      "sudo docker run -d -p 3001:3001 trinhviethoang16/backend-amd64:latest"
    ]

    connection {
      type        = "ssh"
      user        = "root"
      private_key = file("~/.ssh/id_rsa")
      host        = self.ipv4_address
    }
  }
}

resource "digitalocean_ssh_key" "default" {
  name       = "default"
  public_key = file(".ssh/id_rsa.pub")
}

provider "digitalocean" {
  token = var.do_token
}
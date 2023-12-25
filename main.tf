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
}

resource "digitalocean_ssh_key" "default" {
  name       = "default"
  public_key = file("~/.ssh/id_rsa.pub")
}

provider "digitalocean" {
  token = var.do_token
}
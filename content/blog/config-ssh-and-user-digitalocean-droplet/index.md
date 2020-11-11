# Config SSH and User in a DigitalOcean Droplet

## Setup SSH and User in Server

### Create ssh in the local machine

```jsx
ssh-keygen -t rsa
```

- It will generate an .pub(public) and a private key files

### Create an ubuntu user

```jsx
adduser dev
```

### Give super user access to the user

```jsx
usermod -aG sudo dev
// check group of the user using
id dev
```

### Change it to the new user

```jsx
sudo su dev
```

### Create SSH folder with the permission rwx- -

```jsx
mkdir ~/.ssh
chmod 700 ~/.ssh
```

### Create a file with the public key generated

```jsx
vim authorized_key
// paste the public key previously generated in local machine
// save the file
// change the permission of the file to rw - -
chmod 600 ~/.ssh/authorized_key
```

### Copy the pvt key to the server using ssh-copy-id

```jsx
ssh-copy-id -i ~/location_to_the_key dev@hostname
```

### Access using the key

```jsx
ssh -i ~/location_to_the_key dev@hostname
// It will ask for passphrase if you have created during ssh-key-generation
```

### Remove Password Login

```jsx
sudo vim /etc/ssh/sshd_config
// Change PermitRootLogin no
// Change PasswordAuthenication no
```

### Reload SSHD config

```jsx
sudo systemctl reload sshd
```

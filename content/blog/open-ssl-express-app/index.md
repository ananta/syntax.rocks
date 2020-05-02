---
title: "Add OpenSSL to Express App"
tags: ["dev-ops"]
published: true
date: "2020-05-03"
---

---

> Steps to generate a self-signed certificate using OpenSSL and integrate to your existing Express.js app

## 1. Generate Key & Certificate

Your system might already have openssl installed. If not, just install it according to your system. You can check out official docs @ [OpenSSL](https://www.openssl.org/source/)

Once OpenSSL is installed on your system, run this command to generate your certificate:

```
openssl req -nodes -new -x509 -keyout server_ssl.key -out server_ssl.cert
```

You will be prompt with different questions:

```
Generating a 1024 bit RSA private key
...........++++++
.........++++++
writing new private key to 'server_ssl.key'
-----
You are about to be asked to enter information that will be incorporated into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:
```

Then your state or province:

```
State or Province Name (full name) [Some-State]:
```

...your locality name:

```
Locality Name (eg, city) []:
```

...your organization name:

```
Organization Name (eg, company) [Internet Widgits Pty Ltd]:
Organizational Unit Name (eg, section) []:
```

You can leave all these as default.

Remember to set this to `localhost`:

```
Common Name (e.g. server FQDN or YOUR name) []: localhost
```

...and your email address:

```
Email Address []:
```

Now you will have 2 files:

- `server_ssl.cert`
- `server_ssl.key`

## 2. Add Certificates To Your Express App

I will be using a simple HelloWorld express app.

```
const https = require('https')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express')
})

https.createServer({}, app).listen(4000, () => {
  console.log('Listening...')
})
```

Add the certificates to your express app.

```
const fs = require('fs')
const https = require('https')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Express')
})

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(4000, () => {
  console.log('Listening...')
})
```

Now visit https://localhost:4000 and you should see your certificate.

Since it is a self generated certificate, `Chrome will tell us that the certificate is invalid`. But the HTTPS connection will still work!

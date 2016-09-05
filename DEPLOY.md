## Server preparations

Install Node & NPM

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

Install global NPM packages

```bash
npm install bower -g
npm install pm2 -g

mkdir ~/www/shared
```

```bash
shipit production deploy
```

## PM2 config:
```js
{
  "apps": [{
    "name": "app",
    "script": "./app.js",
    "cwd": "/home/user/www/current",
    "node_args": "--harmony"
  }]
}
```

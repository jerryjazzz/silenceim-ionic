## Server preparations

```bash
sudo apt-get install nodejs
sudo apt-get install nodejs-legacy # symlink
sudo apt-get install npm

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

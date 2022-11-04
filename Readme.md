## uses node v6.9.0

## edit config.js

## npm start --production

# NODE_ENV=production pm2 start /root/ghost-blog/index.js --name "ghost"

# NGINX setup for port 80 multiple sites

1. sudo systemctl start nginx
2. sudo systemctl status nginx
3. sudo systemctl enable nginx  (startup)
4. vim /etc/nginx/sites-enabled/default  and add the server config there:
server {
	listen 80;
	listen [::]:80;
	server_name oldblog.muscalu.net;
	location / {       
		proxy_pass http://127.0.0.1:3001/;
	}
}
server {
	listen 80;
	listen [::]:80;
	server_name cristian.muscalu.net;
	location / {       
		proxy_pass http://127.0.0.1:3000/;
	}
}
5. done

# MyIP - ifconfig.co copycat

## Docker

Demo available at Stenstromen/myip. (linux/arm64)

```
docker run -d --rm -p 80:8080 stenstromen/myip:latest OR \
docker run -d --rm -p 80:8080 -e "FORWARDEDFOR=yes" stenstromen/myip:latest (respond with X-Real-IP header instead of source IP)

(IPv6, Docker Linux only)
docker run -d --rm -p [::1]:80:8080 stenstromen/myip:latest OR \
docker run -d --rm -p [::1]:80:8080 -e "FORWARDEDFOR=yes" stenstromen/myip:latest (respond with X-Real-IP header instead of source IP)

curl http://localhost/readme
```

### Roll your own

Clone
```
git clone https://github.com/Stenstromen/myip.git
```

Build
```
docker build -t myip myip/.
```

Run
```
docker run -d --rm -p 80:8080 myip OR \
docker run -d --rm -p 80:8080 -e "FORWARDEDFOR=yes" myip (respond with X-Real-IP header instead of source IP)

(IPv6, Docker Linux only)
docker run -d --rm -p [::1]:80:8080 myip OR \
docker run -d --rm -p [::1]:80:8080 -e "FORWARDEDFOR=yes" myip (respond with X-Real-IP header instead of source IP)
```

Test
```
curl http://localhost/readme
```

## Quickstart
```
Quickstart:

GET
/readme     - This Readme!
/           - Request IP
/agent      - Request User-Agent
```

## Todo

## Done
* Implement basic Node.JS Express MVC App
* Write print IP controller
* Create Dockerfile
* IPv6 Support
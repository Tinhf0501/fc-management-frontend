# fc-management-frontend

## Run With Docker
[Open Browser](http://localhost:4200).
```
## Dev ENV
docker build -t fc-management -f Dockerfile.dev .
docker run --rm -name web -p 4200:4200 -d fc-management
```

```
## Production ENV
docker build -t fc-management -f Dockerfile.prod --target runner .
docker run -name web-prod -p 4200:80 -d fc-management
```

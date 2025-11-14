## Build Docker

- `docker run -p 4173:4173 travelie-dashboard`

## Change port dynamically

- `docker run -e PORT=8080 -p 8080:8080 travelie-dashboard`

## For Development

- Live-reload dev mode inside Docker

```bash
    docker build -f Dockerfile.dev -t travelie-dev .
    docker run -it -p 5173:5173 -v $(pwd):/app travelie-dev
```

## Get and Save Project Tree

- `tree -I ".vscode|temp|.git|node_modules|dist" > project-tree.txt`

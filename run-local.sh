#!/bin/sh

# Install http-server
npm install http-server -g

# Run local server, enabling CORS headers and disabling caching
http-server -p 3000 --cors -c-1

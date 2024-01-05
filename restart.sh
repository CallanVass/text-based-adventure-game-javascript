#!/bin/bash

# Check if main.js file exists
if [ -f main.js ]; then
    echo "Running main.js..."
    node main.js
else
    echo "main.js file not found. Skipping execution."
fi
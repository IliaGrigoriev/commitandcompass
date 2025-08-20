#!/bin/bash

rm -rf temp-vite/
mkdir temp-vite
cd temp-vite

# Create Vite React project
npm create vite@latest . -- --template react

# Force React 18 before installing anything else
npm install react@18.2.0 react-dom@18.2.0

# Install other dependencies
npm install @vitejs/plugin-react-swc d3 react-router-dom react-syntax-highlighter npm install


# Copy necessary files
cp -r ./node_modules ../
cp package.json ../
cp package-lock.json ../

# Clean up
cd ..
rm -rf temp-vite/


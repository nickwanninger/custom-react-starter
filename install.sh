#!/bin/bash

read -p "Project Name: "  projectName
echo "Creating React starter project named $projectName"

git clone https://github.com/nickwanninger/custom-react-starter.git $projectName 
cd $projectName
rm -rf .git/ 
sudo npm install



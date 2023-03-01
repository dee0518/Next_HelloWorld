#!/bin/bash
REPOSITORY=/home/ubuntu/deploy 

cd $REPOSITORY

sudo yarn install 

sudo npx pm2 reload all 
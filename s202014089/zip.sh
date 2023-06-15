#!/bin/bash

studentNo=202014089

time=`date +"%H%M"`
fileName=s${studentNo}-${time}.tgz

tar cvzf ${fileName} --exclude="node_modules" --exclude="*.tgz" *

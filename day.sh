echo "Create advent of code directory for which day?"

read day

echo "Creating directory for day$day..."

DIR=day$day
mkdir $DIR
cd $DIR
echo "const tlib = require('../tlib');" > p1.js
echo "const tlib = require('../tlib');" > p2.js
touch input.txt
touch input2.txt

cd $DIR
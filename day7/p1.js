const tlib = require('../tlib');

//Find all of the directories with a total size of at most 100000
//Then, calculate the sum of their total sizes
const data = tlib.readFile('./input.txt').replace(/\r/g, '').trim().split('\n');

function parse(data) {
  const root = {
    name: '/',
    isDir: true,
    children: [],
    parent: '',
  };

  let cur = root;

  for (const line of data) {
    if (line[0] === '$') {
      const split = line.split(' ');
      let currentCommand = split[1];
      let target = split[2];

      if (currentCommand === 'cd') {
        //change directory
        switch (target) {
          case '/':
            cur = root;
            break;

          case '..':
            cur = cur.parent;
            break;

          default:
            cur = cur.children.find((dir) => dir.isDir && dir.name === target);
            break;
        }
      } else {
        continue;
      }
    } else {
      const split = line.split(' ');
      if (isNaN(split[0])) {
        //directory
        const dirname = split[1];
        const node = {
          name: dirname,
          isDir: true,
          children: [],
          parent: cur,
        };
        cur.children.push(node);
      } else {
        //file
        const fsize = split[0];
        const fname = split[1];

        const node = {
          name: fname,
          size: parseInt(fsize),
          isDir: false,
          parent: cur,
        };
        cur.children.push(node);
      }
    }
  }

  return root;
}

function printTree(node, depth = 0) {
  console.log(
    `${' '.repeat(depth * 2)}- ${node.name} (${
      node.isDir ? 'dir' : `file, size=${node.size}`
    })`
  );
  if (node.isDir) {
    for (const child of node.children) {
      printTree(child, depth + 1);
    }
  }
}

function getSize(node, callback = () => {}) {
  if (!node.isDir) {
    return node.size;
  }
  const size = node.children
    .map((child) => getSize(child, callback))
    .reduce((a, b) => a + b, 0);

  callback(node.name, size);

  return size;
}

//Part 1
const tree = parse(data);

let sum = 0;
getSize(tree, (name, size) => {
  if (size < 100000) {
    sum += size;
  }
});
console.log('Part 1: ' + sum);

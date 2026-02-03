#!/usr/bin/env node

console.log("Welcome to Node CLI Tool");
console.log("Commands:");
console.log("1. unix");
console.log("2. git");
console.log("3. node");

const arg = process.argv[2];

if (arg === "unix") {
  console.log("pwd, ls, cd, mkdir, rm");
} else if (arg === "git") {
  console.log("git init, add, commit, push");
} else if (arg === "node") {
  console.log("node, npm, package.json");
} else {
  console.log("Usage: node index.js unix|git|node");
}
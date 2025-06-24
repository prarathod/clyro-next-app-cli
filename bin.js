#!/usr/bin/env node

const { execSync } = require("child_process");
  const rimraf = require("rimraf");
const path = require("path");
const fs = require("fs");

const projectName = process.argv[2] || "clyro-app";
const repoUrl = "https://github.com/prarathod/clyro-next-app"; // Replace with your repo

console.log(`\n🚀 Creating a new project in: ${projectName}\n`);

try {
  // Clone the repo
  execSync(`git clone ${repoUrl} ${projectName}`, { stdio: "inherit" });

  // Remove .git to detach from original repo
  rimraf.sync(`${projectName}/.git`);

  console.log(`\n✅ Project ${projectName} created successfully!`);
  console.log(`\n👉 cd ${projectName}`);
  console.log("👉 npm install or yarn install");
  console.log("👉 npm run dev or yarn dev\n");
} catch (error) {
  console.error("❌ Something went wrong:", error);
  process.exit(1);
}

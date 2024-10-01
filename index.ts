#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const [_, __, ...args] = process.argv;


if(args.includes('--init')) {


const configContent = `{
  "version": "0.0.2",
  "template": "default"
}`;


const configFile = path.join(process.cwd(), '.lighthouse');
fs.writeFileSync(configFile, configContent);
console.log(`.lighthouse config file created at ${configFile}`);

const repoUrl = 'https://github.com/example/example-repo.git';
const folderName = 'example-folder';
const clonePath = path.join(process.cwd(), folderName);
exec(`git clone --single-branch --branch main ${repoUrl} ${clonePath}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error cloning the repository: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`Folder cloned successfully at ${clonePath}`);
});
}

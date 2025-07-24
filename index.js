#!/usr/bin/env node

import fs from "fs-extra"
import path from "path"
import inquirer from "inquirer"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const templateDir = path.join(__dirname, 'template');

async function init() {

    const { folder } = await inquirer.prompt([
        {
            type: "input",
            name: "folder",
            message: "Enter your project name:",
            default: "my-express-app"
        }
    ])

    const targetDir = path.join(process.cwd(), folder);

    if (fs.existsSync(targetDir)) {
        console.log('❌ Folder already exists. Choose a different name.');
        process.exit(1);
    }

    await fs.copy(templateDir, targetDir);

    console.log(`✅ Express project created in ./${folder}`);

}

init()
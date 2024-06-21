const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

async function syncReadme() {
    const url = 'https://raw.githubusercontent.com/ha1fdan/HetznerCloudExtension/master/README.md';
    const destPath = path.join(__dirname, 'docs/extensions/', 'hetzner.md');

    try {
        const response = await axios.get(url);
        const readmeContent = response.data;

        await fs.outputFile(destPath, readmeContent);
        console.log('README.md successfully synced!');
    } catch (error) {
        console.error('Error syncing README.md:', error);
    }
}

syncReadme();

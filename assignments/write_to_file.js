const fs = require('fs').promises;

async function writeToFile(sample, content) {
  try {
    await fs.writeFile(sample, content, 'utf8');
    console.log('File has been written successfully');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Usage
writeToFile('sample.txt', 'Hello, world!');
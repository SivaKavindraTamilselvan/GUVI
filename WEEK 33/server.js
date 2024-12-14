const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

const folderPath = path.join(__dirname, 'files');

app.get('/create-file', (req, res) => {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    const currentDate = new Date();
    const timestamp = currentDate.toISOString();
    const fileName = `${currentDate.toISOString().replace(/:/g, '-')}.txt`; // Replace `:` to avoid file issues
    const filePath = path.join(folderPath, fileName);

    fs.writeFile(filePath, timestamp, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error writing the file', error: err.message });
        }
        res.status(201).json({ message: 'File created successfully', fileName, filePath });
    });
});

app.get('/get-files', (req, res) => {
    if (!fs.existsSync(folderPath)) {
        return res.status(404).json({ message: 'Files folder does not exist' });
    }

    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading the folder', error: err.message });
        }

        const txtFiles = files.filter(file => path.extname(file) === '.txt');
        if (txtFiles.length === 0) {
            return res.status(200).json({ message: 'No .txt files found', files: [] });
        }

        res.status(200).json({ message: 'Text files retrieved successfully', files: txtFiles });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

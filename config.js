const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "mHRQUZ6C#pGUVCZOsrhomWZgVbMJpn8HvXnuLhYlhuA4yWx61aAc",
MONGODB: process.env.MONGODB || "",

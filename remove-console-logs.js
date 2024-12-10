/**
 * Console Log Removal Utility
 * 
 * A Node.js script that removes console.log statements from JavaScript/TypeScript files
 * Useful for cleaning up development code before production deployment
 */

const fs = require('fs');
const path = require('path');

/**
 * Configuration for file processing
 * Defines which files to process and which directories to ignore
 */
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx'];

/**
 * Directories to exclude from processing
 * Includes common build, dependency, and configuration directories
 */
const IGNORE_DIRS = [
    'node_modules',
    '.git',
    '.next',
    'dist',
    'build',
    'public',
    '.vercel',
    'coverage',
    '.vscode',
    '.github',
    'remove-console-logs.js'
];

/**
 * Primary directories to scan for console.log statements
 * Focuses on application source code directories
 */
const SCAN_DIRS = ['src', 'app', 'pages', 'components', 'lib', 'utils', 'hooks'];

/**
 * Regular expressions for matching different console.log patterns
 * Includes variations in spacing and commenting styles
 */
const PATTERNS = [
    /console\.log\((.*?)\);?/g,                    // Standard console.log
    /console\.log\s*\((.*?)\);?/g,                 // Console.log with extra spaces
    /console\s*\.\s*log\s*\((.*?)\);?/g,          // Console.log with dots spaced
    /\/\/.*console\.log\((.*?)\);?/g,             // Single-line commented
    /\/\*.*console\.log\((.*?)\);?.*\*\//g,       // Multi-line commented
];

/**
 * Processes a single file to remove console.log statements
 * @param {string} filePath - Path to the file to process
 * @returns {boolean} - True if changes were made, false otherwise
 */
function processFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        let hasChanges = false;

        // Apply each pattern
        PATTERNS.forEach(pattern => {
            if (pattern.test(content)) {
                content = content.replace(pattern, '');
                hasChanges = true;
            }
        });

        // Remove empty lines created by removing console.logs
        content = content.replace(/^\s*\n/gm, '');

        // Only write if changes were made
        if (hasChanges) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`✅ Removed console.logs from: ${filePath}`);
            return true;
        }
        return false;
    } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
        return false;
    }
}

function walkDir(dir) {
    if (!fs.existsSync(dir)) return;
    
    const files = fs.readdirSync(dir);
    let filesProcessed = 0;
    let filesChanged = 0;

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            // Skip ignored directories
            if (!IGNORE_DIRS.includes(file)) {
                const results = walkDir(filePath);
                filesProcessed += results.processed;
                filesChanged += results.changed;
            }
        } else if (stat.isFile() && EXTENSIONS.includes(path.extname(file))) {
            filesProcessed++;
            if (processFile(filePath)) {
                filesChanged++;
            }
        }
    });

    return { processed: filesProcessed, changed: filesChanged };
}

// Start the process
console.log('🔍 Starting to remove console.logs...');
console.log('📁 Scanning Next.js project directories...');

let totalProcessed = 0;
let totalChanged = 0;

// Process each main directory
SCAN_DIRS.forEach(dir => {
    if (fs.existsSync(dir)) {
        const results = walkDir(dir);
        totalProcessed += results.processed;
        totalChanged += results.changed;
    }
});

console.log('\n📊 Summary:');
console.log(`Total files scanned: ${totalProcessed}`);
console.log(`Files modified: ${totalChanged}`);
console.log('✨ Finished removing console.logs!'); 
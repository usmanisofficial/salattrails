#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logError(message) {
  log(`❌ ${message}`, colors.red);
}

function logSuccess(message) {
  log(`✅ ${message}`, colors.green);
}

function logInfo(message) {
  log(`ℹ️  ${message}`, colors.blue);
}

function logWarning(message) {
  log(`⚠️  ${message}`, colors.yellow);
}

async function publishUpdate() {
  try {
    logInfo('Starting OTA update process...');

    // Check if EAS CLI is installed
    try {
      execSync('eas --version', { stdio: 'pipe' });
    } catch (error) {
      logError('EAS CLI is not installed. Please install it first:');
      log('npm install -g @expo/eas-cli', colors.yellow);
      process.exit(1);
    }

    // Check if user is logged in
    try {
      execSync('eas whoami', { stdio: 'pipe' });
    } catch (error) {
      logError('You are not logged in to EAS. Please run:');
      log('eas login', colors.yellow);
      process.exit(1);
    }

    // Get the update channel from command line argument or use default
    const channel = process.argv[2] || 'production';

    logInfo(`Publishing update to channel: ${channel}`);

    // Publish the update
    const command = `eas update --channel ${channel}`;
    logInfo(`Running: ${command}`);

    execSync(command, { stdio: 'inherit' });

    logSuccess('Update published successfully!');
    logInfo(
      'Users will receive the update automatically when they open the app.'
    );
  } catch (error) {
    logError('Failed to publish update:');
    console.error(error);
    process.exit(1);
  }
}

// Show usage if help is requested
if (process.argv.includes('--help') || process.argv.includes('-h')) {
  log('Usage: node scripts/publish-update.js [channel]', colors.bold);
  log('');
  log('Options:', colors.bold);
  log('  channel    Update channel (default: production)', colors.reset);
  log('');
  log('Examples:', colors.bold);
  log('  node scripts/publish-update.js', colors.reset);
  log('  node scripts/publish-update.js production', colors.reset);
  log('  node scripts/publish-update.js preview', colors.reset);
  log('  node scripts/publish-update.js development', colors.reset);
  process.exit(0);
}

publishUpdate();

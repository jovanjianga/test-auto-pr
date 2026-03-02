#!/usr/bin/env node

/**
 * Simple hello script for testing auto PR workflow.
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    return 'Hello, World!';
  }
  return `Hello, ${name}!`;
}

console.log(greet(process.argv[2]));

module.exports = { greet };

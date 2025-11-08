/**
 * Entry point for museStarlinkpay71
 * This file provides a minimal example and export for unit tests.
 */

const { greet } = require('./utils.js');

function main() {
  // Demo run
  console.log(greet(process.env.USER || 'operator'));
}

if (require.main === module) {
  main();
}

module.exports = { greet };

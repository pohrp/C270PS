#!/bin/sh

# Exit on errors
set -e

echo "Setting up Husky..."

# Ensure Husky is installed
if [ ! -d ".husky" ]; then
  echo "Husky is not installed. Installing now..."
  npx husky install
fi

# Ensure Husky hooks are set up correctly
if [ ! -f ".husky/pre-commit" ]; then
  echo "Creating pre-commit hook..."
  npx husky add .husky/pre-commit "npx lint-staged"
  chmod +x .husky/pre-commit
fi

if [ ! -f ".husky/commit-msg" ]; then
  echo "Creating commit-msg hook..."
  npx husky add .husky/commit-msg "npx commitlint --edit \$1"
  chmod +x .husky/commit-msg
fi

echo "Husky setup complete!"

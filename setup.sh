#!/bin/bash

echo "🚀 Setting up your Personal Website"
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed"
    echo ""
    echo "Please install Node.js first:"
    echo "1. Visit https://nodejs.org/"
    echo "2. Download and install the LTS version"
    echo "3. Restart your terminal"
    echo "4. Run this script again"
    exit 1
fi

echo "✅ Node.js is installed ($(node --version))"

# Check if npm is available
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not available"
    exit 1
fi

echo "✅ npm is available ($(npm --version))"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete! To start your website:"
    echo "   npm run dev"
    echo ""
    echo "Your website will be available at: http://localhost:5173"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

#!/usr/bin/env node

/**
 * Script to automatically copy all project files to organized structure
 * Run with: node organize-files.js
 */

const fs = require('fs');
const path = require('path');

// Base paths
const rootDir = path.join(__dirname, '..');
const targetDir = __dirname;

// Files mapping: source -> destination
const fileMapping = {
  // Components
  'components/AboutSection.tsx': 'src/components/AboutSection.tsx',
  'components/ContactSection.tsx': 'src/components/ContactSection.tsx',
  'components/ContractForm.tsx': 'src/components/ContractForm.tsx',
  'components/ContractPreview.tsx': 'src/components/ContractPreview.tsx',
  'components/CursorTrail.tsx': 'src/components/CursorTrail.tsx',
  'components/Footer.tsx': 'src/components/Footer.tsx',
  'components/HeroSection.tsx': 'src/components/HeroSection.tsx',
  'components/IntroAnimation.tsx': 'src/components/IntroAnimation.tsx',
  'components/LanguageContext.tsx': 'src/components/LanguageContext.tsx',
  'components/Logo.tsx': 'src/components/Logo.tsx',
  'components/MissionSection.tsx': 'src/components/MissionSection.tsx',
  'components/Navigation.tsx': 'src/components/Navigation.tsx',
  'components/PageTransition.tsx': 'src/components/PageTransition.tsx',
  'components/PortfolioSection.tsx': 'src/components/PortfolioSection.tsx',
  'components/ServicesSection.tsx': 'src/components/ServicesSection.tsx',
  'components/TeamSection.tsx': 'src/components/TeamSection.tsx',
  'components/ThemeContext.tsx': 'src/components/ThemeContext.tsx',
  'components/WebExpertiseSection.tsx': 'src/components/WebExpertiseSection.tsx',
  
  // Pages
  'pages/HomePage.tsx': 'src/pages/HomePage.tsx',
  'pages/AboutPage.tsx': 'src/pages/AboutPage.tsx',
  'pages/ServicesPage.tsx': 'src/pages/ServicesPage.tsx',
  'pages/PortfolioPage.tsx': 'src/pages/PortfolioPage.tsx',
  'pages/ContractPage.tsx': 'src/pages/ContractPage.tsx',
  'pages/ContactPage.tsx': 'src/pages/ContactPage.tsx',
  
  // Supabase
  'supabase/functions/server/index.tsx': 'supabase/functions/server/index.tsx',
  'supabase/functions/server/kv_store.tsx': 'supabase/functions/server/kv_store.tsx',
  
  // Documentation
  'CONTRACT_SYSTEM_README.md': 'CONTRACT_SYSTEM_README.md',
  'GMAIL_SETUP.md': 'GMAIL_SETUP.md',
  'Attributions.md': 'Attributions.md',
  'guidelines/Guidelines.md': 'docs/Guidelines.md',
};

// UI Components - will be copied in bulk
const uiComponents = [
  'accordion.tsx', 'alert-dialog.tsx', 'alert.tsx', 'aspect-ratio.tsx',
  'avatar.tsx', 'badge.tsx', 'breadcrumb.tsx', 'button.tsx', 'calendar.tsx',
  'card.tsx', 'carousel.tsx', 'chart.tsx', 'checkbox.tsx', 'collapsible.tsx',
  'command.tsx', 'context-menu.tsx', 'dialog.tsx', 'drawer.tsx',
  'dropdown-menu.tsx', 'form.tsx', 'hover-card.tsx', 'input-otp.tsx',
  'input.tsx', 'label.tsx', 'menubar.tsx', 'navigation-menu.tsx',
  'pagination.tsx', 'popover.tsx', 'progress.tsx', 'radio-group.tsx',
  'resizable.tsx', 'scroll-area.tsx', 'select.tsx', 'separator.tsx',
  'sheet.tsx', 'sidebar.tsx', 'skeleton.tsx', 'slider.tsx', 'sonner.tsx',
  'switch.tsx', 'table.tsx', 'tabs.tsx', 'textarea.tsx', 'toggle-group.tsx',
  'toggle.tsx', 'tooltip.tsx', 'use-mobile.ts', 'utils.ts'
];

// Figma components
const figmaComponents = ['ImageWithFallback.tsx'];

/**
 * Copy file from source to destination
 */
function copyFile(source, destination) {
  const sourcePath = path.join(rootDir, source);
  const destPath = path.join(targetDir, destination);
  
  // Create destination directory if it doesn't exist
  const destDir = path.dirname(destPath);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  // Copy file
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ Copied: ${source} -> ${destination}`);
      return true;
    } else {
      console.log(`⚠️  Not found: ${source}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error copying ${source}:`, error.message);
    return false;
  }
}

/**
 * Main function to organize files
 */
function organizeFiles() {
  console.log('🚀 Starting file organization...\n');
  
  let successCount = 0;
  let failCount = 0;
  
  // Copy main files
  console.log('📁 Copying main files...');
  Object.entries(fileMapping).forEach(([source, dest]) => {
    if (copyFile(source, dest)) {
      successCount++;
    } else {
      failCount++;
    }
  });
  
  // Copy UI components
  console.log('\n📦 Copying UI components...');
  uiComponents.forEach(file => {
    const source = `components/ui/${file}`;
    const dest = `src/components/ui/${file}`;
    if (copyFile(source, dest)) {
      successCount++;
    } else {
      failCount++;
    }
  });
  
  // Copy Figma components
  console.log('\n🎨 Copying Figma components...');
  figmaComponents.forEach(file => {
    const source = `components/figma/${file}`;
    const dest = `src/components/figma/${file}`;
    if (copyFile(source, dest)) {
      successCount++;
    } else {
      failCount++;
    }
  });
  
  console.log('\n' + '='.repeat(50));
  console.log(`✅ Successfully copied: ${successCount} files`);
  console.log(`⚠️  Failed/Not found: ${failCount} files`);
  console.log('='.repeat(50));
  
  console.log('\n📝 Next steps:');
  console.log('1. cd منظم');
  console.log('2. npm install');
  console.log('3. npm run dev');
  console.log('\n✨ Done! Your project is organized and ready.');
}

// Run the script
organizeFiles();
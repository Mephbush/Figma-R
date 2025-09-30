#!/bin/bash

# Script to copy all project files to organized structure

# Create directories
mkdir -p منظم/src/{components,pages,utils,lib,hooks,assets}
mkdir -p منظم/src/components/{ui,figma}
mkdir -p منظم/src/integrations/supabase
mkdir -p منظم/public
mkdir -p منظم/supabase/functions/server

# Copy components
cp components/*.tsx منظم/src/components/ 2>/dev/null || true
cp components/ui/*.tsx منظم/src/components/ui/ 2>/dev/null || true
cp components/ui/*.ts منظم/src/components/ui/ 2>/dev/null || true
cp components/figma/*.tsx منظم/src/components/figma/ 2>/dev/null || true

# Copy pages
cp pages/*.tsx منظم/src/pages/ 2>/dev/null || true

# Copy utils
cp utils/supabase/*.tsx منظم/src/integrations/supabase/ 2>/dev/null || true

# Copy supabase server functions
cp supabase/functions/server/*.tsx منظم/supabase/functions/server/ 2>/dev/null || true

echo "Files copied successfully!"
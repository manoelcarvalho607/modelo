#!/bin/bash

MODIFIED_DIRS=$(git diff --name-only --diff-filter=ACMRT HEAD^1 HEAD | awk -F/ '{print $1}' | sort -u | grep -E '^[^\.]+$')
echo "Modified projects since last commit:"
echo "$MODIFIED_DIRS"
for dir in $MODIFIED_DIRS; do
  npm ci --prefix "$dir"
  npm run build --prefix "$dir" -- --base /modelo/"$dir"/ --outDir ../dist/"$dir"
done

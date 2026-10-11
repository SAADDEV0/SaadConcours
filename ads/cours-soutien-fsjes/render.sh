#!/bin/sh
# Usage : sh render.sh banner-v2.html v2  → PNG des 3 formats
EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
DIR="C:/Users/saad/Projects/SaadConcours/ads/cours-soutien-fsjes"
for spec in "carre 1080 1080" "story 1080 1920" "paysage 1200 628"; do
  set -- $spec
  "$EDGE" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 \
    --window-size=$2,$3 --screenshot="$DIR/cours-soutien-fsjes-$SUFFIX$1.png" "file:///$DIR/$FILE#$1" >/dev/null 2>&1
done

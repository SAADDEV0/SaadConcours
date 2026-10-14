#!/bin/sh
# Usage : sh render.sh → PNG @2x des 2 formats, puis WebP pour le site
EDGE="/c/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"
DIR="C:/Users/saad/Projects/SaadConcours/ads/preparation-s1-s3-s5"
for spec in "desk 970 120" "mob 640 200"; do
  set -- $spec
  "$EDGE" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=8000 \
    --window-size=$2,$3 --screenshot="$DIR/preparation-s1-s3-s5-$1.png" "file:///$DIR/banner.html#$1" >/dev/null 2>&1
done

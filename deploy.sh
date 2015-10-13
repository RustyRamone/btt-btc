#!/bin/bash          

DEPLOY_DEST=../public_html/composers-corner

if [ ! -d $DEPLOY_DEST ]; then
	echo "DEPLOY_DEST $DEPLOY_DEST does not exist."
	exit
fi

find . -name ".DS_Store" | xargs rm

echo "Gererating static files..."
rm -rf rendered
node web.js -g

echo "Copying static files to deploy destination..."
rsync -r --delete --exclude=.svn rendered/* $DEPLOY_DEST/

echo "Patching index file"
cat deploy/auth_header.php > $DEPLOY_DEST/index.php
cat $DEPLOY_DEST/index.html >> $DEPLOY_DEST/index.php
rm $DEPLOY_DEST/index.html

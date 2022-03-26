VERSION=$1

echo "Applying version ${VERSION} to manifests"

jq ".version = \"${VERSION}\"" ./public/manifest.webapp > tmp.json && mv tmp.json ./public/manifest.webapp
jq ".version = \"${VERSION}\"" ./dist/manifest.webapp > tmp.json && mv tmp.json ./dist/manifest.webapp
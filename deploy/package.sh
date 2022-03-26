VERSION=$1

echo "Packaging version ${VERSION}"

cd dist && zip -r ../KaiOS_Toolbox_v${VERSION}.zip * && cd ..
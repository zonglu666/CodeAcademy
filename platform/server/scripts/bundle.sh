set -e
npm run build
cp src/api/graphql/schema.graphql dist/flatform/server/src/api/graphql/
set -e
npm run build
cp src/api/graphql/schema.graphql dist/platform/server/src/api/graphql/
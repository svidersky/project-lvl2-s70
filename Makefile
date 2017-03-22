install:
	npm install

start:
	npm run babel-node -- src/bin/genDiff.js -h

publish:
	npm publish

lint:
	npm run eslint -- src

test:
	npm test

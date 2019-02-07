install:
	npm install
start:
	npx babel-node -- src/bin/brain-games.js

starteven:
	npx babel-node -- src/bin/brain-even.js

startcalc:
	npx babel-node -- src/bin/brain-calc.js

startgcd:
	npx babel-node -- src/bin/brain-gcd.js

publish:
	npm publish
lint:
	npx eslint .

install:
	npm install
	npm publish --dry-run
	sudo npm link
	
brain-games:
	node bin/brain-games

brain-even:
	node bin/brain-even

brain-calc:
	node bin/brain-calc	

lint:
	npx eslint .
Notes:
- husky pre commmit hooks only work with git >= 2.13.2
- keeping commit hooks in script to more clearly see what is being changed


scripts:
- clean: among other things...faster than unix command rm -rf dist/* 
- prestart: runs each time before npm run start and builds project
- start: starts server at the main entry point
- dev: watch for ts file changes inside of src/ and restart the server
        executes npm run dev:start
- dev:start:  builds the project into dist/ and starts node server at the main entry point
- build: use tsconfig to transpile project into js files inside dist/
- jest: jest
- precommit: runs before git commit on any staged files and prettiers them
- postcommit: fixes git state if using IDE to run git commands and state is unrecognized after postcommit


jest 
- global: threshold all remaining files must cover for test to pass
- src/**: threshold all test files inside src/ must cover for test to pass
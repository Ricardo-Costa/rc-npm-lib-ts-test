# rc-npm-lib-ts-test

> This is only a test to creating TS libs, and a little tutorial to how do it. 

**Obs.** For more detailed, look at the references. 

**Requirements**
- Nodejs
- Npm

**Steps**

```bash
npm init -y
```
```bash
npm i typescript -D
```
Init TypeScript configurations
```bash
npx tsc --init
```
Instal basic node types
```bash
npm install --save @types/node
```

**Configurations**
- Add `"declaration": true` to the compilerOptions of your tsconfig.json
  - This tells TypeScript to emit an `.d.ts` definitions file along with your compiled JavaScript.
- Add `"types": "index.d.ts"` to your `package.json`
  - When other people import your library, this tells the TypeScript compiler where to look for your library’s types.
  ```JSON
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  ```
- Config ts copimiler out put directory as `"outDir": "./dist",` in tsconfig.json file.
- Important files .gitignore and .npmignore
  - .gitignore -> Ignore `dist` on repository
  - .npmignore -> Empty(overwrites .gitignore) file, to don't ignore `dist` on NPM publish.
- Prevent every publishing to run ts compiler before.
  - Add `"prepublish": "tsc"` to `package.json`

**Run build**

**Tools**
- Look details before publish
  - `npm pack` > The pack command creates a `.tgz` file exactly the way it would if you were going to publish the package to npm.
- Test Pack with `npm link`: See more in references.

**References**
- https://cameronnokes.com/blog/the-30-second-guide-to-publishing-a-typescript-package-to-npm/
- https://www.typescriptlang.org/download
- https://docs.npmjs.com/cli/v7/commands/npm-pack
- https://docs.npmjs.com/cli/v8/commands/npm-link
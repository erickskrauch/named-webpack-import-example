# [Webpack issue #8957 example](https://github.com/webpack/webpack/issues/8957)

To obtain the error from discussion try to start the dev mode:

```sh
yarn start
```

You will also receive error with production build:

```sh
yarn build
```

Expected behavior is output `assets/test1.png?[hash]`.

```sh
yarn build
node dist/main.js
```

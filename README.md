# Tornelo Scoresheet App ![](https://build.appcenter.ms/v0.1/apps/f860007d-5788-4a22-839d-f16a3d7ea242/branches/main/badge)

A Chess Scoresheet App for iOS.

## Development:

It is strongly recommended to setup `pre-commit` when setting up a new environment: see `SETUP.md`.

### Chess engine

> go to chess.ts directory

- `npm install`
- `npx tsc`
- `npm link`

### Build app dependancies

> go to TorneloScoresheet directory

- `npm link ..\chess.ts`
- `npm install`

### iOS:

> go to TorneloScoresheet directory

> Make sure you have CocoaPods installed. (This should be installed when you run `xcode-select --install`

- `cd ios`
- `pod install`
- `cd ..`
- `npm run ios`

### Android:

> go to TorneloScoresheet directory

- `npm run android`

## Testing:

To test the `chess.ts` package:

- `cd packages/chess.ts`
- `npm i`
- `npm run test`

To test the `TorneloScoresheet` package:

- `cd packages/TorneloScoresheet`
- `npm i`
- `npm run test`

# Typescript-express

Basic template for typescript & Express.

```
npm run ci
npm run build
npm start
```

## Architecture

Les routes d'exemples se trouvent dans `/src/api/`. Le fichier d'entré est `index.ts` qui utilise `app.use('/api', apiRouter);` afin d'activer toutes les routes.
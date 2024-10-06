## Move to src of source directory

cd src

## Migrate database

```
npx sequelize-cli db:migrate
```

## Seeder database

```
npx sequelize-cli db:seed:all
```

## Start project

### Development

```
npm run dev
```

### Build

```
npm run build
```

### Production

```
npm run production
```

### Migrate table Kanji (Don't run this script)

```
npx sequelize-cli model:generate --name Kanji --attributes character:string,level:string,meaning:text,mnemonic:text,reading:string
```

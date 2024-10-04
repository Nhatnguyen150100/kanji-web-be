## Migrate database

```
npx sequelize-cli db:migrate
```

## Seeder database

```
npx sequelize-cli db:seed:all
```

### Migrate table Kanji

```
npx sequelize-cli model:generate --name Kanji --attributes character:string,level:string,meaning:text,mnemonic:text,reading:string
```

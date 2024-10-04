## Migrate database

```
npx sequelize-cli db:migrate
```

### Migrate table Kanji

```
npx sequelize-cli model:generate --name Kanji --attributes character:string,level:string,meaning:text,mnemonic:text,reading:string
```

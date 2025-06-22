# ProdMamager-Service

### Switching app modes

boots the web server:

dev
```bash
npm run dev
```

prod
```bash
npm run start:prod
```

test
```bash
npm run serve:test
```

### Folder structure

```
app/
├── config/
├── middleware/
├── features/      
│   ├── products/
│    └── controllers/
│    └── middleware/
│    └── models/
│    └── routes/
│    └── services/
│    └── types/
│    └── validations/            
│   └── users/
│   └── ... others feature foler/
├── migrations/    --> center migrations
├── seeders/       --> center seeders
├── routes/
├── server.ts

```
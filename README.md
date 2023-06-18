# express-mongo-ts
Basic REST API CRUD Product with Express TypeScript and MongoDB Atlas

## **Script for use Express with Typescript (Setup Project)**

### **Folder Structure 📂**

```
C:.
│   nodemon.json
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
│
└───src
        index.ts
```

### **Step 1 : create package.json and install typescript**

```
npm init -y
npm install -D typescript
npm install -D ts-node
npm install -D nodemon
npx tsc -init (create tsconfig.json file)
```

**in tsconfig.json allowed** => module, rootDir, moduleResolution, baseUrl, sourceMap, outDir, noImplicitAny

**create nodemon.json** add this to active nodemon

```
{
  "watch": [
    "src"
  ],
  "ext": ".ts,.js",
  "exec": "ts-node ./src/index.ts"
}
```

**package.json** add script for start server

```
"start": "nodemon"
```

### **Step 2 : install dependencies & devDependencies**

#### (ต้อง install @types ด้วย เพื่อให้ใช้งานกับ TypeScript ได้)

```
npm i express body-parser cookie-parser compression cors
npm i -D @types/express @types/body-parser @types/cookie-parser @types/compression @types/cors
```

## **Step to run**

```
1. cd express-mongo-ts
2. npm install
3. npm run start
```

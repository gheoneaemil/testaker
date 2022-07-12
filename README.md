# testaker

### Getting Started

#### 1) Load the .env.development file for server, and contracts ( if necessary )

#### 2) Start the server using:
```
npm install && npm run build && npm run start
```

#### 3) Start the client using:
```
npm install && npm run build && npm run start
```

##### If there's no types in ./client and ./server run this:
```
cd contracts
source .env.development
npm run build
```
##### This project is using a MySQL database, having the following configuration:
```
      host: 'localhost'
      port: 3306
      username: 'root'
      password: <from env file>
      database: 'sys'
```

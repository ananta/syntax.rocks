---
title: "PSQL commands that every developer should know!"
tags: []
published: true
date: "2020-10-01"
---

---

> In this tutorial, we will be listing out some basic psql commands that will help to query data from PostgreSWL database server.

### 1. Connecting to PostgerSQL database

The following command is used to connect to the PostgreSQL from the command cli. Let us suppose we are connecting to a database `dbx` with user `user`. Hitting ENTER will propmt us to enter the password for the database.

```
psql -d database -U user -W
```

But this will work on the local environment, to make it work with remote host, `-h` flag is used.

```
psql -h host -d database -U user -W
```

If we want to connect the database in SSL mode, we can do that by providing the following flag,

```
psql -U user -h host "dbname=db sslmode=require"
```

### 2. Switch connection to new database

Once a connection is successfully started with any of the database, we can change the database. Let us suppose we want to change the connection of the current database to `dby` with the `user`

```
\c dby username
```

### 3. List available databasese

To list all the database in current database server, we use `\l` command.

```
\l
```

### 4. List available tables

To list all the availbe tables in current database , we use `\dt` command.

```
\dt
```

### 5. Describe table structure

To describe a table such as a column, type, modifiers of columns, etc., you use the following command:

```
\d table_name
```

### 6. List available schema

To list all schemas of the currently connected database, you use the `\dn` command.

```
\dh
```

### 7. List available functions

To list all functions of the currently connected database, you use the `\df` command.

```
\df
```

### 8. List available views

To list all availble views of the currently connected database, you use the `\dv` command.

```
\dv
```

### 9. List users and their roles

To list all availble users and their roles of the currently connected database, you use the `\du` command.

```
\du
```

### 10. Display command history

To view command history we us `\s` command.

```
\s
```

### 11. Quit Psql

To quit psql, we use the command`\q`.

```
\q
```

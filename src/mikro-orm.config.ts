import { MikroORM, defineConfig } from '@mikro-orm/postgresql';
import {User} from './user.entity.js';
import {Address} from './address.entity.js';
import {SqlHighlighter} from '@mikro-orm/sql-highlighter';

export default defineConfig({
    entities: [
        User,
        Address
    ],
    dbName: "mikro7-entity-ctor",
    user: "development",
    password: "admin123",
    host: "localhost",
    port: 5437,
    highlighter: new SqlHighlighter(),
    debug: true,
});

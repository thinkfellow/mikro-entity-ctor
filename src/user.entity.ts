import {defineEntity, p} from '@mikro-orm/core';
import {Address} from './address.entity.js';

const UserSchema = defineEntity({
    name: 'User',
    properties: {
        id: p.integer().primary(),
        name: p.string(),
        homeAddress: () => p.embedded(Address).nullable(),
        workAddress: () => p.embedded(Address).nullable(),
    }
})
export class User extends UserSchema.class {}
UserSchema.setClass(User);

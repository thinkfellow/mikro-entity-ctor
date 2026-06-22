import {defineEntity, p} from '@mikro-orm/core';

export enum AddressType {
    Home = 'Home',
    Work = 'Work',
}

const AddressSchema = defineEntity({
    name: 'Address',
    embeddable: true,
    properties: {
        type: () => p.enum(AddressType).nativeEnumName('address_type'),
        street: p.string()
    }
})
export class Address extends AddressSchema.class {

    constructor() {
        super();
        // ctor is called during schema generation which should not happen according to the documentation
        // @link https://mikro-orm.io/docs/entity-constructors
        console.log('Address ctor');
        // This generates schema for "user" with `"home_address_type" "address_type" null default 'Home'`
        this.type = AddressType.Home;
        // Since User.homeAddress & User.workAddress are nullable, this results in records being inserted into the
        // database with street=null but type=Home when User is created with null Addresses

        // When commented out, generates expected schema without default
        //                                       `"home_address_type" "address_type" null`
    }
}
AddressSchema.setClass(Address);

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
        // ctor is called during schema generation
        console.log('Address ctor');
        // This generates schema for "user" with `"home_address_type" "address_type" null default 'Home'`
        this.type = AddressType.Home;
        // When commented out, generates
        //                                       `"home_address_type" "address_type" null`

    }
}
AddressSchema.setClass(Address);

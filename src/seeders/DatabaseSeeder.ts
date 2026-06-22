import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { User } from '../user.entity.js';

export class DatabaseSeeder extends Seeder {

  async run(em: EntityManager): Promise<void> {
    em.create(User, {
      name: 'My User'
    })
  }

}

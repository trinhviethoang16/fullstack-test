import {Entity, model, property} from '@loopback/repository';
import { UserRepository } from '../repositories';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastName: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isAdmin?: boolean;


  constructor(data?: Partial<User>) {
    super(data);
  }

  static async adminAccount(userRepository: UserRepository) {
    const adminExists = await userRepository.findOne({ where: { email: 'admin@gmail.com' } });

    if (!adminExists) {
      const adminData: Partial<User> = {
        firstName: 'Admin',
        lastName: 'UDT',
        email: 'admin@gmail.com',
        password: 'Admin123!@#',
        isAdmin: true,
      };
      await userRepository.create(adminData);
    }
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

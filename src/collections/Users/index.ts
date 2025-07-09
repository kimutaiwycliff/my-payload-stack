import type { CollectionConfig } from 'payload'
import { protectRoles } from './hooks/protectRoles'
import admin from './access/admin'
import editor from './access/editor'
import user from './access/user'
import { checkRole } from './access/checkRole'
import { User } from '@/payload-types'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    create: editor,
    read: user,
    update: user,
    delete: admin,
  },
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  defaultPopulate: {
    slug: true,
    name: true,
  },
  fields: [
   {
      name: 'active',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'name',
      type: 'text'
    },
    {
      name: 'avatar',
      type: 'upload',
      relationTo: 'media'
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      saveToJWT: true,
      options: [
        {label: 'Admin', value: 'admin'},
        {label: 'Editor', value: 'editor'},
        {label: 'User', value: 'user'},
      ],
      hooks: {
        beforeChange: [protectRoles]
      },
      access: {
        update: ({ req: { user } }) => checkRole(['admin'], user as User),
      }
    },
  ],
  timestamps: true,
}

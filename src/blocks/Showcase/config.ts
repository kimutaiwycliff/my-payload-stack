import { linkGroup } from '@/fields/linkGroup'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const ShowCase: Block = {
  slug: 'showcase',
  interfaceName: 'ShowcaseBlock',
  fields: [
    {
      name: 'heading',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'icon',
      type: 'select',
      options: [
        { label: 'Gear', value: 'gear' },
        { label: 'Roller', value: 'roller' },
      ],
      defaultValue: 'gear',
      required: true,
    },
    {
      name: 'subheading',
      type: 'richText',
      editor: lexicalEditor({}),
      required: false,
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    linkGroup({
      appearances: ['default', 'outline', 'glow'],
      overrides: {
        maxRows: 2,
      },
    }),
  ],
}

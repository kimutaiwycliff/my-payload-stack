import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'
export const BentoBox: Block = {
  slug: 'bentoBox',
  interfaceName: 'BentoBoxBlock',
  fields: [
    {
      name: 'Heading',
      type: 'richText',
      editor: lexicalEditor({

      }),
      required: true
    },
    {
      name: 'Cards',
      type: 'array',
      fields: [
        {
          name: 'Title',
          type: 'richText',
          editor: lexicalEditor({
          }),
          required: true
        },
        {
          name: 'Description',
          type: 'richText',
          editor: lexicalEditor({
          }),
          required: false
        },
        {
          name: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true
        },
        {
          name: 'Appearance',
          type: 'select',
          defaultValue: 'narrow',
          options: [
            { label: 'Narrow', value: 'narrow' },
            { label: 'Wide', value: 'wide' },
          ],
          required: false
        }
      ],
      required: true
    }
  ],
  labels: {
    plural: 'Bento Boxes',
    singular: 'Bento Box',
  },

}

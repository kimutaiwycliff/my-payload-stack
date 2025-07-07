import { lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const CaseStudies: Block = {
  slug: 'caseStudies',
  interfaceName: 'CaseStudiesBlock',
  fields: [
    {
      name: 'heading',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: 'subheading',
      type: 'richText',
      editor: lexicalEditor({}),
      required: false,
    },
    {
      name: 'caseStudy',
      type: 'array',
      fields: [
        {
          name: 'company',
          type: 'richText',
          editor: lexicalEditor({}),
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
          editor: lexicalEditor({}),
          required: true,
        },
        // linkGroup({
        //   appearances: ['default', 'outline', 'glow'],
        //   overrides: {
        //     maxRows: 2,
        //   },
        // }),
        {
          name: 'companyLogo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
        {
          label: 'Full Screen Video',
          value: 'fullScreenVideo',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, HeadingFeature(), FixedToolbarFeature(), InlineToolbarFeature()]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'video',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => type === 'fullScreenVideo',
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'fallbackImage',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => type === 'fullScreenVideo',
      },
      relationTo: 'media',
    },
    {
      name: 'overlayOpacity',
      label: 'Overlay Opacity',
      type: 'number',
      required: true,
      min: 0,
      max: 1,
      defaultValue: 0.5,
      admin: {
        condition: (_, { type } = {}) => type === 'fullScreenVideo',
      },
    },
    {
      name: 'textAlignment',
      label: 'Text Alignment',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'center',
      admin: {
        condition: (_, { type } = {}) => type === 'fullScreenVideo',
      },
    },
    {
      name: 'parallaxIntensity',
      label: 'Parallax Intensity',
      type: 'number',
      required: true,
      min: 0,
      max: 10,
      defaultValue: 0,
      admin: {
        condition: (_, { type } = {}) => type === 'fullScreenVideo',
      },
    },
  ],
  label: false,
}

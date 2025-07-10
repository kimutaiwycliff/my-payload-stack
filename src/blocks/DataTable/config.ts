import type { Block } from 'payload'

export const DataTableBlock: Block = {
  slug: 'dataTable',
  interfaceName: 'DataTableBlock',
  labels: {
    singular: 'Data Table',
    plural: 'Data Tables',
  },
  fields: [
    {
      name: 'collection',
      type: 'select',
      required: true,
      options: [
        { label: 'Customers', value: 'customers' },
        { label: 'Posts', value: 'posts' },
        { label: 'Pages', value: 'pages' },
        { label: 'Categories', value: 'categories' },
      ],
    },
    // {
    //   name: 'columns',
    //   type: 'array',
    //   label: 'Columns',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'field',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'header',
    //       type: 'text',
    //       required: true,
    //     },
    //   ],
    // },
    {
      name: 'filters',
      type: 'array',
      label: 'Filters',
      fields: [
        {
          name: 'field',
          type: 'text',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
        },
      ],
    },
    {
      name: 'defaultPageSize',
      type: 'number',
      required: false,
      defaultValue: 10,
    },
  ],
}

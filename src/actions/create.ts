'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

interface CreateParams {
  email: string
  password: string
  firstName: string
  lastName?: string
}

export interface CreateResponse {
  success: boolean
  error?: string
}

export async function create({
  email,
  password,
  firstName,
  lastName,
}: CreateParams): Promise<CreateResponse> {
  const payload = await getPayload({ config })

  try {
    const find = await payload.find({
      collection: 'customers',
      where: {
        email: {
          equals: email,
        },
      },
    })

    if (find.totalDocs === 0) {
      try {
        await payload.create({
          collection: 'customers',
          data: {
            email,
            password,
            firstName,
            lastName,
          },
        })

        return { success: true }
      } catch (e) {
        return { success: false, error: `There was a problem creating account: ${e}` }
      }
    } else {
      return { success: false, error: 'Account already exists' }
    }
  } catch (e) {
    return { success: false, error: `An error occurred: ${e}` }
  }
}

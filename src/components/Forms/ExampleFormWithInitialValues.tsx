'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form } from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CustomFormField } from './CustomFormField'
import { z } from 'zod'
import { useEffect, useState } from 'react'

// Example schema for a user profile form
const UserProfileSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  bio: z.string().optional(),
  role: z.string().min(1, 'Role is required'),
  isActive: z.boolean(),
  age: z.number().min(18, 'Must be at least 18 years old'),
})

type UserProfileFormData = z.infer<typeof UserProfileSchema>

// Mock function to simulate fetching user data from server
const fetchUserData = async (userId: string): Promise<UserProfileFormData> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock server response with initial values
  return {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software developer with 5 years of experience',
    role: 'developer',
    isActive: true,
    age: 28,
  }
}

interface ExampleFormProps {
  userId?: string
}

export function ExampleFormWithInitialValues({ userId = '123' }: ExampleFormProps) {
  const [initialData, setInitialData] = useState<UserProfileFormData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const form = useForm<UserProfileFormData>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      name: '',
      email: '',
      bio: '',
      role: '',
      isActive: false,
      age: 18,
    },
  })

  // Fetch initial data from server
  useEffect(() => {
    const loadUserData = async () => {
      try {
        setIsLoading(true)
        const userData = await fetchUserData(userId)
        setInitialData(userData)
        
        // Reset form with server data
        form.reset(userData)
      } catch (error) {
        console.error('Failed to load user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [userId, form])

  const onSubmit = async (values: UserProfileFormData) => {
    console.log('Form submitted with values:', values)
    // Here you would typically send the data to your server
    alert('Form submitted successfully!')
  }

  if (isLoading) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="p-6">
          <div className="text-center">Loading user data...</div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <CustomFormField
              name="name"
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              initialValue={initialData?.name}
            />

            <CustomFormField
              name="email"
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              initialValue={initialData?.email}
            />

            <CustomFormField
              name="bio"
              label="Bio"
              type="textarea"
              placeholder="Tell us about yourself"
              initialValue={initialData?.bio}
            />

            <CustomFormField
              name="role"
              label="Role"
              type="select"
              placeholder="Select your role"
              initialValue={initialData?.role}
              options={[
                { value: 'developer', label: 'Developer' },
                { value: 'designer', label: 'Designer' },
                { value: 'manager', label: 'Manager' },
                { value: 'analyst', label: 'Analyst' },
              ]}
            />

            <CustomFormField
              name="age"
              label="Age"
              type="number"
              placeholder="Enter your age"
              initialValue={initialData?.age}
            />

            <CustomFormField
              name="isActive"
              label="Active Status"
              type="switch"
              initialValue={initialData?.isActive}
            />

            <Button type="submit" className="w-full">
              Update Profile
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

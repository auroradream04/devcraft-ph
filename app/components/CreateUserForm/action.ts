// Action
'use server';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { State } from './definition';

const FormSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First name is required' }),
  lastName: z.string().trim().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().trim().min(8, { message: 'Password is required' }),
});

export async function createUser(prevState: State, formData: FormData) {
  const rawFormData = FormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // delay 1sec to show spinner
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!rawFormData.success) {
    return {
      errors: rawFormData.error.flatten().fieldErrors,
      success: rawFormData.success,
    };
  }

  // if (rawFormData.success) {
  //   return {
  //     data: rawFormData.data,
  //   };
  // }
  // console.log(rawFormData.data);

  try {
    //rawFormData.data going to the database POST Api
  } catch (error) {
    return {
      message: 'Database Error: Failed to Create User.',
    };
  }

  // this will fire if there is no error
  // and the data should be pass down to the database
  redirect('/home');
}

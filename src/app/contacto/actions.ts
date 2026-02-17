
'use server';

import { z } from 'zod';

export type ContactFormState = {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    message?: string[];
  };
  success: boolean;
};

const ContactSchema = z.object({
  name: z.string().min(2, { message: 'El nombre es requerido.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  company: z.string().optional(),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres.' }),
});

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = ContactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Error de validación.',
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log it to the console.
  console.log('Contact form submitted:');
  console.log(validatedFields.data);

  return { message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.', success: true, errors: {} };
}

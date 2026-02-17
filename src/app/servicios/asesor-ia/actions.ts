'use server';

import { aiServiceAdvisorRecommendation, AIServiceAdvisorRecommendationOutput } from '@/ai/flows/ai-service-advisor-recommendation';
import { z } from 'zod';

const formSchema = z.object({
  businessNeeds: z.string().min(20, 'Por favor, describe tus necesidades con más detalle (mínimo 20 caracteres).'),
  businessGoals: z.string().min(20, 'Por favor, describe tus objetivos con más detalle (mínimo 20 caracteres).'),
});

export type AdvisorFormState = {
  message: string;
  data: AIServiceAdvisorRecommendationOutput | null;
  errors: {
    businessNeeds?: string[];
    businessGoals?: string[];
    server?: string;
  } | null;
}

export async function getServiceRecommendation(
  prevState: AdvisorFormState,
  formData: FormData
): Promise<AdvisorFormState> {
  const validatedFields = formSchema.safeParse({
    businessNeeds: formData.get('businessNeeds'),
    businessGoals: formData.get('businessGoals'),
  });

  if (!validatedFields.success) {
    return {
      message: 'Validation failed.',
      data: null,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await aiServiceAdvisorRecommendation(validatedFields.data);
    return {
      message: 'Success',
      data: result,
      errors: null,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred.',
      data: null,
      errors: { server: 'No se pudieron obtener las recomendaciones. Por favor, inténtalo de nuevo más tarde.' },
    };
  }
}

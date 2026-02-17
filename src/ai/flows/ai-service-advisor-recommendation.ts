'use server';
/**
 * @fileOverview An AI-powered service advisor that recommends suitable AI or digital marketing services based on user-provided business needs and goals.
 *
 * - aiServiceAdvisorRecommendation - A function that handles the service recommendation process.
 * - AIServiceAdvisorRecommendationInput - The input type for the aiServiceAdvisorRecommendation function.
 * - AIServiceAdvisorRecommendationOutput - The return type for the aiServiceAdvisorRecommendation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIServiceAdvisorRecommendationInputSchema = z.object({
  businessNeeds: z
    .string()
    .describe(
      'A detailed description of the potential client\'s current business needs or problems.'
    ),
  businessGoals: z
    .string()
    .describe(
      'A detailed description of the potential client\'s desired business goals or outcomes.'
    ),
});
export type AIServiceAdvisorRecommendationInput = z.infer<
  typeof AIServiceAdvisorRecommendationInputSchema
>;

const AIServiceAdvisorRecommendationOutputSchema = z.object({
  recommendedServices: z
    .array(z.string())
    .describe(
      'An array of recommended services from the available list that best suit the client\'s needs.'
    ),
  explanation: z
    .string()
    .describe(
      'A detailed explanation of why these services are recommended and how they address the client\'s needs and goals.'
    ),
});
export type AIServiceAdvisorRecommendationOutput = z.infer<
  typeof AIServiceAdvisorRecommendationOutputSchema
>;

export async function aiServiceAdvisorRecommendation(
  input: AIServiceAdvisorRecommendationInput
): Promise<AIServiceAdvisorRecommendationOutput> {
  return aiServiceAdvisorRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiServiceAdvisorRecommendationPrompt',
  input: {schema: AIServiceAdvisorRecommendationInputSchema},
  output: {schema: AIServiceAdvisorRecommendationOutputSchema},
  prompt: `You are an expert AI and Digital Marketing Service Advisor for Synapse Growth, a modern, professional, and high-level agency specializing in AI and digital marketing solutions. Your goal is to help potential clients identify the most suitable services for their business.

Here is a list of all available services your agency offers:

AI Services:
- Custom chatbot development
- Virtual assistants for customer service
- Internal process automation
- CRM integration
- Appointment, reminder, and payment automation
- AI-powered call automation
- Smart lead generation systems

Digital Marketing Services:
- Digital marketing strategies
- Lead generation
- Conversion funnels
- Online advertising
- Conversion optimization
- Campaign automation

Based on the client's provided business needs and goals, recommend the 1-3 most suitable services from the lists above. Explain your recommendations clearly, highlighting how each service addresses their specific situation and contributes to achieving their goals. Focus on the benefits of innovation, strategy, measurable results, and rapid implementation.

Client's Business Needs: {{{businessNeeds}}}
Client's Business Goals: {{{businessGoals}}}`,
});

const aiServiceAdvisorRecommendationFlow = ai.defineFlow(
  {
    name: 'aiServiceAdvisorRecommendationFlow',
    inputSchema: AIServiceAdvisorRecommendationInputSchema,
    outputSchema: AIServiceAdvisorRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

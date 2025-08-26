'use server';

/**
 * @fileOverview A flow to provide personalized banking solution recommendations based on user input.
 * 
 * - aiSolutionFinder - A function that handles the solution finding process.
 * - AISolutionFinderInput - The input type for the aiSolutionFinder function.
 * - AISolutionFinderOutput - The return type for the aiSolutionFinder function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AISolutionFinderInputSchema = z.object({
  industry: z
    .string()
    .describe('The industry of the user, e.g., Steel, Construction, etc.'),
  challenges: z
    .string()
    .describe('The banking challenges the user is facing.'),
});
export type AISolutionFinderInput = z.infer<typeof AISolutionFinderInputSchema>;

const AISolutionFinderOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized recommendations for banking solutions.'),
});
export type AISolutionFinderOutput = z.infer<typeof AISolutionFinderOutputSchema>;

export async function aiSolutionFinder(input: AISolutionFinderInput): Promise<AISolutionFinderOutput> {
  return aiSolutionFinderFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiSolutionFinderPrompt',
  input: {schema: AISolutionFinderInputSchema},
  output: {schema: AISolutionFinderOutputSchema},
  prompt: `You are a banking solution expert for Iranian industries. Based on the industry and challenges provided by the user, you will provide personalized recommendations for banking solutions tailored to their specific needs.\n\nIndustry: {{{industry}}}\nChallenges: {{{challenges}}}\n\nRecommendations:`, // keep recommendations as a single line instruction
});

const aiSolutionFinderFlow = ai.defineFlow(
  {
    name: 'aiSolutionFinderFlow',
    inputSchema: AISolutionFinderInputSchema,
    outputSchema: AISolutionFinderOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

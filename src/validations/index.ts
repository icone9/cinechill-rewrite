export * from './comment';
import type { z } from 'zod';

export const validateData = <T extends z.ZodRawShape>(schema: z.ZodObject<T>, data: z.infer<z.ZodObject<T>>) => {
  const result = schema.safeParse(data);
  if(result.success) return {error: false, data: result.data }
  return {
    error: true,
    errors: result.error.errors.map((error) => {
      return {
        field: error.path[0],
        message: error.message
      };
    })
  }

}
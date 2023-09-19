import { z } from 'zod';
 
export const createCommentSchema = z.object({
  body: z.string().nonempty(),
  subject_id: z.number().nonnegative(), 
  subject_type: z.string().nonempty(), 
  userId: z.string().nonempty(),
  reply: z.number().nonnegative().nullable() 
});

// const t = createCommentSchema.safeParse({body:  "cos", subject_id: 45, subject_type: '', userId: ''})
// if(t.success) t.data

// if(!t.success) {
//   const errors = t.error.errors.map((error) => {
//     return {
//       field: error.path[0],
//       message: error.message
//     };
//   });
// }
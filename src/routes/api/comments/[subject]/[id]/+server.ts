import { error, json } from '@sveltejs/kit';
import { db } from '$db/index';
import { comments } from '$db/schema';
import { createCommentSchema, validateData } from '$validations/index';
 
export async function GET({ params }) {
  const comments = await db.query.comments.findMany({
    where(comments, {eq, and}) {
      return and(eq(comments.subject_id, +params.id), eq(comments.subject_type, params.subject))
    },
  });
  return json(comments);
}

export async function POST({ request, params }) {
  // const session = await locals.auth.validate();
  // console.log(session.user, 'session')
  const data = validateData(createCommentSchema, await request.json())
  if(data.error) return json(data.errors, {status: 400})
  console.log(data.data, 'data')
	// const data = createCommentSchema.safeParse(await request.json());
  const res = await db.insert(comments).values(data.data as any)

  console.log(res, 'res')

  return json({ message: 'Comment created' })
}

export async function PUT({ request }) {
	const { a, b } = await request.json();
	return json(a + b);
}

export async function DELETE({ request }) {
	const { a, b } = await request.json();
	return json(a + b);
}
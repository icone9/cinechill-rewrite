import type { User, Movie } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Movie } from "@prisma/client";

export function getMovie({
  id,
  userId,
}: Pick<Movie, "id"> & {
  userId: User["id"];
}) {
  return prisma.movie.findFirst({
    where: { id },
  });
}

export function createMovie({
  movieId,
  poster,
  title,
  userId,
}: Pick<Movie, "movieId" | "poster" | "title"> & {
  userId: User["id"];
}) {
  return prisma.movie.create({
    data: {
      movieId,
      title,
      poster,
    },
  });
}

export function deleteNote(id: Movie['id']) {
  return prisma.movie.deleteMany({
    where: { id, },
  });
}
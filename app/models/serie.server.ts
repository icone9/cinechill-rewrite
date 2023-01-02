import type { User, Serie } from "@prisma/client";

import { prisma } from "~/db.server";

export type { Serie } from "@prisma/client";

export function getMovie({
  id,
  userId,
}: Pick<Serie, "id"> & {
  userId: User["id"];
}) {
  return prisma.serie.findFirst({
    where: { id },
  });
}

export function createSerie({
  serieId,
  poster,
  title,
  userId,
}: Pick<Serie, "serieId" | "poster" | "title"> & {
  userId: User["id"];
}) {
  return prisma.serie.create({
    data: {
      serieId,
      title,
      poster,
    },
  });
}

export function deleteNote(id: Serie['id']) {
  return prisma.serie.deleteMany({
    where: { id, },
  });
}
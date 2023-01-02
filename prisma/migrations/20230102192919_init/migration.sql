-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT,
    "username" TEXT NOT NULL,
    "avatar" TEXT NOT NULL,
    "password" TEXT,
    "facebook_id" TEXT,
    "facebook_token" TEXT,
    "facebook_refresh_token" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "comments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "subject_type" TEXT NOT NULL,
    "reply" BIGINT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "movies" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "movieId" BIGINT NOT NULL,
    "poster" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "series" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "serieId" BIGINT NOT NULL,
    "poster" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FavoritesOnMovies" (
    "userId" TEXT NOT NULL,
    "movieId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "movieId")
);

-- CreateTable
CREATE TABLE "FavoritesOnSeries" (
    "userId" TEXT NOT NULL,
    "serieId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "serieId")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "comments_userId_idx" ON "comments"("userId");

-- CreateIndex
CREATE INDEX "FavoritesOnMovies_movieId_idx" ON "FavoritesOnMovies"("movieId");

-- CreateIndex
CREATE INDEX "FavoritesOnMovies_userId_idx" ON "FavoritesOnMovies"("userId");

-- CreateIndex
CREATE INDEX "FavoritesOnSeries_userId_idx" ON "FavoritesOnSeries"("userId");

-- CreateIndex
CREATE INDEX "FavoritesOnSeries_serieId_idx" ON "FavoritesOnSeries"("serieId");

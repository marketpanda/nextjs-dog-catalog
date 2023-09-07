-- CreateTable
CREATE TABLE "Likes" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "likes" TEXT[],

    CONSTRAINT "Likes_pkey" PRIMARY KEY ("id")
);

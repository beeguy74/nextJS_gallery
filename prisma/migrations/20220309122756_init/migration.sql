-- CreateTable
CREATE TABLE "sizes" (
    "id" SERIAL NOT NULL,
    "size_name" VARCHAR(128),
    "width" INTEGER,
    "height" INTEGER,

    CONSTRAINT "sizes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sizes_size_name_key" ON "sizes"("size_name");

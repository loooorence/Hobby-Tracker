-- CreateTable
CREATE TABLE "Label" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Label_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LabelToPost" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LabelToPost_AB_unique" ON "_LabelToPost"("A", "B");

-- CreateIndex
CREATE INDEX "_LabelToPost_B_index" ON "_LabelToPost"("B");

-- AddForeignKey
ALTER TABLE "_LabelToPost" ADD CONSTRAINT "_LabelToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Label"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LabelToPost" ADD CONSTRAINT "_LabelToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

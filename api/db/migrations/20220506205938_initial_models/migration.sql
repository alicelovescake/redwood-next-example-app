-- CreateTable
CREATE TABLE "Wizard" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "houseId" TEXT,

    CONSTRAINT "Wizard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "houseColours" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "founder" TEXT NOT NULL,
    "ghost" TEXT NOT NULL,
    "element" TEXT NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Classroom" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "incantation" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "light" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "classroomId" TEXT,

    CONSTRAINT "Spell_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "classroomId" TEXT,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClassroomToWizard" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Wizard_firstName_key" ON "Wizard"("firstName");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassroomToWizard_AB_unique" ON "_ClassroomToWizard"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassroomToWizard_B_index" ON "_ClassroomToWizard"("B");

-- AddForeignKey
ALTER TABLE "Wizard" ADD CONSTRAINT "Wizard_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Spell" ADD CONSTRAINT "Spell_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToWizard" ADD FOREIGN KEY ("A") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToWizard" ADD FOREIGN KEY ("B") REFERENCES "Wizard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

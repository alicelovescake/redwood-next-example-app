/*
  Warnings:

  - You are about to drop the `Ingredients` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Ingredients";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "classroomId" TEXT,
    CONSTRAINT "Ingredient_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_ClassroomToWizard" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Classroom" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Wizard" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Wizard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "houseId" TEXT,
    CONSTRAINT "Wizard_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Wizard" ("firstName", "houseId", "id", "lastName") SELECT "firstName", "houseId", "id", "lastName" FROM "Wizard";
DROP TABLE "Wizard";
ALTER TABLE "new_Wizard" RENAME TO "Wizard";
CREATE UNIQUE INDEX "Wizard_firstName_key" ON "Wizard"("firstName");
CREATE TABLE "new_Spell" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "incantation" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "light" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "classroomId" TEXT,
    CONSTRAINT "Spell_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Spell" ("classroomId", "effect", "id", "incantation", "light", "name", "type") SELECT "classroomId", "effect", "id", "incantation", "light", "name", "type" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_ClassroomToWizard_AB_unique" ON "_ClassroomToWizard"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassroomToWizard_B_index" ON "_ClassroomToWizard"("B");

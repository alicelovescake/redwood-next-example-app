/*
  Warnings:

  - You are about to drop the `Class` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `classId` on the `Ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `classId` on the `Spell` table. All the data in the column will be lost.
  - The primary key for the `WizardsClasses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `classId` on the `WizardsClasses` table. All the data in the column will be lost.
  - Added the required column `classroomId` to the `WizardsClasses` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Class";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Classroom" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "classroomId" TEXT,
    CONSTRAINT "Ingredients_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Ingredients" ("id", "name") SELECT "id", "name" FROM "Ingredients";
DROP TABLE "Ingredients";
ALTER TABLE "new_Ingredients" RENAME TO "Ingredients";
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
INSERT INTO "new_Spell" ("effect", "id", "incantation", "light", "name", "type") SELECT "effect", "id", "incantation", "light", "name", "type" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
CREATE TABLE "new_WizardsClasses" (
    "wizardId" TEXT NOT NULL,
    "classroomId" TEXT NOT NULL,

    PRIMARY KEY ("wizardId", "classroomId"),
    CONSTRAINT "WizardsClasses_wizardId_fkey" FOREIGN KEY ("wizardId") REFERENCES "Wizard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WizardsClasses_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WizardsClasses" ("wizardId") SELECT "wizardId" FROM "WizardsClasses";
DROP TABLE "WizardsClasses";
ALTER TABLE "new_WizardsClasses" RENAME TO "WizardsClasses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

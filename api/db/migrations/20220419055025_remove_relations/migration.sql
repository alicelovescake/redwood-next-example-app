/*
  Warnings:

  - You are about to drop the `WizardsClasses` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WizardsClasses";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "classroomId" TEXT
);
INSERT INTO "new_Ingredients" ("classroomId", "id", "name") SELECT "classroomId", "id", "name" FROM "Ingredients";
DROP TABLE "Ingredients";
ALTER TABLE "new_Ingredients" RENAME TO "Ingredients";
CREATE TABLE "new_Spell" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "incantation" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "light" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "classroomId" TEXT
);
INSERT INTO "new_Spell" ("classroomId", "effect", "id", "incantation", "light", "name", "type") SELECT "classroomId", "effect", "id", "incantation", "light", "name", "type" FROM "Spell";
DROP TABLE "Spell";
ALTER TABLE "new_Spell" RENAME TO "Spell";
CREATE TABLE "new_Wizard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "houseId" TEXT
);
INSERT INTO "new_Wizard" ("firstName", "houseId", "id", "lastName") SELECT "firstName", "houseId", "id", "lastName" FROM "Wizard";
DROP TABLE "Wizard";
ALTER TABLE "new_Wizard" RENAME TO "Wizard";
CREATE UNIQUE INDEX "Wizard_firstName_key" ON "Wizard"("firstName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE "Wizard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "houseId" TEXT,
    CONSTRAINT "Wizard_houseId_fkey" FOREIGN KEY ("houseId") REFERENCES "House" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "House" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "houseColours" TEXT NOT NULL,
    "animal" TEXT NOT NULL,
    "founder" TEXT NOT NULL,
    "ghost" TEXT NOT NULL,
    "element" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Class" (
    "id" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "WizardsClasses" (
    "wizardId" TEXT NOT NULL,
    "classId" TEXT NOT NULL,

    PRIMARY KEY ("wizardId", "classId"),
    CONSTRAINT "WizardsClasses_wizardId_fkey" FOREIGN KEY ("wizardId") REFERENCES "Wizard" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WizardsClasses_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spell" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "incantation" TEXT NOT NULL,
    "effect" TEXT NOT NULL,
    "light" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "classId" TEXT,
    CONSTRAINT "Spell_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Ingredients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "classId" TEXT,
    CONSTRAINT "Ingredients_classId_fkey" FOREIGN KEY ("classId") REFERENCES "Class" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Wizard_firstName_key" ON "Wizard"("firstName");

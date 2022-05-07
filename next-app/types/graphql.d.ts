export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type Classroom = {
  __typename?: 'Classroom';
  id: Scalars['String'];
  ingredients: Array<Maybe<Ingredient>>;
  name: Scalars['String'];
  spells: Array<Maybe<Spell>>;
  wizards: Array<Maybe<Wizard>>;
};

export type CreateClassroomInput = {
  ingredientIds?: InputMaybe<Array<Scalars['String']>>;
  name: Scalars['String'];
  spellIds?: InputMaybe<Array<Scalars['String']>>;
  wizardIds?: InputMaybe<Array<Scalars['String']>>;
};

export type CreateWizardInput = {
  firstName: Scalars['String'];
  houseId?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
};

export type House = {
  __typename?: 'House';
  animal: Scalars['String'];
  element: Scalars['String'];
  founder: Scalars['String'];
  ghost: Scalars['String'];
  houseColours: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  wizards: Array<Maybe<Wizard>>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  classroom?: Maybe<Classroom>;
  classroomId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createClassroom: Classroom;
  createWizard: Wizard;
  deleteClassroom: Classroom;
  deleteWizard: Wizard;
  updateClassroom: Classroom;
  updateIngredient: Ingredient;
  updateSpell: Spell;
  updateWizard: Wizard;
};


export type MutationcreateClassroomArgs = {
  input: CreateClassroomInput;
};


export type MutationcreateWizardArgs = {
  input: CreateWizardInput;
};


export type MutationdeleteClassroomArgs = {
  id: Scalars['String'];
};


export type MutationdeleteWizardArgs = {
  id: Scalars['String'];
};


export type MutationupdateClassroomArgs = {
  id: Scalars['String'];
  input: UpdateClassroomInput;
};


export type MutationupdateIngredientArgs = {
  classroomId: Scalars['String'];
  id: Scalars['String'];
};


export type MutationupdateSpellArgs = {
  classroomId: Scalars['String'];
  id: Scalars['String'];
};


export type MutationupdateWizardArgs = {
  id: Scalars['String'];
  input: UpdateWizardInput;
};

export type Query = {
  __typename?: 'Query';
  classroom?: Maybe<Classroom>;
  classrooms: Array<Classroom>;
  house?: Maybe<House>;
  houses: Array<House>;
  ingredient?: Maybe<Ingredient>;
  ingredients: Array<Ingredient>;
  redwood?: Maybe<Redwood>;
  spell?: Maybe<Spell>;
  spells: Array<Spell>;
  wizard?: Maybe<Wizard>;
  wizards: Array<Wizard>;
};


export type QueryclassroomArgs = {
  id: Scalars['String'];
};


export type QueryhouseArgs = {
  id: Scalars['String'];
};


export type QueryingredientArgs = {
  id: Scalars['String'];
};


export type QueryspellArgs = {
  id: Scalars['String'];
};


export type QuerywizardArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type Spell = {
  __typename?: 'Spell';
  classroom?: Maybe<Classroom>;
  classroomId?: Maybe<Scalars['String']>;
  effect: Scalars['String'];
  id: Scalars['String'];
  incantation: Scalars['String'];
  light: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['String'];
};

export type UpdateClassroomInput = {
  ingredientIds?: InputMaybe<Array<Scalars['String']>>;
  name?: InputMaybe<Scalars['String']>;
  spellIds?: InputMaybe<Array<Scalars['String']>>;
  wizardIds?: InputMaybe<Array<Scalars['String']>>;
};

export type UpdateWizardInput = {
  firstName?: InputMaybe<Scalars['String']>;
  houseId?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type Wizard = {
  __typename?: 'Wizard';
  classes: Array<Maybe<Classroom>>;
  firstName: Scalars['String'];
  house?: Maybe<House>;
  houseId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  lastName: Scalars['String'];
};

export type DeleteClassroomMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteClassroomMutation = { __typename?: 'Mutation', deleteClassroom: { __typename?: 'Classroom', id: string } };

export type FindClassroomByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindClassroomById = { __typename?: 'Query', classroom?: { __typename?: 'Classroom', id: string, name: string, ingredients: Array<{ __typename?: 'Ingredient', name: string } | null>, spells: Array<{ __typename?: 'Spell', name: string } | null>, wizards: Array<{ __typename?: 'Wizard', firstName: string, lastName: string } | null> } | null };

export type FindClassroomsVariables = Exact<{ [key: string]: never; }>;


export type FindClassrooms = { __typename?: 'Query', classrooms: Array<{ __typename?: 'Classroom', id: string, name: string, ingredients: Array<{ __typename?: 'Ingredient', name: string } | null>, spells: Array<{ __typename?: 'Spell', name: string } | null>, wizards: Array<{ __typename?: 'Wizard', firstName: string } | null> }> };

export type EditClassroomByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type EditClassroomById = { __typename?: 'Query', classroom?: { __typename?: 'Classroom', id: string, name: string, ingredients: Array<{ __typename?: 'Ingredient', id: string, name: string } | null>, spells: Array<{ __typename?: 'Spell', id: string, name: string } | null>, wizards: Array<{ __typename?: 'Wizard', id: string, firstName: string, lastName: string } | null> } | null, ingredients: Array<{ __typename?: 'Ingredient', id: string, name: string }>, spells: Array<{ __typename?: 'Spell', id: string, name: string }>, wizards: Array<{ __typename?: 'Wizard', id: string, firstName: string, lastName: string }> };

export type UpdateClassroomMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateClassroomInput;
}>;


export type UpdateClassroomMutation = { __typename?: 'Mutation', updateClassroom: { __typename?: 'Classroom', id: string } };

export type AvailableResourcesVariables = Exact<{ [key: string]: never; }>;


export type AvailableResources = { __typename?: 'Query', ingredients: Array<{ __typename?: 'Ingredient', id: string, name: string }>, spells: Array<{ __typename?: 'Spell', id: string, name: string }>, wizards: Array<{ __typename?: 'Wizard', id: string, firstName: string, lastName: string }> };

export type CreateClassroomMutationVariables = Exact<{
  input: CreateClassroomInput;
}>;


export type CreateClassroomMutation = { __typename?: 'Mutation', createClassroom: { __typename?: 'Classroom', id: string } };

export type EditWizardByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type EditWizardById = { __typename?: 'Query', wizard?: { __typename?: 'Wizard', id: string, firstName: string, lastName: string, houseId?: string | null } | null };

export type UpdateWizardMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateWizardInput;
}>;


export type UpdateWizardMutation = { __typename?: 'Mutation', updateWizard: { __typename?: 'Wizard', id: string, firstName: string, lastName: string, houseId?: string | null } };

export type CreateWizardMutationVariables = Exact<{
  input: CreateWizardInput;
}>;


export type CreateWizardMutation = { __typename?: 'Mutation', createWizard: { __typename?: 'Wizard', id: string } };

export type DeleteWizardMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteWizardMutation = { __typename?: 'Mutation', deleteWizard: { __typename?: 'Wizard', id: string } };

export type FindWizardByIdVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindWizardById = { __typename?: 'Query', wizard?: { __typename?: 'Wizard', id: string, firstName: string, lastName: string, houseId?: string | null } | null };

export type FindWizardsVariables = Exact<{ [key: string]: never; }>;


export type FindWizards = { __typename?: 'Query', wizards: Array<{ __typename?: 'Wizard', id: string, firstName: string, lastName: string, houseId?: string | null }> };

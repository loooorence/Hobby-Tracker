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
};

export type Label = {
  __typename?: 'Label';
  Post?: Maybe<Array<Post>>;
  _count: LabelCount;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type LabelCount = {
  __typename?: 'LabelCount';
  Post: Scalars['Int'];
};

export type LabelCountAggregate = {
  __typename?: 'LabelCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type LabelCreateInput = {
  Post?: InputMaybe<PostCreateNestedManyWithoutLabelInput>;
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type LabelCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LabelCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<LabelCreateWithoutPostInput>>;
};

export type LabelCreateOrConnectWithoutPostInput = {
  create: LabelCreateWithoutPostInput;
  where: LabelWhereUniqueInput;
};

export type LabelCreateWithoutPostInput = {
  id?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type LabelMaxAggregate = {
  __typename?: 'LabelMaxAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LabelMinAggregate = {
  __typename?: 'LabelMinAggregate';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type LabelScalarWhereInput = {
  AND?: InputMaybe<Array<LabelScalarWhereInput>>;
  NOT?: InputMaybe<Array<LabelScalarWhereInput>>;
  OR?: InputMaybe<Array<LabelScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type LabelUpdateManyMutationInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LabelUpdateManyWithWhereWithoutPostInput = {
  data: LabelUpdateManyMutationInput;
  where: LabelScalarWhereInput;
};

export type LabelUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<LabelCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<LabelCreateWithoutPostInput>>;
  delete?: InputMaybe<Array<LabelWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LabelScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LabelWhereUniqueInput>>;
  set?: InputMaybe<Array<LabelWhereUniqueInput>>;
  update?: InputMaybe<Array<LabelUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<LabelUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<LabelUpsertWithWhereUniqueWithoutPostInput>>;
};

export type LabelUpdateWithWhereUniqueWithoutPostInput = {
  data: LabelUpdateWithoutPostInput;
  where: LabelWhereUniqueInput;
};

export type LabelUpdateWithoutPostInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type LabelUpsertWithWhereUniqueWithoutPostInput = {
  create: LabelCreateWithoutPostInput;
  update: LabelUpdateWithoutPostInput;
  where: LabelWhereUniqueInput;
};

export type LabelWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  Login: LoginResponse;
  SignUp: LoginResponse;
  createLabel: Label;
  createPost: Post;
  createUser: User;
  removePost: Post;
  removeUser: User;
  updatePost: Post;
  updateUser: User;
};


export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpUserInput;
};


export type MutationCreateLabelArgs = {
  data: LabelCreateInput;
};


export type MutationCreatePostArgs = {
  data: PostCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationRemovePostArgs = {
  where: PostWhereUniqueInput;
};


export type MutationRemoveUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdatePostArgs = {
  data: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type Post = {
  __typename?: 'Post';
  Label?: Maybe<Array<Label>>;
  _count: PostCount;
  author: User;
  authorId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type PostCount = {
  __typename?: 'PostCount';
  Label: Scalars['Int'];
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int'];
  authorId: Scalars['Int'];
  description: Scalars['Int'];
  id: Scalars['Int'];
  title: Scalars['Int'];
};

export type PostCreateInput = {
  Label?: InputMaybe<LabelCreateNestedManyWithoutPostInput>;
  author: UserCreateNestedOneWithoutPostsInput;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostCreateManyAuthorInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostCreateManyAuthorInputEnvelope = {
  data: Array<PostCreateManyAuthorInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type PostCreateNestedManyWithoutAuthorInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
};

export type PostCreateNestedManyWithoutLabelInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutLabelInput>>;
  create?: InputMaybe<Array<PostCreateWithoutLabelInput>>;
};

export type PostCreateOrConnectWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutLabelInput = {
  create: PostCreateWithoutLabelInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAuthorInput = {
  Label?: InputMaybe<LabelCreateNestedManyWithoutPostInput>;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostCreateWithoutLabelInput = {
  author: UserCreateNestedOneWithoutPostsInput;
  description: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  authorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  authorId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  authorId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export type PostUpdateInput = {
  Label?: InputMaybe<LabelUpdateManyWithoutPostNestedInput>;
  author?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostUpdateManyMutationInput = {
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostUpdateManyWithWhereWithoutAuthorInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAuthorNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAuthorInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAuthorInput>>;
  createMany?: InputMaybe<PostCreateManyAuthorInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAuthorInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAuthorInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAuthorInput>>;
};

export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
  data: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAuthorInput = {
  Label?: InputMaybe<LabelUpdateManyWithoutPostNestedInput>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
  create: PostCreateWithoutAuthorInput;
  update: PostUpdateWithoutAuthorInput;
  where: PostWhereUniqueInput;
};

export type PostWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  labels: Array<Label>;
  post: Post;
  posts: Array<Post>;
  user: User;
  users: Array<User>;
};


export type QueryPostArgs = {
  where: PostWhereUniqueInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type SignUpUserInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<StringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: Maybe<Array<Post>>;
};

export type UserCount = {
  __typename?: 'UserCount';
  posts: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
};

export type UserCreateInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  posts?: InputMaybe<PostCreateNestedManyWithoutAuthorInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPostsInput = {
  email: Scalars['String'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  posts?: InputMaybe<PostUpdateManyWithoutAuthorNestedInput>;
};

export type UserUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  update?: InputMaybe<UserUpdateWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateWithoutPostsInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
};

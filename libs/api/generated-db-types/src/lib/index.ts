import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import * as Validator from 'class-validator';

export enum UserScalarFieldEnum {
    id = "id",
    email = "email",
    name = "name",
    password = "password"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum PostScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    authorId = "authorId"
}

registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregatePost {
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@ArgsType()
export class CreateManyPostArgs {
    @Field(() => [PostCreateManyInput], {nullable:false})
    @Type(() => PostCreateManyInput)
    @ValidateNested()
    data!: Array<PostCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOnePostArgs {
    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof PostCreateInput>;
}

@ArgsType()
export class DeleteManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class DeleteOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindFirstPostOrThrowArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindFirstPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindManyPostArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [PostScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostScalarFieldEnum>;
}

@ArgsType()
export class FindUniquePostOrThrowArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class FindUniquePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class PostAggregateArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithRelationInput>;
    @Field(() => PostWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@InputType()
export class PostCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class PostCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    authorId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class PostCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostCreateManyAuthorInputEnvelope {
    @Field(() => [PostCreateManyAuthorInput], {nullable:false})
    @Type(() => PostCreateManyAuthorInput)
    data!: Array<PostCreateManyAuthorInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class PostCreateManyAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
}

@InputType()
export class PostCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    authorId!: string;
}

@InputType()
export class PostCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostCreateOrConnectWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
}

@InputType()
export class PostCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => UserCreateNestedOneWithoutPostsInput, {nullable:false})
    author!: InstanceType<typeof UserCreateNestedOneWithoutPostsInput>;
}

@ArgsType()
export class PostGroupByArgs {
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
    @Field(() => [PostOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<PostOrderByWithAggregationInput>;
    @Field(() => [PostScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof PostScalarFieldEnum>;
    @Field(() => PostScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof PostScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => PostCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregateInput>;
    @Field(() => PostMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregateInput>;
    @Field(() => PostMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregateInput>;
}

@ObjectType()
export class PostGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => PostCountAggregate, {nullable:true})
    _count?: InstanceType<typeof PostCountAggregate>;
    @Field(() => PostMinAggregate, {nullable:true})
    _min?: InstanceType<typeof PostMinAggregate>;
    @Field(() => PostMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof PostMaxAggregate>;
}

@InputType()
export class PostListRelationFilter {
    @Field(() => PostWhereInput, {nullable:true})
    every?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    some?: InstanceType<typeof PostWhereInput>;
    @Field(() => PostWhereInput, {nullable:true})
    none?: InstanceType<typeof PostWhereInput>;
}

@InputType()
export class PostMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class PostMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
}

@InputType()
export class PostMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    authorId?: true;
}

@ObjectType()
export class PostMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
}

@InputType()
export class PostMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class PostOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => PostCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof PostCountOrderByAggregateInput>;
    @Field(() => PostMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof PostMaxOrderByAggregateInput>;
    @Field(() => PostMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof PostMinOrderByAggregateInput>;
}

@InputType()
export class PostOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;
    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    author?: InstanceType<typeof UserOrderByWithRelationInput>;
}

@InputType()
export class PostScalarWhereWithAggregatesInput {
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => [PostScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PostScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    authorId?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class PostScalarWhereInput {
    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
}

@InputType()
export class PostUncheckedCreateNestedManyWithoutAuthorInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
}

@InputType()
export class PostUncheckedCreateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
}

@InputType()
export class PostUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    authorId!: string;
}

@InputType()
export class PostUncheckedUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUncheckedUpdateManyWithoutPostsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class PostUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
}

@InputType()
export class PostUncheckedUpdateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class PostUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => String, {nullable:true})
    authorId?: string;
}

@InputType()
export class PostUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class PostUpdateManyWithWhereWithoutAuthorInput {
    @Field(() => PostScalarWhereInput, {nullable:false})
    @Type(() => PostScalarWhereInput)
    where!: InstanceType<typeof PostScalarWhereInput>;
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
}

@InputType()
export class PostUpdateManyWithoutAuthorNestedInput {
    @Field(() => [PostCreateWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateWithoutAuthorInput)
    create?: Array<PostCreateWithoutAuthorInput>;
    @Field(() => [PostCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutAuthorInput>;
    @Field(() => [PostUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutAuthorInput>;
    @Field(() => PostCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyAuthorInputEnvelope)
    createMany?: InstanceType<typeof PostCreateManyAuthorInputEnvelope>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;
    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;
    @Field(() => [PostUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutAuthorInput>;
    @Field(() => [PostUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutAuthorInput>;
    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}

@InputType()
export class PostUpdateWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    data!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
}

@InputType()
export class PostUpdateWithoutAuthorInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
}

@InputType()
export class PostUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => UserUpdateOneRequiredWithoutPostsNestedInput, {nullable:true})
    author?: InstanceType<typeof UserUpdateOneRequiredWithoutPostsNestedInput>;
}

@InputType()
export class PostUpsertWithWhereUniqueWithoutAuthorInput {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => PostUpdateWithoutAuthorInput)
    update!: InstanceType<typeof PostUpdateWithoutAuthorInput>;
    @Field(() => PostCreateWithoutAuthorInput, {nullable:false})
    @Type(() => PostCreateWithoutAuthorInput)
    create!: InstanceType<typeof PostCreateWithoutAuthorInput>;
}

@InputType()
export class PostWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
}

@InputType()
export class PostWhereInput {
    @Field(() => [PostWhereInput], {nullable:true})
    AND?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    OR?: Array<PostWhereInput>;
    @Field(() => [PostWhereInput], {nullable:true})
    NOT?: Array<PostWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    description?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    authorId?: InstanceType<typeof StringFilter>;
    @Field(() => UserRelationFilter, {nullable:true})
    author?: InstanceType<typeof UserRelationFilter>;
}

@ObjectType()
export class Post {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:false})
    description!: string;
    @Field(() => String, {nullable:false})
    authorId!: string;
    @Field(() => User, {nullable:false})
    author?: InstanceType<typeof User>;
}

@ArgsType()
export class UpdateManyPostArgs {
    @Field(() => PostUpdateManyMutationInput, {nullable:false})
    @Type(() => PostUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof PostUpdateManyMutationInput>;
    @Field(() => PostWhereInput, {nullable:true})
    @Type(() => PostWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof PostWhereInput>;
}

@ArgsType()
export class UpdateOnePostArgs {
    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof PostUpdateInput>;
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof PostWhereUniqueInput>;
}

@ArgsType()
export class UpsertOnePostArgs {
    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof PostWhereUniqueInput>;
    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    create!: InstanceType<typeof PostCreateInput>;
    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    update!: InstanceType<typeof PostUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => IntFilter, {nullable:true})
    not?: InstanceType<typeof IntFilter>;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringFilter, {nullable:true})
    not?: InstanceType<typeof StringFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => IntFilter, {nullable:true})
    _count?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    _min?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    _max?: InstanceType<typeof StringFilter>;
}

@ObjectType()
export class AggregateUser {
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@ArgsType()
export class CreateManyUserArgs {
    @Field(() => [UserCreateManyInput], {nullable:false})
    @Type(() => UserCreateManyInput)
    @ValidateNested()
    data!: Array<UserCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUserArgs {
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserCreateInput>;
}

@ArgsType()
export class DeleteManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class DeleteOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUserOrThrowArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindManyUserArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [UserScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUserOrThrowArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUserArgs {
    @Field(() => UserUpdateManyMutationInput, {nullable:false})
    @Type(() => UserUpdateManyMutationInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateManyMutationInput>;
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
}

@ArgsType()
export class UpdateOneUserArgs {
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    @ValidateNested()
    data!: InstanceType<typeof UserUpdateInput>;
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUserArgs {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    @ValidateNested()
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateInput, {nullable:false})
    @Type(() => UserCreateInput)
    create!: InstanceType<typeof UserCreateInput>;
    @Field(() => UserUpdateInput, {nullable:false})
    @Type(() => UserUpdateInput)
    update!: InstanceType<typeof UserUpdateInput>;
}

@ArgsType()
export class UserAggregateArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithRelationInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    cursor?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@InputType()
export class UserCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class UserCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    email!: number;
    @Field(() => Int, {nullable:false})
    name!: number;
    @HideField()
    password!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class UserCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@ObjectType()
export class UserCount {
    @Field(() => Int, {nullable:false})
    posts?: number;
}

@InputType()
export class UserCreateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateNestedOneWithoutPostsInput {
    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutPostsInput)
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
}

@InputType()
export class UserCreateOrConnectWithoutPostsInput {
    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserCreateWithoutPostsInput, {nullable:false})
    @Type(() => UserCreateWithoutPostsInput)
    create!: InstanceType<typeof UserCreateWithoutPostsInput>;
}

@InputType()
export class UserCreateWithoutPostsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => PostCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostCreateNestedManyWithoutAuthorInput>;
}

@ArgsType()
export class UserGroupByArgs {
    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    @ValidateNested()
    where?: InstanceType<typeof UserWhereInput>;
    @Field(() => [UserOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserOrderByWithAggregationInput>;
    @Field(() => [UserScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserScalarFieldEnum>;
    @Field(() => UserScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof UserScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => UserCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregateInput>;
    @Field(() => UserMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregateInput>;
    @Field(() => UserMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregateInput>;
}

@ObjectType()
export class UserGroupBy {
    @Field(() => String, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password!: string;
    @Field(() => UserCountAggregate, {nullable:true})
    _count?: InstanceType<typeof UserCountAggregate>;
    @Field(() => UserMinAggregate, {nullable:true})
    _min?: InstanceType<typeof UserMinAggregate>;
    @Field(() => UserMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof UserMaxAggregate>;
}

@InputType()
export class UserMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMaxAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    email?: true;
    @Field(() => Boolean, {nullable:true})
    name?: true;
    @Field(() => Boolean, {nullable:true})
    password?: true;
}

@ObjectType()
export class UserMinAggregate {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @HideField()
    password?: string;
}

@InputType()
export class UserMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
}

@InputType()
export class UserOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => UserCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof UserCountOrderByAggregateInput>;
    @Field(() => UserMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof UserMaxOrderByAggregateInput>;
    @Field(() => UserMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof UserMinOrderByAggregateInput>;
}

@InputType()
export class UserOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;
    @Field(() => PostOrderByRelationAggregateInput, {nullable:true})
    posts?: InstanceType<typeof PostOrderByRelationAggregateInput>;
}

@InputType()
export class UserRelationFilter {
    @Field(() => UserWhereInput, {nullable:true})
    is?: InstanceType<typeof UserWhereInput>;
    @Field(() => UserWhereInput, {nullable:true})
    isNot?: InstanceType<typeof UserWhereInput>;
}

@InputType()
export class UserScalarWhereWithAggregatesInput {
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => [UserScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserScalarWhereWithAggregatesInput>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class UserUncheckedCreateWithoutPostsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
}

@InputType()
export class UserUncheckedCreateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password!: string;
    @Field(() => PostUncheckedCreateNestedManyWithoutAuthorInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedCreateNestedManyWithoutAuthorInput>;
}

@InputType()
export class UserUncheckedUpdateManyInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateWithoutPostsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUncheckedUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
    @Field(() => PostUncheckedUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUncheckedUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpdateManyMutationInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateOneRequiredWithoutPostsNestedInput {
    @Field(() => UserCreateWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateWithoutPostsInput)
    create?: InstanceType<typeof UserCreateWithoutPostsInput>;
    @Field(() => UserCreateOrConnectWithoutPostsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutPostsInput)
    connectOrCreate?: InstanceType<typeof UserCreateOrConnectWithoutPostsInput>;
    @Field(() => UserUpsertWithoutPostsInput, {nullable:true})
    @Type(() => UserUpsertWithoutPostsInput)
    upsert?: InstanceType<typeof UserUpsertWithoutPostsInput>;
    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: InstanceType<typeof UserWhereUniqueInput>;
    @Field(() => UserUpdateWithoutPostsInput, {nullable:true})
    @Type(() => UserUpdateWithoutPostsInput)
    update?: InstanceType<typeof UserUpdateWithoutPostsInput>;
}

@InputType()
export class UserUpdateWithoutPostsInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
}

@InputType()
export class UserUpdateInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(3)
    name?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MaxLength(100)
    @Validator.MinLength(8)
    password?: string;
    @Field(() => PostUpdateManyWithoutAuthorNestedInput, {nullable:true})
    posts?: InstanceType<typeof PostUpdateManyWithoutAuthorNestedInput>;
}

@InputType()
export class UserUpsertWithoutPostsInput {
    @Field(() => UserUpdateWithoutPostsInput, {nullable:false})
    @Type(() => UserUpdateWithoutPostsInput)
    update!: InstanceType<typeof UserUpdateWithoutPostsInput>;
    @Field(() => UserCreateWithoutPostsInput, {nullable:false})
    @Type(() => UserCreateWithoutPostsInput)
    create!: InstanceType<typeof UserCreateWithoutPostsInput>;
}

@InputType()
export class UserWhereUniqueInput {
    @Field(() => String, {nullable:true})
    id?: string;
    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}

@InputType()
export class UserWhereInput {
    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;
    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    id?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    email?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    name?: InstanceType<typeof StringFilter>;
    @Field(() => StringFilter, {nullable:true})
    password?: InstanceType<typeof StringFilter>;
    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: InstanceType<typeof PostListRelationFilter>;
}

@ObjectType()
export class User {
    @Field(() => ID, {nullable:false})
    id!: string;
    @Field(() => String, {nullable:false})
    email!: string;
    @Field(() => String, {nullable:true})
    name!: string | null;
    @HideField()
    password!: string;
    @Field(() => [Post], {nullable:true})
    posts?: Array<Post>;
    @Field(() => UserCount, {nullable:false})
    _count?: InstanceType<typeof UserCount>;
}

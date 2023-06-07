import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LabelService } from './label.service';
import { CreateOneLabelArgs, Label } from 'libs/api/generated-db-types/src/lib';

@Resolver(() => Label)
export class LabelResolver {
  constructor(private readonly labelService: LabelService) {}

  @Mutation(() => Label)
  createLabel(@Args() createOneLabelArgs: CreateOneLabelArgs) {
    return this.labelService.create(createOneLabelArgs);
  }

  @Query(() => [Label])
  labels() {
    return this.labelService.findAll();
  }

  // @Query(() => Label, { name: 'label' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.labelService.findOne(id);
  // }

  // @Mutation(() => Label)
  // updateLabel(@Args('updateLabelInput') updateLabelInput: UpdateLabelInput) {
  //   return this.labelService.update(updateLabelInput.id, updateLabelInput);
  // }

  // @Mutation(() => Label)
  // removeLabel(@Args('id', { type: () => Int }) id: number) {
  //   return this.labelService.remove(id);
  // }
}

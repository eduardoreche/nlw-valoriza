import { classToPlain } from 'class-transformer';
import { getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

class TagListService {
  async execute() {
    const repository = getCustomRepository(TagsRepositories);

    const tags = await repository.find();

    return classToPlain(tags);
  }
}

export default TagListService;

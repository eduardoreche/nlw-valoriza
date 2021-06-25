import { getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

class TagListService {
  async execute() {
    const repository = getCustomRepository(TagsRepositories);

    const tags = repository.find();

    return tags;
  }
}

export default TagListService;

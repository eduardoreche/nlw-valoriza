import { CustomRepositoryCannotInheritRepositoryError, getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

class TagCreationService {
  async execute(name: string) {
    const repository = getCustomRepository(TagsRepositories);

    if (!name || name.trim() === '') throw Error('Name is mandatory');

    const tagAlreadyExists = await repository.findOne({
      name,
    });

    if (tagAlreadyExists) throw Error('Name already exists.');

    const tag = repository.create({
      name,
    });

    await repository.save(tag);

    return tag;
  }
}

export default TagCreationService;

import { PostDto } from './blog.model';
import { BlogFileRepository, BlogRepository } from './blog.repository';

export class BlogService {
  posts = [];
  blogRepository: BlogRepository;

  constructor() {
    this.blogRepository = new BlogFileRepository();
  }

  getAllPosts() {
    return this.blogRepository.getAllPosts();
  }

  createPost(postDto: PostDto) {
    this.blogRepository.createPost(postDto);
  }

  getPost(id) {
    return this.blogRepository.getPost(id);
  }

  delete(id) {
    return this.blogRepository.deletePost(id);
  }

  updatePost(id, postDto: PostDto) {
    this.blogRepository.updatePost(id, postDto);
  }
}

import { PostDto } from './blog.model';
import { BlogFileRepository } from './blog.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  posts = [];

  constructor(private blogRepository: BlogFileRepository) {}
  /* Equal to below code */
  /*
    blogRepository: BlogRepository;

    constructor(blogRepository: BlogFileRepository) {
      this.blogRepository = new BlogFileRepository();
    }
  */

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

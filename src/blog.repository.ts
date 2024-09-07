import { readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog.model';
import { Injectable } from '@nestjs/common';

export interface BlogRepository {
  getAllPosts(): Promise<PostDto[]>;
  createPost(postDto: PostDto);
  getPost(id: string): Promise<PostDto>;
  deletePost(id: string);
  updatePost(id: string, postDto: PostDto);
}

@Injectable()
export class BlogFileRepository implements BlogRepository {

  FILE_NAME = './src/blog.data.json';

  async getAllPosts(): Promise<PostDto[]> {
    const datas = await readFile(this.FILE_NAME, 'utf8');
    const posts = JSON.parse(datas);
    return posts;
  }

  async createPost(postDto: PostDto) {
    const posts = await this.getAllPosts();
    const id = posts.length + 1;
    const createPost = { id: id.toString(), ...postDto, createdAt: new Date() };
    posts.push(createPost);
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

  async getPost(id: string): Promise<PostDto> {
    const posts = await this.getAllPosts();
    const result = posts.find((post) => post.id === id);
    return result;
  }

  async deletePost(id: string) {
    const posts = await this.getAllPosts();
    const result = posts.filter((post) => post.id !== id);
    await writeFile(this.FILE_NAME, JSON.stringify(result));
  }

  async updatePost(id: string, postDto: PostDto) {
    const posts = await this.getAllPosts();
    const index = posts.findIndex((post) => post.id === id);
    const updatePost = { id, ...postDto, updatedAt: new Date() };
    posts[index] = updatePost;
    await writeFile(this.FILE_NAME, JSON.stringify(posts));
  }

}

import {
  Controller,
  Param,
  Body,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { Injectable } from '@nestjs/common';

@Injectable()
@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAllPosts() {
    console.log('get all posts');
    const posts = await this.blogService.getAllPosts();
    console.log(posts);
    return posts;
  }

  @Post()
  async createPost(@Body() post: any) {
    console.log(`write post`);
    console.log(post);
    this.blogService.createPost(post);
    return 'success';
  }

  @Get('/:id')
  async getPost(@Param('id') id: string) {
    console.log(`get post: ${id}`);

    const post = await this.blogService.getPost(id);
    console.log(post);
    return post;
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string) {
    console.log(`delete post: ${id}`);
    return 'success';
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() post: any) {
    console.log(`update post: ${id}`);
    console.log(post);
    return this.blogService.updatePost(id, post);
  }
}

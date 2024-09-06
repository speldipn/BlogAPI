import { Controller, Param, Body, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('blog')
export class BlogController {

  @Get()
  getAllPosts() {
    console.log("get all posts");
  }

  @Post()
  createPost(@Body() post: any) {
    console.log("writing post");
    console.log(post);
  }

  @Get('/:id')
  getPost(@Param('id') id: string) {
    console.log(`[id: ${id}] get post`);
  }

  @Delete('/:id')
  deletePost() {
    console.log("delete post");
  }

  @Put('/:id')
  updatePost(@Param('id') id: string, @Body() post: any) {
    console.log(`[id: ${id}] update post`);
    console.log(post);
  }
}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogFileRepository, BlogMongoRepository } from './blog.repository';
import { Blog, BlogSchema } from './blog.schema';
import { BlogService } from './blog.service';

@Module({
  imports: [
    //MongooseModule.forRoot('mongodb+srv://neo:WTHpRb7Ziuvuv7ym@cluster0.2dlvxbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forRoot('mongodb+srv://neo:WTHpRb7Ziuvuv7ym@cluster0.2dlvxbe.mongodb.net/blog'),
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService, BlogFileRepository, BlogMongoRepository],
})
export class AppModule {}

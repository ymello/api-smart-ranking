import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    PlayersModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.NODE_USER}:${process.env.NODE_PASS}@cluster1.bfhek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

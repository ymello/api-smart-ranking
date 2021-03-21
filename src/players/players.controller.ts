import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create_player.dto';
import { Player } from './interfaces/player.interface';
import { PlayersService } from './players.service';
@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async upsertPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    await this.playersService.upsertPlayer(createPlayerDto);
  }

  @Get()
  async getAll(): Promise<Player[]> {
    return this.playersService.getAll();
  }
}

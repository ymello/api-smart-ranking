import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
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
  async getPlayers(@Query('email') email: string): Promise<Player[] | Player> {
    if (email) {
      return this.playersService.get(email);
    }
    return this.playersService.getAll();
  }

  @Get()
  async getPlayer(email): Promise<Player> {
    return this.playersService.get(email);
  }

  @Delete()
  async deletePlayer(@Query('email') email: string): Promise<void> {
    return this.playersService.delete(email);
  }
}

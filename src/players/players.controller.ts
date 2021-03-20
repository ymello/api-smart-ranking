import { Body, Controller, Post } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create_player.dto';
@Controller('players')
export class PlayersController {
  @Post()
  async upsertPlayer(@Body() createPlayerDto: CreatePlayerDto) {
    const { email, name, phoneNumber } = createPlayerDto;

    return JSON.stringify(`{
      "name": ${name},
      "email": ${email},
      "phoneNumber": ${phoneNumber},
    }`);
  }
}

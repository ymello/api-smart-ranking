import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create_player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);
  private players: Player[] = [];

  async upsertPlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    this.logger.log(`Create Player DTO: ${createPlayerDto}`);
    this.create(createPlayerDto);
  }

  private create(createPlayerDto: CreatePlayerDto): void {
    const { name, email, phoneNumber } = createPlayerDto;

    const player: Player = {
      _id: uuidv4(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      rankPosition: 1,
      photoUrl: 'http://www.google.com/photos/',
    };

    this.players.push(player);
  }
}

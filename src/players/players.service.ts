import { Injectable, Logger } from '@nestjs/common';
import { CreatePlayerDto } from './dtos/create_player.dto';
import { Player } from './interfaces/player.interface';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class PlayersService {
  private readonly logger = new Logger(PlayersService.name);
  private players: Player[] = [];

  async upsertPlayer(createPlayerDto: CreatePlayerDto): Promise<void> {
    const { email } = createPlayerDto;

    const playerFinding = this.players.find((player) => player.email === email);

    if (playerFinding) {
      this.update(playerFinding, createPlayerDto);
    } else {
      this.create(createPlayerDto);
    }
  }

  async getAll(): Promise<Player[]> {
    return await this.players;
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
    this.logger.log(`Create Player DTO: ${JSON.stringify(createPlayerDto)}`);
    this.players.push(player);
  }

  private update(
    playerFinding: CreatePlayerDto,
    player: CreatePlayerDto,
  ): void {
    const { name } = player;
    playerFinding.name = name;
  }
}

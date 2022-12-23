import { Player } from './player';

export interface Game {
    _id?: string;
    name: string;
    description: string;
    number_of_round_played: number[];
    time_per_round_played: number[];
    created_date: Date;
    chosen_map: string;
    chosen_game_mode: string;
    is_day: boolean;
    elapsed_time: number;
    players: Player[];
    joinable: boolean;
    started: boolean;
    count:string;
}

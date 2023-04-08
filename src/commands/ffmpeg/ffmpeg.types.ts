import { ICommandExec } from '../../core/executor/command.types';

export interface IFfmpegInput {
    width: number;
    height: number;
    path: string; // путь до входного файла
    name: string; // название нового файла
}

export interface ICommandExecFfmpeg extends ICommandExec {
    output: string;
}

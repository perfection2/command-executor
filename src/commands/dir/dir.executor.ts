import { ChildProcessWithoutNullStreams, spawn } from 'child_process';
import { CommandExecutor } from '../../core/executor/command.executor';
import { ICommandExec } from '../../core/executor/command.types';
import { IStreamLogger } from '../../core/handlers/stream-logger.interface';
import { StreamHandler } from '../../core/handlers/stream.handler';
import { PromptService } from '../../core/prompt/prompt.service';
import { DirBuilder } from './dir.builder';
import { DirInput } from './dir.types';

export class DirExecutor extends CommandExecutor<DirInput> {
    private promptService: PromptService = new PromptService()
    constructor(
        logger: IStreamLogger,
    ) {
        super(logger);
    }

    protected async prompt(): Promise<DirInput> {
        const path = await this.promptService.input<string>('Путь', 'input');
        return { path };
    }
    protected build({ path }: DirInput): ICommandExec {
        const args = (new DirBuilder())
            .detailedOutput()
            .output();
        return { command: 'ls', args: args.concat(path) };
    }
    protected spawn({ command, args }: ICommandExec): ChildProcessWithoutNullStreams {
        return spawn(command, args);
    }
    protected processStream(stream: ChildProcessWithoutNullStreams, output: IStreamLogger): void {
        const handler = new StreamHandler(output);
        handler.processOutput(stream);
    }
}

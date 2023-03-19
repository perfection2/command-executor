
import { ChildProcessWithoutNullStreams } from 'child_process';
import { IStreamLogger } from '../handlers/stream-logger.interface';


export abstract class CommandExecutor<Input> {
    constructor(private logger: IStreamLogger) {}

    async execute() {
        const input = await this.prompt();
        const command = this.build(input);
        const stream = this.spawn(command);
        this.processStream(stream, this.logger);
    }

    protected abstract prompt(): Promise<Input>
    protected abstract build(input: Input): any;
    protected abstract spawn(command: any): ChildProcessWithoutNullStreams;
    protected abstract processStream(stream: ChildProcessWithoutNullStreams, logger: IStreamLogger): void;
}

//spawn('ffmpeg', ['-i', '///'])

import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './out/console-logger/console-logger';
import { DirExecuter } from './commands/dir/dir.executor';

export class App {
    async run() {
        await new DirExecuter(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();
app.run()

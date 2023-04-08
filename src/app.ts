import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';
import { ConsoleLogger } from './out/console-logger/console-logger';
import { DirExecutor } from './commands/dir/dir.executor';

export class App {
    async run() {
        // await new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
        await new DirExecutor(ConsoleLogger.getInstance()).execute();
    }
}

const app = new App();
app.run()

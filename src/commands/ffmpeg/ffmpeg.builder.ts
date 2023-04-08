export class FfmpegBuilder {
    private inputPath: string;
    private options: Map<string, string> = new Map();

    constructor() {
        this.options.set('-c:v', 'libx264'); // дефолтная опция
    }

    input(inputPath: string): this {
        this.inputPath = inputPath;
        return this;
    }

    setVideoSize(width: number, height: number): this {
        this.options.set('-s', `${width}x${height}`)
        return this;
    }

    output(outputPath: string): string[] {
        if (!this.inputPath) {
            throw new Error('Не задан параметр input');
        }
        // 1. input
        const args: string[] = ['-i', this.inputPath];
        // 2. options
        this.options.forEach((value, key) => {
            args.push(key);
            args.push(value);
        });
        // 3. output
        args.push(outputPath);
        // возвращаем общий массив строк
        return args;
    }
}

// new FfmpegBuilder()
//     .input('')
//     .setVideoSize(1920, 1080)
//     .output('//');

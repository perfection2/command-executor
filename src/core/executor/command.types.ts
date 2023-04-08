export interface ICommandExec {
    command: string; // например ffmpeg
    args: string[]; // ['-i', '/my_path', '-c:v', 'libx264', '-s', '1920x1080' ...]
}

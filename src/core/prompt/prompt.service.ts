import inquirer from 'inquirer';
import { PromptType } from './prompt.types';

export class PromptService {
    // метод вызывается на каждый вопрос
    // Example: const width = await this.promptService.input<number>('Ширина', 'number');
    // метод по сути просто обертка над библиотечным inquirer.prompt
    public async input<T>(message: string, type: PromptType): Promise<T> {
        // Задавая тип number вместо T я указываю тип возвращаемого значения: введеный ответ будет иметь тип число
        const { result } = await inquirer.prompt<{ result: T }>([
            {
                type, // 'input' | 'number' | 'password'
                name: 'result', // имя переменной в которую будет возвращать
                message,
            },
        ]);
        return result;
    }
}

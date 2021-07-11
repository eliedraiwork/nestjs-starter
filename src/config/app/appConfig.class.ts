import { IsNotEmpty } from 'class-validator';

export default class Config {
    @IsNotEmpty() env: string;
    @IsNotEmpty() port: number;
    @IsNotEmpty() defaultLanguage: string;
    @IsNotEmpty() version: string;

    public constructor(partial: Partial<Config>) {
        Object.assign(this, partial);
    }
}

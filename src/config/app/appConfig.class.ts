import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export default class Config {
    @IsNotEmpty() env: string;
    @IsNotEmpty() port: number;

    //  default language, use ISO 639-2 specification
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(3)
    defaultLanguage: string;

    public constructor(partial: Partial<Config>) {
        Object.assign(this, partial);
    }
}

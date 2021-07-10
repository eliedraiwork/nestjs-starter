import { validate } from 'class-validator';
import Config from './appConfig.class';

export default () => {
    const configObject = {
        env: process.env.APP_ENV,
        port: parseInt(process.env.APP_PORT),
        defaultLanguage: process.env.DEFAULT_LANGUAGE || 'eng',
    };

    const config = new Config(configObject);

    /**
     * Here handle existence of mandatories values in the config file
     */
    validate(config).then((errors) => {
        if (errors.length > 0) {
            console.log('Failed validating required environment variables.');
            console.log(errors);
            process.exit(9);
        }
    });

    return config;
};

import { ConfigModule, ConfigService } from "@nestjs/config";
import { MikroOrmModuleAsyncOptions } from "@mikro-orm/nestjs";


export function get_db_config(): MikroOrmModuleAsyncOptions
{
    return {
        useFactory: (config: ConfigService) =>
        ({
            type:      'postgresql',
            host:       config.get('DB_HOST'),
            port:       config.get('DB_PORT'),
            user:       config.get('DB_USERNAME'),
            password:   config.get('DB_PASSWORD'),
            dbName:     config.get('DB_NAME'),
            entities:   ['dist/**/*.entity.js'],
            entitiesTs: ['src/**/*.entity.ts']
        }),
        imports: [ConfigModule],
        inject:  [ConfigService]
    }
}
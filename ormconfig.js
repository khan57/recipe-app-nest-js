const { ConfigService } = require('@nestjs/config');

const configService = new ConfigService();

module.exports = {
  type: 'mariadb',
  host: configService.getOrThrow('MYSQL_HOST'),
  port: configService.getOrThrow('MYSQL_PORT'),
  database: configService.getOrThrow('MYSQL_DATABASE'),
  username: configService.getOrThrow('MYSQL_USERNAME'),
  password: configService.getOrThrow('MYSQL_PASSWORD'),
  autoLoadEntities: true,
  synchronize: configService.getOrThrow('MYSQL_SYNCHRONIZE'),
};

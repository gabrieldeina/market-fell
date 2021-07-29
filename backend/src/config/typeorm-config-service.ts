import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { resolve } from 'path';
import { ConnectionOptions, createConnection } from 'typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  private readonly isTestEnvironment: boolean;
  private readonly isProductiontEnvironment: boolean;

  constructor(private readonly configService: ConfigService) {
    this.isTestEnvironment = this.configService.get('NODE_ENV') === 'test';
    this.isProductiontEnvironment =
      this.configService.get('NODE_ENV') === 'production';
  }

  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    const config = this.isTestEnvironment
      ? await this.getTestOrmConfig()
      : this.getProductionOrmConfig();

    return config;
  }

  getProductionOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get('DB_USERNAME'),
      password: this.configService.get('DB_PASSWORD'),
      database: this.configService.get('DB_NAME'),
      entities: this.getEntities(),
      synchronize: !this.isProductiontEnvironment,
    };
  }

  async getTestOrmConfig(): Promise<TypeOrmModuleOptions> {
    const config: TypeOrmModuleOptions = {
      type: 'sqlite',
      database: ':memory:',
      dropSchema: true,
      synchronize: true,
      entities: this.getEntities(),
      logging: false,
      keepConnectionAlive: true,
    };

    await createConnection(config as ConnectionOptions);

    return config;
  }

  getEntities(): string[] {
    return this.isTestEnvironment
      ? [resolve('src', '**', '*.entity.ts')]
      : [resolve('dist', '**', '*.entity.js')];
  }
}

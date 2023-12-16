import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Figure, FigureRelations} from '../models';

export class FigureRepository extends DefaultCrudRepository<
  Figure,
  typeof Figure.prototype.id,
  FigureRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Figure, dataSource);
  }
}

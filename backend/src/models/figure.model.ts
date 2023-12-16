import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Figure extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  shape: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  symbol: string;

  @property({
    type: 'string',
    required: true,
  })
  measurement: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Figure>) {
    super(data);
  }
}

export interface FigureRelations {
  // describe navigational properties here
}

export type FigureWithRelations = Figure & FigureRelations;

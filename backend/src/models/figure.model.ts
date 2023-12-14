import {Entity, model, property} from '@loopback/repository';

@model()
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
    type: 'number',
    required: true,
  })
  measurement: number;


  constructor(data?: Partial<Figure>) {
    super(data);
  }
}

export interface FigureRelations {
  // describe navigational properties here
}

export type FigureWithRelations = Figure & FigureRelations;

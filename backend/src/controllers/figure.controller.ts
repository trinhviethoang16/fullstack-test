import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Figure} from '../models';
import {FigureRepository} from '../repositories';

export class FigureController {
  constructor(
    @repository(FigureRepository)
    public figureRepository : FigureRepository,
  ) {}

  @post('/figures/create')
  @response(200, {
    description: 'Figure model instance',
    content: {'application/json': {schema: getModelSchemaRef(Figure)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Figure, {
            title: 'NewFigure',
            exclude: ['id'],
          }),
        },
      },
    })
    figure: Omit<Figure, 'id'>,
  ): Promise<Figure> {
    return this.figureRepository.create(figure);
  }

  @get('/figures/count')
  @response(200, {
    description: 'Figure model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Figure) where?: Where<Figure>,
  ): Promise<Count> {
    return this.figureRepository.count(where);
  }

  @get('/figures')
  @response(200, {
    description: 'Array of Figure model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Figure, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Figure) filter?: Filter<Figure>,
  ): Promise<Figure[]> {
    return this.figureRepository.find(filter);
  }

  @patch('/figures')
  @response(200, {
    description: 'Figure PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Figure, {partial: true}),
        },
      },
    })
    figure: Figure,
    @param.where(Figure) where?: Where<Figure>,
  ): Promise<Count> {
    return this.figureRepository.updateAll(figure, where);
  }

  @get('/figures/{id}')
  @response(200, {
    description: 'Figure model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Figure, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Figure, {exclude: 'where'}) filter?: FilterExcludingWhere<Figure>
  ): Promise<Figure> {
    return this.figureRepository.findById(id, filter);
  }

  @patch('/figures/{id}')
  @response(204, {
    description: 'Figure PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Figure, {partial: true}),
        },
      },
    })
    figure: Figure,
  ): Promise<void> {
    await this.figureRepository.updateById(id, figure);
  }

  @put('/figures/{id}')
  @response(204, {
    description: 'Figure PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() figure: Figure,
  ): Promise<void> {
    await this.figureRepository.replaceById(id, figure);
  }

  @del('/figures/{id}')
  @response(204, {
    description: 'Figure DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.figureRepository.deleteById(id);
  }
}

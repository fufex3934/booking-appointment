import { Test, TestingModule } from '@nestjs/testing';
import { BusinessLinesController } from './business-lines.controller';

describe('BusinessLinesController', () => {
  let controller: BusinessLinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusinessLinesController],
    }).compile();

    controller = module.get<BusinessLinesController>(BusinessLinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

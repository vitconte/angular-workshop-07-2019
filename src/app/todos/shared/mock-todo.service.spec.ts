import { TestBed } from '@angular/core/testing';

import { MockTodoService } from './mock-todo.service';

describe('MockTodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockTodoService = TestBed.get(MockTodoService);
    expect(service).toBeTruthy();
  });
});

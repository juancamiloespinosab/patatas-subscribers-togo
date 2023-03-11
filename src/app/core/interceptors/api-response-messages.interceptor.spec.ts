import { TestBed } from '@angular/core/testing';

import { ApiResponseMessagesInterceptor } from './api-response-messages.interceptor';

describe('ApiResponseMessagesInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiResponseMessagesInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiResponseMessagesInterceptor = TestBed.inject(ApiResponseMessagesInterceptor);
    expect(interceptor).toBeTruthy();
  });
});

import { AppController } from './app.controller.js';

describe('AppController', () => {
  it('reports that the service is running', () => {
    expect(new AppController().getStatus()).toBe('Service is running');
  });
});

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from '@core/models';
import { environment } from 'src/environments/environment';
import { DEFAULT_QUERY_PARAMS_REQUEST } from './constants';
import { GenericResponse } from './interfaces';
import { GenericQueryParamsRequest } from './interfaces/request/generic-query-params-request.interface';

@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  private BASE_URL = environment.invertebradoApi.baseUrl;
  private AUTH_API = environment.invertebradoApi.paths.subscribers;

  constructor(private httpClient: HttpClient) {}

  getSubscribers(
    queryParams: GenericQueryParamsRequest = DEFAULT_QUERY_PARAMS_REQUEST
  ) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}`;
    const params = new HttpParams({ fromObject: queryParams });
    return this.httpClient.get<GenericResponse<Subscriber>>(url, { params });
  }

  getSubscriberById(subscriberId: string) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}/${subscriberId}`;
    return this.httpClient.get<Subscriber>(url);
  }

  createSubscriber(subscribers: Subscriber[]) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}`;
    return this.httpClient.post(url, { Subscribers: subscribers });
  }

  deleteSubscriber(subscriber: Subscriber) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}/${subscriber.Id}`;
    return this.httpClient.delete(url);
  }

  updateSubscriber(subscriber: Subscriber) {
    const url = `${this.BASE_URL}${this.AUTH_API.parent}/${subscriber.Id}`;
    return this.httpClient.put(url, subscriber);
  }
}

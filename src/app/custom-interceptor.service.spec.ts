import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { CustomInterceptorService } from './custom-interceptor.service';
import { BASE_URL_TOKEN } from './config';
import { environment } from '@env/environment';

const products = [
  {
    '_id': '5e7cef4eed3d55e9ccc62885',
    'title': 'Product 111',
    'img': 'assets/img/product-4.jpg',
    'price': 2345,
    'author': 'Igor',
    'isFavorite': false
  },
  {
    '_id': '5e7cef4eed3d55e9ccc62886',
    'title': 'Product 231',
    'img': 'assets/img/product-5.jpg',
    'price': 23,
    'author': 'Vlad',
    'isFavorite': true
  },
  {
    '_id': '5e7cef4eed3d55e9ccc62887',
    'title': 'Product 234',
    'img': 'assets/img/product-3.jpg',
    'price': 333,
    'author': 'Igor',
    'isFavorite': true
  },
];


describe('Interceptor', () => {
  let httpMocked: HttpTestingController;
  const accessToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5lcGlwZW5rbzEiLCJpYXQiOjE1NzYxNzgxNzN9.-dXOEZhBVHXp3goe7DROuoVTKSNIUjL-0hYDIhdzd00';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: CustomInterceptorService,
          multi: true,
        },
        {provide: BASE_URL_TOKEN, useValue: environment.baseUrl},
      ]
    });

    httpMocked = TestBed.inject(HttpTestingController);
  });

  it('should have auth header', inject([HttpClient, BASE_URL_TOKEN], (http, baseUrl) => {
    http.get('/auth')
      .subscribe();
    const httpReq: TestRequest = httpMocked.expectOne({
      method: 'GET',
      url: `${baseUrl}/auth`
    });
    expect(httpReq.request.headers.has('Authorization')).toBeTruthy();
    expect(httpReq.request.headers.get('Authorization')).toEqual(accessToken);
  }));

  it('Should transform request', inject([HttpClient, BASE_URL_TOKEN], (http, baseUrl) => {
    http.get('/products')
      .subscribe((response) => {
        expect(response).toEqual(products);
      });
    const httpReq: TestRequest = httpMocked.expectOne({
      method: 'GET',
      url: `${baseUrl}/products`
    });
    httpReq.flush({
      data: products,
      error: null
    });
  }));
});

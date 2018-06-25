'use strict';

import supertest from 'supertest';
import {
  server,
} from '../../../src/app.js';
import modelsHelper from '../../../scripts/models.helper.js';
import Coffee from '../../../src/models/coffee';
import Parks from '../../../src/models/parks';

const mockRequest = supertest(server);

const API_URL = '/api/v1/coffee';

afterAll(modelsHelper.afterAll);
beforeAll(modelsHelper.beforeAll);
afterEach(modelsHelper.afterEach);

describe('api', () => {

  it('mockRequest should exist', () => {
    expect(mockRequest).toBeDefined();
  });

  it('get back empty array for find', () => {
    return mockRequest
      .get(API_URL)
      .then(results => {
        let coffees = JSON.parse(results.text);
        expect(coffees).toEqual([]);
      });
  });

  it('GET - test 200, returns a resource with a valid body', () => {
    return mockRequest
      .get(API_URL)
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('should return 400 bad request when no id was provided', () => {
    return mockRequest
      .get(API_URL)
      .catch(err => {
        expect(err.response.text).toBe('Bad Request');
        expect(err.status).toBe(400);
      });
  });

  it('should return 200 and contain response body for request made with valid id', () => {
    let coffeeModel = {name:'name', roast: 'roast', coffee: 'coffee'};
    return mockRequest
      .post(API_URL)
      .send(coffeeModel)
      .then(data => {
        return mockRequest
          .get(`${API_URL}/${data.body._id}`)
          .then(response => {
            expect(response.body.name).toEqual(data.body.name);
          });
      });
  });

  it('should return 400 bad request when there is no body content or invalid body content', () => {
    return mockRequest
      .post(API_URL)
      .catch(err => {
        expect(err.response.text).toBe('Bad Request');
        expect(err.status).toBe(400);
      });
  });

  it('should  respond with the body content', () => {
    let coffeeModel = {name:'name', roast: 'roast', coffee: 'coffee'};
    return mockRequest
      .post(API_URL)
      .send(coffeeModel)
      .then(data => {
        expect(data.body.coffee).toBe('coffee');
      });
  });




});



describe('coffee model', () => {

  it('should create coffee', () => {
    return Coffee
      .create({name: 'name', roast: 'roast', coffee: 'coffee'})
      .then(coffee => {
        expect(coffee.name).toBe('name');
      });
  });

});


// describe('parks', () => {

//   it('should populate parks', () => {
//     const parksModel = {location: 'seattle'};
//     const seattlePark = await Parks.create(parksModel);

//     expect(seattlePark.location).toBe(parksModel.location);

//     const coffeModel = {name:'name', roast: 'roast', coffee: 'coffee'};

//     const roastCoffee = await Coffee.create(coffeModel);

//     const findCoffee = await Coffee
//       .findById(roastCoffee._id)
//       .populate('parks')
//       .exec();

//     expect(findCoffee.parks.location).toBe(parksModel.location);
//   });
// });

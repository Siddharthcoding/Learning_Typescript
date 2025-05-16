import request from 'supertest';
import { type Express } from 'express-serve-static-core';
import { createApp } from '../createApp';

describe('/api/users', () => {
    let app: Express;

    beforeAll(() => {
        app = createApp();
    });

    it('should return a list of users when getting /api/users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.body).toStrictEqual([]);
    })

});
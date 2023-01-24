import ErrorRepository from '../errorRepository';

const map = new ErrorRepository(1, 'HTTP response status codes');

test('testing ErrorRepository for code 101', () => {
    const result = map.translate(101);
    expect(result).toEqual('Switching Protocols');
});

test('testing ErrorRepository for code 204', () => {
    const result = map.translate(204);
    expect(result).toEqual('No Content');
});

test('testing ErrorRepository for code 400', () => {
    const result = map.translate(400);
    expect(result).toEqual('Bad Request');
});

test('testing ErrorRepository for code 404', () => {
    const result = map.translate(404);
    expect(result).toEqual('Not Found');
});

test('testing ErrorRepository for Unknown error', () => {
	const result = map.translate(301);
	expect(result).toBe('Unknown error');
});

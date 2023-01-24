export default class ErrorRepository {
    constructor(key, value) {
        this.key = key;
        this.value = value;

        this.errors = new Map();
        this.errors.set(101, 'Switching Protocols');
        this.errors.set(204, 'No Content');
        this.errors.set(400, 'Bad Request');
        this.errors.set(404, 'Not Found');
    }

    translate(code) {
        if (this.errors.has(code)) {
            return this.errors.get(code);
        }
            return 'Unknown error';
    }
}

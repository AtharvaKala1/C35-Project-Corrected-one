class Form {

    constructor() {
        this.input = createInput("Name");
        this.email = createInput("email");
        this.button = createButton('Submit');

    }
    display() {
        this.input.position(800, 360)
        this.email.position(800, 400)
        this.button.position(800, 440)
    }
}
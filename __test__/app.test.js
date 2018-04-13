import { shallow, render } from "enzyme";
import App from './app';

describe("Enzyme Shallow", () => {
    it("App title should be Todos", () => {
        let app = shallow(<App />);
        expect(app.find("h1").text()).toBe('Todos');
    });
});

describe("Enzyme Render", () => {
    it("Todo item should not hava todo-done class", () => {
        let app = render(<App />);
        expect(app.find(".todo-done").length).toBe(0);
    });
});


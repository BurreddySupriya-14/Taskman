import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/jest-dom';
import "@testing-library/jest-dom";
import App from './App';

describe("App component test suite", () => {
    it("should render heading text and calculate sum", () => {
        render(<App />);

        expect(screen.getByText("Hello React Testing")).toBeInTheDocument();

        const inputs = screen.getAllByRole("spinbutton");
        const button = screen.getAllByText("Calculate Sum");

        fireEvent.change(inputs[0], {target: { value: "4" }});
        fireEvent.change(inputs[1], {target: { value: "6" }});

        fireEvent.click(button);
        expect(screen.getByText("Result: 10")).toBeInTheDocument();
    });
});

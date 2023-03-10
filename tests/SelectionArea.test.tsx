import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectionArea from "../src/components/SelectionArea";

const selections = ["test1", "test2", "test3"];

describe("<SelectionArea />", () => {
	it("should render", () => {
		const { container } = render(<SelectionArea selections={selections} selected="test1" setSelected={() => {}} />);

		const containerDiv = container.firstElementChild;
		const selectedInput = containerDiv?.firstElementChild;
		const selectionsDiv = containerDiv?.lastElementChild;

		expect(containerDiv?.classList.contains("selection-area")).toBe(true);
		expect(selectedInput?.classList.contains("selected-value")).toBe(true);
		expect(selectionsDiv?.classList.contains("selections")).toBe(true);
		expect(selectionsDiv?.firstElementChild?.classList.contains("selection")).toBe(true);
		expect(selectionsDiv?.childElementCount).toBe(selections.length);
		selectionsDiv?.childNodes.forEach((child, idx) => {
			expect(child.textContent).toBe(selections[idx]);
		});
	});
});

import React, { useEffect, useCallback, useState } from "react";
import "./SelectionArea.css";

export interface iSelectionArea {
	selections: string[];
	selected: string;
	setSelected?: (selection: string) => void;
	placeholder?: string;
}

export const SelectionArea: React.FC<iSelectionArea> = ({ selections, selected, setSelected, placeholder }) => {
	const [uniqueSelections, setUniqueSelections] = useState(selections);

	useEffect(() => {
		const selectionsSet = new Set(selections);
		setUniqueSelections(Array.from(selectionsSet));
	}, [selections]);

	const handleSelection = useCallback((selection: string) => {
		if (setSelected) {
			setSelected(selection);
		}
	}, []);

	const selectedClass = useCallback(
		(selection: string) => {
			if (selection === selected) {
				return "selection selected";
			}
			return "selection";
		},
		[selected]
	);

	return (
		<div className="selection-area">
			<input className="selected-value" />
			<div className="selections">
				{uniqueSelections &&
					uniqueSelections.map((selection, idx) => {
						return (
							<div key={`selection-${idx}`} className={selectedClass(selection)} onClick={() => handleSelection(selection)}>
								{selection}
							</div>
						);
					})}
			</div>
		</div>
	);
};

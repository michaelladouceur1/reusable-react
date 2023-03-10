import React from "react";
import "./SelectionArea.css";

export interface iSelectionArea {
	selections: string[];
	selected: string;
	setSelected: () => void;
	placeholder?: string;
}

export const SelectionArea: React.FC<iSelectionArea> = ({ selections, selected, setSelected, placeholder }) => {
	return (
		<div className="selection-area">
			<input className="selected-value" />
			<div className="selections">
				{selections.map((selection, idx) => {
					return (
						<div key={`selection-${idx}`} className="selection">
							{selection}
						</div>
					);
				})}
			</div>
		</div>
	);
};

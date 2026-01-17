import { useRef, useEffect } from 'react';
import './VisualSelector.css';

export function VisualSelector({ title, options, selected, onSelect }) {
    const scrollRef = useRef(null);

    // Auto-scroll to selected item if needed (optional polish)

    return (
        <div className="selector-section">
            <div className="selector-header">
                <h3>{title}</h3>
                <span className="selection-badge">
                    {selected ? selected.label : 'None'}
                </span>
            </div>

            <div className="options-grid" ref={scrollRef}>
                {options.map((option) => {
                    const isSelected = selected?.id === option.id;
                    return (
                        <button
                            key={option.id}
                            className={`option-card ${isSelected ? 'selected' : ''}`}
                            onClick={() => onSelect(isSelected ? null : option)}
                        >
                            <div className="card-content">
                                <span className="card-label">{option.label}</span>
                                <span className="card-desc">{option.description}</span>
                            </div>
                            {isSelected && <div className="active-indicator" />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

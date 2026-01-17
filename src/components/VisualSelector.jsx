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
                            className={`option-card ${isSelected ? 'selected' : ''} ${option.image ? 'has-image' : ''}`}
                            onClick={() => onSelect(isSelected ? null : option)}
                            style={option.image ? { backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%), url(${option.image})` } : {}}
                        >
                            <div className="card-content">
                                <span className="card-label">{option.label}</span>
                                {!option.image && <span className="card-desc">{option.description}</span>}
                            </div>
                            {isSelected && <div className="active-indicator" />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

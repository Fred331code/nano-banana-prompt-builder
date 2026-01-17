import { useState } from 'react';
import { Clipboard, Check, Code, FileText } from 'lucide-react';
import './LivePreview.css';

export function LivePreview({ prompt, variations, mode, onModeChange, onCopyJson }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="preview-container">
            <div className="preview-header">
                <div className="mode-toggles">
                    <button
                        className={`mode-btn ${mode === 'single' ? 'active' : ''}`}
                        onClick={() => onModeChange('single')}
                    >
                        <FileText size={16} /> Single Shot
                    </button>
                    <button
                        className={`mode-btn ${mode === 'multi-angle' ? 'active' : ''}`}
                        onClick={() => onModeChange('multi-angle')}
                    >
                        <Code size={16} /> Multi-Angle
                    </button>
                </div>

                <button className="action-btn" onClick={onCopyJson}>
                    Copy JSON
                </button>
            </div>

            <div className="preview-scroll">
                {mode === 'single' ? (
                    <div className="prompt-display main-prompt">
                        <span className="label">Generated Prompt</span>
                        <p>{prompt || "Start by entering a subject or selecting cinematic options..."}</p>
                        <button className="copy-icon-btn" onClick={() => handleCopy(prompt)}>
                            {copied ? <Check size={18} color="var(--accent-primary)" /> : <Clipboard size={18} />}
                        </button>
                    </div>
                ) : (
                    <div className="variations-list">
                        {variations.length > 0 ? variations.map((v, i) => (
                            <div key={i} className="prompt-display variation-card">
                                <span className="label">{v.label}</span>
                                <p>{v.prompt}</p>
                                <button
                                    className="copy-icon-btn"
                                    onClick={() => {
                                        navigator.clipboard.writeText(v.prompt);
                                    }}
                                >
                                    <Clipboard size={18} />
                                </button>
                            </div>
                        )) : (
                            <div className="empty-variations">
                                Enter subject details to see multi-angle variations.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

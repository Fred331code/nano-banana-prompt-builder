import { CAMERAS, LENSES, LIGHTING, ANGLES, SHOTS, GENRES, STYLES, LOOKS, FILTERS } from '../data/cinematicOptions';
import { VisualSelector } from './VisualSelector';
import './ControlPanel.css';

export function ControlPanel({ settings, onUpdate, subject, onUpdateSubject }) {
    return (
        <div className="control-panel">
            <div className="control-section subject-inputs">
                <h3>Subject & Scene</h3>
                <input
                    type="text"
                    placeholder="Character / Subject (e.g. A cyberpunk samurai)"
                    value={subject.character}
                    onChange={(e) => onUpdateSubject('character', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Outfit / Details (e.g. Neon armor, katana)"
                    value={subject.outfit}
                    onChange={(e) => onUpdateSubject('outfit', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Action (e.g. Drawing a sword)"
                    value={subject.action}
                    onChange={(e) => onUpdateSubject('action', e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Environment (e.g. Rainy Tokyo street)"
                    value={subject.environment}
                    onChange={(e) => onUpdateSubject('environment', e.target.value)}
                />
            </div>

            <div className="control-section">
                <h2 className="section-title">Style & Aesthetics</h2>

                <VisualSelector
                    title="Genre & Atmosphere"
                    options={GENRES}
                    selected={settings.genre}
                    onSelect={(val) => onUpdate('genre', val)}
                />

                <VisualSelector
                    title="Photographer / Director Style"
                    options={STYLES}
                    selected={settings.style}
                    onSelect={(val) => onUpdate('style', val)}
                />

                <VisualSelector
                    title="Film Stock / Movie Look"
                    options={LOOKS}
                    selected={settings.look}
                    onSelect={(val) => onUpdate('look', val)}
                />

                <VisualSelector
                    title="Creative Filters"
                    options={FILTERS}
                    selected={settings.filter}
                    onSelect={(val) => onUpdate('filter', val)}
                />
            </div>

            <div className="control-section">
                <h2 className="section-title">Technical Camera</h2>

                <VisualSelector
                    title="Camera System"
                    options={CAMERAS}
                    selected={settings.camera}
                    onSelect={(val) => onUpdate('camera', val)}
                />

                <VisualSelector
                    title="Lens"
                    options={LENSES}
                    selected={settings.lens}
                    onSelect={(val) => onUpdate('lens', val)}
                />

                <VisualSelector
                    title="Lighting Mood"
                    options={LIGHTING}
                    selected={settings.lighting}
                    onSelect={(val) => onUpdate('lighting', val)}
                />

                <VisualSelector
                    title="Camera Angle"
                    options={ANGLES}
                    selected={settings.angle}
                    onSelect={(val) => onUpdate('angle', val)}
                />

                <VisualSelector
                    title="Shot Type"
                    options={SHOTS}
                    selected={settings.shot}
                    onSelect={(val) => onUpdate('shot', val)}
                />
            </div>
            );
}

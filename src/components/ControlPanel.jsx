import { CAMERAS, LENSES, LIGHTING, ANGLES, SHOTS } from '../data/cinematicOptions';
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
                    placeholder="Environment (e.g. Rainy Tokyo street)"
                    value={subject.environment}
                    onChange={(e) => onUpdateSubject('environment', e.target.value)}
                />
            </div>

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

import { useState, useMemo } from 'react';

export function usePromptBuilder() {
    const [subject, setSubject] = useState({
        character: '',
        outfit: '',
        action: '',
        environment: ''
    });

    const [settings, setSettings] = useState({
        camera: null, // object from CAMERAS
        lens: null, // object from LENSES
        lighting: null, // object from LIGHTING
        angle: null, // object from ANGLES
        shot: null, // object from SHOTS
    });

    const [mode, setMode] = useState('single'); // 'single' | 'multi-angle'

    // Construct the main prompt string
    const prompt = useMemo(() => {
        const segments = [];

        // 1. Subject Layer
        let subjectPart = '';
        if (subject.character) subjectPart += subject.character;
        if (subject.outfit) subjectPart += `, wearing ${subject.outfit}`;
        if (subject.action) subjectPart += `, ${subject.action}`;
        if (subject.environment) subjectPart += `, in ${subject.environment}`;

        if (subjectPart) segments.push(subjectPart);

        // 2. Technical Layer
        if (settings.shot) segments.push(settings.shot.value);
        if (settings.angle) segments.push(settings.angle.value);
        if (settings.camera) segments.push(settings.camera.value);
        if (settings.lens) segments.push(settings.lens.value);
        if (settings.lighting) segments.push(settings.lighting.value);

        // 3. Quality Boosters (Generic for now)
        segments.push('hyper-realistic, 8k, cinematic color grading, masterpiece');

        return segments.join(', ');
    }, [subject, settings]);

    // Generate variations for Multi-Angle Consistency
    const variations = useMemo(() => {
        if (mode !== 'multi-angle') return [];

        const baseContext = [];
        if (subject.character) baseContext.push(subject.character);
        if (subject.outfit) baseContext.push(`wearing ${subject.outfit}`);
        if (subject.environment) baseContext.push(`in ${subject.environment}`);

        const baseStr = baseContext.join(', ');
        const technical = [
            settings.camera?.value,
            settings.lighting?.value,
            'consistent character',
            '8k'
        ].filter(Boolean).join(', ');

        return [
            { label: 'Wide Shot', prompt: `${baseStr}, wide shot establishing the scene, ${technical}` },
            { label: 'Close-Up', prompt: `${baseStr}, close-up on face, detailed expression, ${technical}` },
            { label: 'Side Profile', prompt: `${baseStr}, side profile view, ${technical}` },
            { label: 'Low Angle', prompt: `${baseStr}, low angle dynamic shot, ${technical}` }
        ];
    }, [subject, settings, mode]);

    const updateSubject = (field, value) => {
        setSubject(prev => ({ ...prev, [field]: value }));
    };

    const updateSetting = (category, value) => {
        setSettings(prev => ({ ...prev, [category]: value }));
    };

    // Export as JSON
    const getJson = () => {
        return JSON.stringify({
            version: "1.0",
            subject,
            settings: {
                camera: settings.camera?.id,
                lens: settings.lens?.id,
                lighting: settings.lighting?.id,
                angle: settings.angle?.id,
                shot: settings.shot?.id
            },
            generatedPrompt: prompt,
            variations: variations.map(v => ({ label: v.label, prompt: v.prompt }))
        }, null, 2);
    };

    return {
        subject,
        updateSubject,
        settings,
        updateSetting,
        prompt,
        mode,
        setMode,
        variations,
        getJson
    };
}

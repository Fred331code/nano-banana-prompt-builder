export const CAMERAS = [
    { id: 'panaflex', label: 'Panavision Panaflex', description: 'The Hollywood Standard. Iconic film grain and color rendering.', value: 'shot on Panavision Panaflex Millennium XL2' },
    { id: 'arri_alexa', label: 'Arri Alexa Mini', description: 'Digital crispness with high dynamic range. Modern blockbuster look.', value: 'shot on Arri Alexa Mini LF' },
    { id: 'imax', label: 'IMAX 70mm', description: 'Unparalleled detail and massive scale. Perfect for landscapes.', value: 'shot on IMAX 9802' },
    { id: 'red_v_raptor', label: 'RED V-Raptor', description: 'Hyper-sharp 8K resolution with vibrant saturation.', value: 'shot on RED V-Raptor XL 8K' },
    { id: 'leica_m6', label: 'Leica M6', description: 'Classic street photography aesthetic. High contrast B&W potential.', value: 'shot on Leica M6' },
    { id: 'polaroid', label: 'Polaroid SX-70', description: 'Nostalgic, soft focus, instant film vintage look.', value: 'Polaroid SX-70 film aesthetic' },
];

export const LENSES = [
    { id: '35mm', label: '35mm Prime', description: 'Natural field of view. Versatile storytelling lens.', value: '35mm lens' },
    { id: '50mm', label: '50mm Prime', description: 'Nifty Fifty. True-to-life perspective.', value: '50mm lens' },
    { id: '85mm', label: '85mm Portrait', description: 'Flattering compression/bokeh. Ideal for characters.', value: '85mm lens, f/1.8' },
    { id: 'anamorphic', label: 'Anamorphic', description: 'Cinematic widescreen, oval bokeh, horizontal flares.', value: 'Panavision C-Series Anamorphic lens' },
    { id: 'fisheye', label: '8mm Fisheye', description: 'Extreme distortion for stylized, edgy visuals.', value: '8mm fisheye lens' },
    { id: 'macro', label: '100mm Macro', description: 'Extreme close-up detail.', value: '100mm macro lens' },
];

export const LIGHTING = [
    { id: 'chiaroscuro', label: 'Chiaroscuro', description: 'High contrast between light and dark. Dramatic and moody.', value: 'cinematic chiaroscuro lighting, dramatic shadows' },
    { id: 'rembrandt', label: 'Rembrandt', description: 'Classic portrait lighting with the signature triangle.', value: 'Rembrandt lighting' },
    { id: 'neon_noir', label: 'Neon Noir', description: 'Cyberpunk aesthetic with vibrant pinks, cyans, and deep blacks.', value: 'neon noir lighting, cyan and magenta volumetric fog' },
    { id: 'golden_hour', label: 'Golden Hour', description: 'Warm, soft natural sunlight. Romantic and magical.', value: 'golden hour lighting, warm sun flares, soft backlighting' },
    { id: 'overcast', label: 'Soft Overcast', description: 'Diffused, even lighting. Great for realism.', value: 'soft overcast lighting, diffused shadows' },
    { id: 'studio', label: 'Studio strobe', description: 'Clean, commercial high-key lighting.', value: 'professional studio strobe lighting, white background, high key' },
];

export const ANGLES = [
    { id: 'eye_level', label: 'Eye Level', description: 'Neutral, connecting with the subject.', value: 'eye-level shot' },
    { id: 'low_angle', label: 'Low Angle', description: 'Looking up at subject. Implies power or dominance.', value: 'low angle shot, looking up' },
    { id: 'high_angle', label: 'High Angle', description: 'Looking down. Implies vulnerability.', value: 'high angle shot, looking down' },
    { id: 'bird_eye', label: 'Bird\'s Eye', description: 'Directly overhead. Topographic view.', value: 'bird\'s eye view, top-down shot' },
    { id: 'dutch', label: 'Dutch Angle', description: 'Tilted horizon. Creates tension or disorientation.', value: 'Dutch angle shot, tilted horizon' },
    { id: 'over_shoulder', label: 'Over the Shoulder', description: 'Conversational perspective.', value: 'over-the-shoulder shot' },
];

export const SHOTS = [
    { id: 'wide', label: 'Wide Shot', description: 'Establishes the environment.', value: 'wide shot' },
    { id: 'medium', label: 'Medium Shot', description: 'Waist up. Standard character framing.', value: 'medium shot' },
    { id: 'closeup', label: 'Close-Up', description: 'Focus on emotion and face details.', value: 'close-up shot' },
    { id: 'extreme_closeup', label: 'Extreme Close-Up', description: 'Macro details, eyes or textures.', value: 'extreme close-up' },
    { id: 'cowboy', label: 'Cowboy Shot', description: 'Mid-thigh up. Heroic stance.', value: 'cowboy shot, american shot' },
];

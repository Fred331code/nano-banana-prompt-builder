export const CAMERAS = [
    { id: 'panaflex', label: 'Panavision Panaflex', description: 'The Hollywood Standard. Iconic film grain.', value: 'shot on Panavision Panaflex Millennium XL2', image: '/assets/options/camera-panaflex.png' },
    { id: 'arri_alexa', label: 'Arri Alexa Mini', description: 'Digital crispness with high dynamic range.', value: 'shot on Arri Alexa Mini LF' },
    { id: 'imax', label: 'IMAX 70mm', description: 'Unparalleled detail and massive scale.', value: 'shot on IMAX 9802' },
    { id: 'red_v_raptor', label: 'RED V-Raptor', description: 'Hyper-sharp 8K resolution.', value: 'shot on RED V-Raptor XL 8K' },
    { id: 'leica_m6', label: 'Leica M6', description: 'Classic street photography aesthetic.', value: 'shot on Leica M6' },
    { id: 'polaroid', label: 'Polaroid SX-70', description: 'Nostalgic, soft focus, instant film.', value: 'Polaroid SX-70 film aesthetic' },
];

export const LENSES = [
    { id: '35mm', label: '35mm Prime', description: 'Natural field of view. Versatile.', value: '35mm lens', image: '/assets/options/lens-35mm.png' },
    { id: '50mm', label: '50mm Prime', description: 'Nifty Fifty. True-to-life.', value: '50mm lens' },
    { id: '85mm', label: '85mm Portrait', description: 'Flattering compression/bokeh.', value: '85mm lens, f/1.8' },
    { id: 'anamorphic', label: 'Anamorphic', description: 'Cinematic widescreen, oval bokeh.', value: 'Panavision C-Series Anamorphic lens' },
    { id: 'fisheye', label: '8mm Fisheye', description: 'Extreme distortion.', value: '8mm fisheye lens' },
    { id: 'macro', label: '100mm Macro', description: 'Extreme close-up detail.', value: '100mm macro lens' },
];

export const LIGHTING = [
    { id: 'chiaroscuro', label: 'Chiaroscuro', description: 'High contrast, dramatic shadows.', value: 'cinematic chiaroscuro lighting, dramatic shadows', image: '/assets/options/light-chiaroscuro.png' },
    { id: 'rembrandt', label: 'Rembrandt', description: 'Classic portrait triangle lighting.', value: 'Rembrandt lighting' },
    { id: 'neon_noir', label: 'Neon Noir', description: 'Cyberpunk pinks and cyans.', value: 'neon noir lighting, cyan and magenta volumetric fog' },
    { id: 'golden_hour', label: 'Golden Hour', description: 'Warm natural sunlight.', value: 'golden hour lighting, warm sun flares' },
    { id: 'overcast', label: 'Soft Overcast', description: 'Diffused, even lighting.', value: 'soft overcast lighting, diffused shadows' },
    { id: 'studio', label: 'Studio Strobe', description: 'Clean, commercial high-key.', value: 'professional studio strobe lighting, high key' },
];

export const ANGLES = [
    { id: 'closeup', label: 'Close-Up', description: 'Connection, engagement', value: 'Eye-level close-up shot, cinematic lighting, showing detailed facial expression', image: '/assets/options/angle-close-up.png' },
    { id: 'extreme_closeup', label: 'Extreme Close-Up', description: 'Intimacy, intensity', value: 'Extreme close-up of face, showing detailed emotional expression, cinematic lighting', image: '/assets/options/angle-extreme-close-up.png' },
    { id: 'macro', label: 'Macro Shot', description: 'Suspense, anticipation', value: 'Macro shot focusing on details, extreme detail, cinematic lighting', image: '/assets/options/angle-macro-shot.png' },
    { id: 'medium', label: 'Medium Shot', description: 'Isolation, context', value: 'Medium shot standing in the environment, cinematic composition', image: '/assets/options/angle-medium-shot.png' },
    { id: 'high_angle', label: 'High Angle', description: 'Defeat, submission', value: 'High angle shot seen from above, looking up, cinematic lighting', image: '/assets/options/angle-high-angle-shot.png' },
    { id: 'low_angle', label: 'Low Angle', description: 'Hero moment, authority', value: 'Low angle shot seen from below, looking down, cinematic lighting, powerful stance', image: '/assets/options/angle-low-angle-shot.png' },
    { id: 'eye_level', label: 'Eye Level', description: 'Neutral, equal relationship', value: 'Eye level shot, neutral angle, cinematic lighting', image: '/assets/options/angle-eye-level-shot.png' },
    { id: 'low_closeup', label: 'Low Angle Close-Up', description: 'Powerful and intimate', value: 'Close-up shot, low angle seen from below, cinematic lighting', image: '/assets/options/angle-low-angle-close-up.png' },
    { id: 'high_wide', label: 'High Angle Wide', description: 'Insignificance, isolation', value: 'Wide shot, high angle seen from above, showing full environment, cinematic lighting', image: '/assets/options/angle-high-angle-wide-shot.png' },
    { id: 'low_extreme', label: 'Low Extreme CU', description: 'Maximum intensity', value: 'Extreme close-up of face, low angle from below, dramatic lighting', image: '/assets/options/angle-low-angle-extreme-close-up.png' },
    { id: 'ots', label: 'Over-the-Shoulder', description: 'Observation, dialogue', value: 'Over the shoulder shot looking past subject, cinematic framing', image: '/assets/options/angle-over-the-shoulder.png' },
    { id: 'bird_eye', label: 'Bird\'s Eye View', description: 'God\'s view, surveillance', value: 'Bird\'s eye view overhead shot, directly from above', image: '/assets/options/angle-birds-eye-view.png' },
    { id: 'pov', label: 'Point of View', description: 'Maximum immersion', value: 'Point of view shot from perspective, looking out', image: '/assets/options/angle-point-of-view.png' },
    { id: 'dutch', label: 'Dutch Angle', description: 'Tension, disorientation', value: 'Dutch angle tilted shot, off-kilter framing, cinematic lighting', image: '/assets/options/angle-dutch-angle.png' },
    { id: 'two_shot', label: 'Two-Shot', description: 'Dialogue, conflict', value: 'Two-shot of characters standing together, cinematic framing', image: '/assets/options/angle-two-shot.png' },
    { id: 'profile', label: 'Profile Shot', description: 'Contemplation, artistic', value: 'Side profile shot, cinematic lighting, sharp focus on facial features', image: '/assets/options/angle-profile-shot.png' },
    { id: 'three_quarter', label: 'Three-Quarter', description: 'Natural, candid', value: 'Three-quarter angle shot, slightly turned from camera, cinematic lighting', image: '/assets/options/angle-three-quarter-angle.png' },
    { id: 'worm', label: 'Worm\'s Eye View', description: 'Maximum power, epic', value: 'Extreme low angle worm\'s eye view, camera at ground level looking up, dramatic lighting', image: '/assets/options/angle-worms-eye-view.png' },
    { id: 'canted', label: 'Canted Frame', description: 'Extreme chaos, madness', value: 'Extreme canted frame, heavily tilted angle, disorienting composition', image: '/assets/options/angle-canted-frame-extreme-dutch.png' },
    { id: 'silhouette', label: 'Silhouette Shot', description: 'Mystery, drama', value: 'Silhouette shot backlit against background, dramatic contrast, cinematic composition', image: '/assets/options/angle-silhouette-shot.png' },
];

export const MOVEMENTS = [
    { id: 'tracking', label: 'Tracking / Dolly', description: 'Action, following', value: 'Smooth tracking shot following subject' },
    { id: 'orbit', label: 'Orbit', description: 'Dramatic reveal', value: 'Camera orbits around subject, smooth rotation' },
    { id: 'push_in', label: 'Push In', description: 'Building intensity', value: 'Slow push in toward subject, smooth forward camera movement' },
    { id: 'pull_out', label: 'Pull Out', description: 'Revealing context', value: 'Slow pull out from subject, revealing environment' },
    { id: 'handheld', label: 'Handheld', description: 'Raw, chaotic', value: 'Handheld camera movement, slight shake, raw cinematic style' },
    { id: 'static', label: 'Static', description: 'Tension, intimate', value: 'Static camera, no movement, locked off shot' },
    { id: 'crane_up', label: 'Crane Up', description: 'Epic reveal', value: 'Camera cranes up, rising movement revealing landscape' },
    { id: 'crane_down', label: 'Crane Down', description: 'Dramatic approach', value: 'Camera cranes down toward subject, descending movement' },
    { id: 'pan', label: 'Pan', description: 'Showing breadth', value: 'Slow horizontal pan, smooth sweeping movement' },
    { id: 'tilt', label: 'Tilt', description: 'Character reveal', value: 'Slow tilt up, vertical camera movement, dramatic reveal' },
];

// --- NEW STYLE & AESTHETICS CATEGORIES ---

export const GENRES = [
    { id: 'cyberpunk', label: 'Cyberpunk', description: 'High tech, low life.', value: 'cyberpunk genre, futuristic dystopian', image: '/assets/options/genre-cyberpunk.png' },
    { id: 'noir', label: 'Film Noir', description: 'Dark, cynical, detective style.', value: 'film noir genre, black and white, mysterious', image: '/assets/options/genre-noir.png' },
    { id: 'fantasy', label: 'High Fantasy', description: 'Magic, swords, ethereal.', value: 'high fantasy genre, magical atmosphere', image: '/assets/options/genre-fantasy.png' },
    { id: 'scifi', label: 'Sci-Fi', description: 'Space, aliens, clean futures.', value: 'science fiction genre, futuristic', image: '/assets/options/genre-scifi.png' },
    { id: 'western', label: 'Western', description: 'Deserts, cowboys, warm tones.', value: 'western genre, americana', image: '/assets/options/genre-western.png' },
];

export const STYLES = [
    { id: 'wes', label: 'Wes Anderson', description: 'Symmetrical, pastel, quirky.', value: 'in the style of Wes Anderson, symmetrical composition, pastel color palette', image: '/assets/options/style-wes.png' },
    { id: 'tarantino', label: 'Tarantino', description: 'Bold, trunk shots, intense.', value: 'in the style of Quentin Tarantino, bold composition', image: '/assets/options/style-tarantino.png' },
    { id: 'villeneuve', label: 'Denis Villeneuve', description: 'Brutalist, atmospheric, epic.', value: 'in the style of Denis Villeneuve, brutalist architecture, atmospheric', image: '/assets/options/style-villeneuve.png' },
    { id: 'ghibli', label: 'Studio Ghibli', description: 'Hand-painted, lush, whimsical.', value: 'in the style of Studio Ghibli, hand-painted background', image: '/assets/options/style-ghibli.png' },
];

export const LOOKS = [
    { id: 'kodak', label: 'Kodak Portra 400', description: 'Warm, natural grain.', value: 'Kodak Portra 400 film stock', image: '/assets/options/look-kodak.png' },
    { id: 'fuji', label: 'Fujifilm Velvia', description: 'Vibrant, high saturation.', value: 'Fujifilm Velvia 50 film stock, saturated colors', image: '/assets/options/look-fuji.png' },
    { id: 'ilford', label: 'Ilford HP5', description: 'Classic black and white.', value: 'Ilford HP5 Plus 400 black and white film', image: '/assets/options/look-ilford.png' },
    { id: 'technicolor', label: 'Technicolor', description: 'Vintage 3-strip color.', value: 'vintage Technicolor process, vibrant red and green', image: '/assets/options/look-technicolor.png' },
];

export const FILTERS = [
    { id: 'none', label: 'None', description: 'Clean output', value: '', image: '' },
    { id: 'vhs', label: 'VHS Glitch', description: '1980s tape aesthetic.', value: 'VHS tracking error, lo-fi aesthetic', image: '/assets/options/filter-vhs.png' },
    { id: 'bloom', label: 'Heavy Bloom', description: 'Dreamy light diffusion.', value: 'heavy bloom, dreamy atmosphere', image: '/assets/options/filter-bloom.png' },
    { id: 'halftone', label: 'Halftone', description: 'Comic book dots.', value: 'halftone dot pattern, comic book style', image: '/assets/options/filter-halftone.png' },
];

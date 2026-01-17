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
    { id: 'eye_level', label: 'Eye Level', description: 'Neutral perspective.', value: 'eye-level shot' },
    { id: 'low_angle', label: 'Low Angle', description: 'Implies dominance.', value: 'low angle shot, looking up', image: '/assets/options/angle-low.png' },
    { id: 'high_angle', label: 'High Angle', description: 'Implies vulnerability.', value: 'high angle shot, looking down' },
    { id: 'bird_eye', label: 'Bird\'s Eye', description: 'Top-down view.', value: 'bird\'s eye view, top-down shot' },
    { id: 'dutch', label: 'Dutch Angle', description: 'Tilted, disorienting.', value: 'Dutch angle shot, tilted horizon' },
    { id: 'over_shoulder', label: 'Over Shoulder', description: 'Conversational.', value: 'over-the-shoulder shot' },
];

export const SHOTS = [
    { id: 'wide', label: 'Wide Shot', description: 'Establishes environment.', value: 'wide shot', image: '/assets/options/shot-wide.png' },
    { id: 'medium', label: 'Medium Shot', description: 'Waist up standard.', value: 'medium shot' },
    { id: 'closeup', label: 'Close-Up', description: 'Focus on emotion.', value: 'close-up shot' },
    { id: 'extreme_closeup', label: 'Extreme Close-Up', description: 'Macro details.', value: 'extreme close-up' },
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

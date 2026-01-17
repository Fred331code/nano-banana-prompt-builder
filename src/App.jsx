import { useState } from 'react'
import { usePromptBuilder } from './hooks/usePromptBuilder'
import { ControlPanel } from './components/ControlPanel'
import { LivePreview } from './components/LivePreview'
import './styles/layout.css'

function App() {
    const {
        subject,
        updateSubject,
        settings,
        updateSetting,
        prompt,
        mode,
        setMode,
        variations,
        getJson
    } = usePromptBuilder();

    const handleCopyJson = () => {
        const jsonStr = getJson();
        navigator.clipboard.writeText(jsonStr);
        // Could add toast notification here
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Nano Banana Pro <span className="highlight">Prompt Builder</span></h1>
            </header>

            <main className="main-layout">
                <div className="scrollable-content">
                    <ControlPanel
                        settings={settings}
                        onUpdate={updateSetting}
                        subject={subject}
                        onUpdateSubject={updateSubject}
                    />
                </div>

                <aside className="fixed-sidebar">
                    <LivePreview
                        prompt={prompt}
                        variations={variations}
                        mode={mode}
                        onModeChange={setMode}
                        onCopyJson={handleCopyJson}
                    />
                </aside>
            </main>
        </div>
    )
}

export default App

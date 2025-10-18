// Configurações
const dyslexiaFont = document.getElementById('dyslexia-font');
const audioInstructions = document.getElementById('audio-instructions');
const timeLimit = document.getElementById('time-limit');
const highContrast = document.getElementById('high-contrast');
const coloredSyllables = document.getElementById('colored-syllables');

// ... (código anterior permanece igual)

function updateSettings() {
    gameState.settings.dyslexiaFont = dyslexiaFont.checked;
        gameState.settings.audioInstructions = audioInstructions.checked;
            gameState.settings.timeLimit = timeLimit.checked;
                gameState.settings.highContrast = highContrast.checked;
                    gameState.settings.coloredSyllables = coloredSyllables.checked;
                        
                            // Aplicar configurações visualmente
                                
                                    // Fonte para Dislexia
                                        if (gameState.settings.dyslexiaFont) {
                                                document.body.classList.add('dyslexia-font');
                                                    } else {
                                                            document.body.classList.remove('dyslexia-font');
                                                                }
                                                                    
                                                                        // Cores de Alto Contraste
                                                                            if (gameState.settings.highContrast) {
                                                                                    document.body.classList.add('high-contrast');
                                                                                        } else {
                                                                                                document.body.classList.remove('high-contrast');
                                                                                                    }
                                                                                                        
                                                                                                            // Sílabas Coloridas (será aplicada quando o jogo for reiniciado)
                                                                                                                
                                                                                                                    saveState();
                                                                                                                    }

                                                                                                                    function updateUIFromState() {
                                                                                                                        // Atualizar configurações
                                                                                                                            dyslexiaFont.checked = gameState.settings.dyslexiaFont;
                                                                                                                                audioInstructions.checked = gameState.settings.audioInstructions;
                                                                                                                                    timeLimit.checked = gameState.settings.timeLimit;
                                                                                                                                        highContrast.checked = gameState.settings.highContrast;
                                                                                                                                            coloredSyllables.checked = gameState.settings.coloredSyllables;
                                                                                                                                                
                                                                                                                                                    // Aplicar configurações
                                                                                                                                                        if (gameState.settings.dyslexiaFont) {
                                                                                                                                                                document.body.classList.add('dyslexia-font');
                                                                                                                                                                    }
                                                                                                                                                                        
                                                                                                                                                                            if (gameState.settings.highContrast) {
                                                                                                                                                                                    document.body.classList.add('high-contrast');
                                                                                                                                                                                        }
                                                                                                                                                                                            
                                                                                                                                                                                                // Atualizar avatar
                                                                                                                                                                                                    userAvatar.textContent = currentAvatar;
                                                                                                                                                                                                        
                                                                                                                                                                                                            // Atualizar progresso
                                                                                                                                                                                                                const totalScore = gameState.mathScore + gameState.portugueseScore;
                                                                                                                                                                                                                    const progressPercentage = Math.min(100, totalScore / 2);
                                                                                                                                                                                                                        overallProgress.style.width = `${progressPercentage}%`;
                                                                                                                                                                                                                        }

                                                                                                                                                                                                                        // ... (restante do código permanece igual)
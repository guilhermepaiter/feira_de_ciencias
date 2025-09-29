// --- Lógica do Gráfico 1 (que você já tinha) ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Gráfico de Aumento do Nível do Mar (1993-2024)
    const ctx = document.getElementById('seaLevelChart');
    if (ctx) {
        // ... (código do gráfico 1 que você já tem) ...
        const years = Array.from({ length: 2025 - 1993 }, (v, i) => 1993 + i);
        const initialLevel = 0; // Nível inicial em 1993 (0 cm de elevação)
        const annualIncrease_mm = 3.3; // 3.3 mm por ano
        const seaLevelData_cm = years.map(year => {
            const yearsPassed = year - 1993;
            return (initialLevel + (yearsPassed * annualIncrease_mm / 10)).toFixed(2); // Converte mm para cm
        });

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Aumento do Nível do Mar (cm)',
                    data: seaLevelData_cm,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    fill: true,
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Nível do Mar (cm)'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Ano'
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Nível do Mar: ${context.raw} cm`;
                            }
                        }
                    }
                }
            }
        });
    }

    // 2. Gráfico de Projeções Futuras (NOVO!)
    const ctx2 = document.getElementById('projectionChart');
    if (ctx2) {
        createProjectionChart(ctx2);
    }
});

// FUNÇÃO PARA CRIAR O GRÁFICO DE PROJEÇÕES
function createProjectionChart(ctx) {
    // Dados de Projeção do seu documento: 0,6 a 2,0 metros até 2100 
    const data = {
        labels: ['Cenário Otimista (2100)', 'Cenário Pessimista (2100)'],
        datasets: [{
            label: 'Elevação Projetada (Metros)',
            data: [0.6, 2.0], // Dados: 0.6m e 2.0m 
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)', // Azul para cenário otimista
                'rgba(255, 99, 132, 0.8)'  // Vermelho para cenário pessimista
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 2.2, // Para dar um espaço no topo
                    title: {
                        display: true,
                        text: 'Elevação Projetada (Metros)'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false // Não precisamos da legenda com apenas 1 dataset simples
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `Elevação: ${context.raw} metros`;
                        }
                    }
                }
            }
        }
    });
}
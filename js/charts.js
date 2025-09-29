document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('seaLevelChart');

    if (ctx) {
        // Dados do documento: "aumento de 10 centímetros em três décadas"
        // e "taxa média de 3,3 mm por ano" de 1993 a 2024
        // Vamos simular os dados para o gráfico de linha
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
});
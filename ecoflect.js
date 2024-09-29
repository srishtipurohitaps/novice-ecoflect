document.getElementById('ai-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const goal = document.getElementById('goal').value;
    const preferences = document.getElementById('preferences').value;
    const outputDiv = document.getElementById('ai-output');

    // AI-like response logic based on user input
    let suggestions = [];

    if (goal.toLowerCase().includes('waste') || preferences.toLowerCase().includes('plastic')) {
        suggestions.push('Try using reusable containers and avoiding single-use plastic.');
        suggestions.push('Start composting your organic waste to reduce landfill burden.');
    }

    if (goal.toLowerCase().includes('energy') || preferences.toLowerCase().includes('renewable')) {
        suggestions.push('Switch to renewable energy sources such as solar or wind energy.');
        suggestions.push('Install energy-efficient LED lighting and appliances at home.');
    }

    if (goal.toLowerCase().includes('water') || preferences.toLowerCase().includes('conservation')) {
        suggestions.push('Consider installing low-flow showerheads and faucets.');
        suggestions.push('Use rainwater harvesting systems to conserve water.');
    }

    // Fallback suggestion if nothing specific is entered
    if (suggestions.length === 0) {
        suggestions.push('Start by tracking your daily carbon footprint with EcoFlect!');
        suggestions.push('Consider reducing meat consumption to lower your environmental impact.');
    }

    // Randomize and display suggestions
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    
    // Display the AI-generated suggestion
    outputDiv.innerHTML = `<p>${randomSuggestion}</p>`;
});

const poll = new Map();

function addOption(option) {
    if (!option) {
        return "Option cannot be empty.";
    }

    if (poll.has(option)) {
        return `Option "${option}" already exists.`;
    }

    poll.set(option, new Set());
    return `Option "${option}" added to the poll.`;
}

function vote(option, voterId) {
    if (!poll.has(option)) {
        return `Option "${option}" does not exist.`;
    }

    const voters = poll.get(option);

    if (voters.has(voterId)) {
        return `Voter ${voterId} has already voted for "${option}".`;
    }

    voters.add(voterId);
    return `Voter ${voterId} voted for "${option}".`;
}

function displayResults() {
    let results = "Poll Results:\n";

    for (const [option, voters] of poll) {
        results += `${option}: ${voters.size} votes\n`;
    }

    return results.trim();
}

addOption("Turkey");
addOption("Morocco");
addOption("Japan");

vote("Turkey", 101);
vote("Turkey", 102);
vote("Morocco", 103);

console.log(displayResults());
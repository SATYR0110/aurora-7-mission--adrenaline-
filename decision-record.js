
function recordDecision({
  currentState,
  decisionTaken,
  reason,
  resourcesAffected,
  resultingState = "Pending confirmation"
}) {
  return [
    "--- Mission Decision Record ---",
    `Current State: ${currentState}`,
    `Decision Taken: ${decisionTaken}`,
    `Reason: ${reason}`,
    `Resources Affected: ${resourcesAffected}`,
    `Resulting State: ${resultingState}`,
    "------------------------------"
  ].join("\n");
}

// Example decision record for demonstration
const decision = recordDecision({
  currentState: "Main reactor power at 61%",
  decisionTaken: "Evaluate backup power availability",
  reason: "Review available resources before recommending action",
  resourcesAffected: "Main reactor and backup power"
});

console.log(decision);

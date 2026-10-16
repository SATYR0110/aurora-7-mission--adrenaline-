
const missionReport = {
  mission: "AURORA-7",
  oxygen: 71,
  mainReactorPower: 61,
  backupPower: 88,
  thrusterFuel: 54,
  status: "NORMAL"
};

function generateMissionReport(report) {
  return `
AURORA-7 Mission Report
-----------------------
Oxygen: ${report.oxygen}%
Main Reactor Power: ${report.mainReactorPower}%
Backup Power: ${report.backupPower}%
Thruster Fuel: ${report.thrusterFuel}%
Status: ${report.status}
`;
}

console.log(generateMissionReport(missionReport));

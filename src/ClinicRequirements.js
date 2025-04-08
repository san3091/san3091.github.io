import React, { useState } from "react";

const ClinicalProjection = () => {
  // State variables for each input
  const [relHours, setRelHours] = useState(0);
  const [nonRelHours, setNonRelHours] = useState(0);
  const [currentWeek, setCurrentWeek] = useState(20);
  const [currentCases, setCurrentCases] = useState(5);
  const [cancellationPercent, setCancellationPercent] = useState(20);

  // Fixed requirements
  const totalRequirement = 400;
  const relationalRequirement = 125;
  const totalWeeks = 65;
  const remainingWeeks = Math.max(1, totalWeeks - currentWeek + 1);

  // Hours calculations
  const totalEarned = relHours + nonRelHours;
  const relNeededTotal = Math.max(0, relationalRequirement - relHours);
  const totalNeededTotal = Math.max(0, totalRequirement - totalEarned);
  const nonRelNeededTotal = Math.max(0, totalNeededTotal - relNeededTotal);

  // Weekly requirement calculations (rounded up)
  const relNeededPerWeek = Math.ceil(relNeededTotal / remainingWeeks);
  const nonRelNeededPerWeek = Math.ceil(nonRelNeededTotal / remainingWeeks);
  const totalNeededPerWeek = Math.ceil(totalNeededTotal / remainingWeeks);

  // Each case contributes 1 hour per week adjusted for cancellations/no-shows
  const effectiveHoursPerCase = 1 - cancellationPercent / 100;
  const projectedTotalCasesNeeded = Math.ceil(totalNeededPerWeek / effectiveHoursPerCase);
  const additionalCasesNeeded = Math.ceil(
    Math.max(0, projectedTotalCasesNeeded - currentCases)
  );

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Clinical Hours and Cases Projection</h1>
      <p>
        Input your current progress below to see the projections for what you need to achieve
        by graduation (400 hours total with at least 125 relational hours) over a 65-week internship
        (from January 2025 to April 2026).
      </p>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Relational Hours to Date (0–150):{" "}
          <input
            type="number"
            min="0"
            max="150"
            value={relHours}
            onChange={(e) => setRelHours(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Non‐Relational Hours to Date (0–300):{" "}
          <input
            type="number"
            min="0"
            max="300"
            value={nonRelHours}
            onChange={(e) => setNonRelHours(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Current Week (1–65):{" "}
          <input
            type="number"
            min="1"
            max="65"
            value={currentWeek}
            onChange={(e) => setCurrentWeek(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Current Number of Cases (0–20):{" "}
          <input
            type="number"
            min="0"
            max="20"
            value={currentCases}
            onChange={(e) => setCurrentCases(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Percent Cancellations/No-Shows (0–50%):{" "}
          <input
            type="number"
            min="0"
            max="50"
            value={cancellationPercent}
            onChange={(e) => setCancellationPercent(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          background: "#f8f8f8",
          padding: "10px",
          marginTop: "20px"
        }}
      >
        <h2>Calculated Projections</h2>
        <p>
          <strong>Remaining Weeks:</strong> {remainingWeeks}
        </p>
        <p>
          <strong>Total Relational Hours Needed:</strong> {Math.ceil(relNeededTotal)}
        </p>
        <p>
          <strong>Total Non-Relational Hours Needed:</strong> {Math.ceil(nonRelNeededTotal)}
        </p>
        <p>
          <strong>Relational Hours Needed per Week:</strong> {relNeededPerWeek}
        </p>
        <p>
          <strong>Non-Relational Hours Needed per Week:</strong> {nonRelNeededPerWeek}
        </p>
        <p>
          <strong>Total Hours Needed per Week:</strong> {totalNeededPerWeek}
        </p>
        <p>
          <strong>Projected Total Cases Needed per Week:</strong> {projectedTotalCasesNeeded}
        </p>
        <p>
          <strong>Additional Cases Needed:</strong> {additionalCasesNeeded}
        </p>
      </div>
    </div>
  );
};

export default ClinicalProjection;


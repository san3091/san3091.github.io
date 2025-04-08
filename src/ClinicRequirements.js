import React, { useState } from "react";

const ClinicalProjection = () => {
  // State variables for inputs
  const [relHours, setRelHours] = useState(0);
  const [nonRelHours, setNonRelHours] = useState(0);
  // Use an ISO date string for the date input; default to internship start date (January 1, 2025)
  const [currentDate, setCurrentDate] = useState("2025-01-01");
  const [currentCases, setCurrentCases] = useState(5);
  const [cancellationPercent, setCancellationPercent] = useState(20);

  // Fixed internship requirements and dates
  const totalRequirement = 400;
  const relationalRequirement = 125;
  const internshipEndDate = new Date("2026-04-30");

  // Compute remaining weeks from the current date input
  const currentDateObj = new Date(currentDate);
  const msPerWeek = 1000 * 60 * 60 * 24 * 7;
  let remainingWeeks = 0;
  if (internshipEndDate > currentDateObj) {
    remainingWeeks = Math.ceil((internshipEndDate - currentDateObj) / msPerWeek);
  }
  // Ensure we display at least 1 week if the internship hasn't ended
  remainingWeeks = Math.max(remainingWeeks, 1);

  // Hours calculations based on requirements so far
  const totalEarned = relHours + nonRelHours;
  const relNeededTotal = Math.max(0, relationalRequirement - relHours);
  const totalNeededTotal = Math.max(0, totalRequirement - totalEarned);
  const nonRelNeededTotal = Math.max(0, totalNeededTotal - relNeededTotal);

  // Weekly requirement calculations (rounded up to whole hours)
  const relNeededPerWeek = Math.ceil(relNeededTotal / remainingWeeks);
  const nonRelNeededPerWeek = Math.ceil(nonRelNeededTotal / remainingWeeks);
  const totalNeededPerWeek = Math.ceil(totalNeededTotal / remainingWeeks);

  // Each case ideally contributes 1 hour per week, adjusted for cancellations/no-shows.
  const effectiveHoursPerCase = 1 - cancellationPercent / 100;
  const projectedTotalCasesNeeded = Math.ceil(totalNeededPerWeek / effectiveHoursPerCase);
  const additionalCasesNeeded = Math.ceil(Math.max(0, projectedTotalCasesNeeded - currentCases));

  return (
    <div style={{ maxWidth: "800px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Clinical Hours and Cases Projection</h1>
      <p>
        Input your current progress below to see the projections for what you need to achieve by graduation
        (400 hours total with at least 125 relational hours before to April 2026).
      </p>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Date (YYYY-MM-DD):{" "}
          <input
            type="date"
            value={currentDate}
            onChange={(e) => setCurrentDate(e.target.value)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Relational Hours to Date:{" "}
          <input
            type="number"
            min="0"
            max="500"
            value={relHours}
            onChange={(e) => setRelHours(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Non‐Relational Hours to Date:{" "}
          <input
            type="number"
            min="0"
            max="500"
            value={nonRelHours}
            onChange={(e) => setNonRelHours(Number(e.target.value))}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label>
          Current Number of Cases:{" "}
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
          Percent Cancellations/No-Shows (e.g. 15%):{" "}
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

      <div style={{ border: "1px solid #ddd", background: "#f8f8f8", padding: "10px", marginTop: "20px" }}>
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

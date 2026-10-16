
# AURORA-7 Workflow Documentation

## Overview

The AURORA-7 Mission Assistant is a conversational prototype created in Botpress Studio.

## Workflow Components

### 1. Mission Report
Provides simulated mission resource values:
- Oxygen: 71%
- Main reactor power: 61%
- Backup power: 88%
- Thruster fuel: 54%

### 2. User Interaction
Users ask mission-related questions in natural language.

### 3. AI Response
The AI Task generates responses using the available mission information and should not invent unknown resource values.

### 4. Decision Recording
Decision-related recommendations can be added to a mission decision record.

### 5. Confirmation
The resulting state remains pending until the outcome is confirmed.

## Important Notes

- Resource values are simulated example data.
- Recommendations are not actual spacecraft commands.
- The standalone JavaScript files demonstrate project logic and are not a full Botpress export.

# Firebase Cloud Firestore Data Structuring Bug

This repository demonstrates a common error in Firebase Cloud Firestore related to incorrect data structuring within nested objects. The bug leads to unexpected behavior during data writing and retrieval, potentially resulting in data inconsistencies or silent failures.

## Bug Description
The `bug.js` file contains code that attempts to write data to Cloud Firestore using a nested object with an inconsistent structure.  This can cause issues when querying or reading back the data later, or lead to errors silently being swallowed.

## Solution
The `bugSolution.js` file provides a corrected version of the code, showcasing proper data structuring and error handling techniques to prevent these issues. This improves data integrity and makes debugging easier.

## How to Reproduce
1. Clone this repository.
2. Set up a Firebase project and initialize the necessary dependencies.
3. Run `bug.js` and observe the behavior (or lack thereof if the error is not properly handled).
4. Run `bugSolution.js` to see the corrected implementation.
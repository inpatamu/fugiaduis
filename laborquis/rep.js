function checkFlags(addFlag, removeFlag) {
  if (addFlag && removeFlag) {
    return "Cancel"; // Return some indication of cancellation
  } else {
    // Proceed with your logic here
    if (addFlag) {
      // Logic for add operation
      return "Add operation";
    } else if (removeFlag) {
      // Logic for remove operation
      return "Remove operation";
    } else {
      // Handle other cases if needed
      return "No operation";
    }
  }
}

// Example usage:
console.log(checkFlags(true, false));  // Output: "Add operation"
console.log(checkFlags(false, true));  // Output: "Remove operation"
console.log(checkFlags(true, true));   // Output: "Cancel"
console.log(checkFlags(false, false)); // Output: "No operation"

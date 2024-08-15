// Create an instance of the SafeArea class
const safeArea = new SafeArea();

// Set the safe area insets (top, right, bottom, left)
safeArea.setInsets(20, 10, 20, 10);

// Get the current safe area insets
const insets = safeArea.getInsets();
console.log(insets); // { top: 20, right: 10, bottom: 20, left: 10 }

// Check if a point is within the safe area
const screenWidth = 375;
const screenHeight = 812;

const pointX = 50;
const pointY = 50;

const isInSafeArea = safeArea.isPointInSafeArea(pointX, pointY, screenWidth, screenHeight);
console.log(isInSafeArea); // true or false depending on the point's location

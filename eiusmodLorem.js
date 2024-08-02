// Assuming adIterator is already defined and initialized
var adCount = adIterator.totalNumEntities();

console.log("Total number of ads: " + adCount);

// Further processing based on the number of ads
if (adCount > 0) {
    // Fetch and display the ads
    for (var i = 0; i < adCount; i++) {
        var ad = adIterator.getAd(i);
        displayAd(ad);
    }
} else {
    console.log("No ads available.");
}

// Function to handle displaying an ad (implementation would depend on your environment)
function displayAd(ad) {
    // Code to display the ad
    console.log("Displaying ad:", ad);
}

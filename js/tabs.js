// Wait for the document to be fully loaded and ready for manipulation
$(document).ready(function () {
  
  // Select all container panels within the tabs
  var tabContainers = $("div.tabs > div");
  
  // Hide all tab panels initially, then display the first one
  tabContainers.hide().filter(":first").show();
  
  // Select the first tab navigation link and add the "selected" class to it
  $("div.tabs ul.tabNavigation a:first").addClass("selected");
  
  // Add a click event handler to all tab navigation links
  $("div.tabs ul.tabNavigation a").click(function () {
    
    // Hide all tab panels with a sliding up animation
    tabContainers.slideUp();
    
    // Display only the tab panel that matches the clicked tab navigation link
    // with a sliding down animation
    tabContainers.filter(this.hash).slideDown();
    
    // Remove the "selected" class from all tab navigation links
    $("div.tabs ul.tabNavigation a").removeClass("selected");
    
    // Add the "selected" class to the clicked tab navigation link
    $(this).addClass("selected");
    
    // Prevent the default link behavior
    return false;
  });
});
// End of the script

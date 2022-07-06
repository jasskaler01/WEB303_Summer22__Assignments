/*
 {Jaskaran Singh}
*/
$(function () {
    $(".tab-list").each(function () {
     
      var $this = $(this); 
      var $activeTab = $this.find("li.active"); 
      var $activeTabLink = $activeTab.find("a"); 
      var $activePanelId = $activeTabLink.attr("href"); 
      var $activePanel = $($activePanelId); 
      $this.on("click", ".tab-control", function (e) {
        
        e.preventDefault(); 
        var $clickedTabLink = $(this); 
        var clickedPanelId = this.hash; 
        if (clickedPanelId && !$clickedTabLink.parent().is(".active")) {
          
          $activePanel.removeClass("active"); 
          $activeTab.removeClass("active"); 
          $activePanel = $(clickedPanelId).addClass("active");
          
  
          $activeTab = $clickedTabLink.parent().addClass("active"); 
        }
      });
    });
    $(".accordion").on("click", ".accordion-control", function (e) {
        e.preventDefault();
        $(this).next(".accordion-panel").not(":animated").slideToggle();
      });
  });
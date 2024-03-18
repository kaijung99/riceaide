  $(document).ready(function(){
    $("#search-term").on("keyup", function(event) {
      // Get the search term
      var searchTerm = $("#search-term").val().toLowerCase();
      // Select all of the cards
      var cards = $(".card");
      // Loop through the cards
      for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var cardText = card.textContent.toLowerCase();
        // Check if the card text contains the search term
        if (cardText.includes(searchTerm)) {
          // Show the card
          card.style.display = "block";
        } else {
          // Hide the card
          card.style.display = "none";
        }
      }
    });
  });
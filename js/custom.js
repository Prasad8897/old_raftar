var terms = ["highly determined", "enthusiastic", "active", "innovative", "creative", "dedicated", "passionate"];

function cycleTerm() {
  var ct = $("#cyclic-text").data("term") || 0;
  $("#cyclic-text").data("term", ct == terms.length -1 ? 0 : ct + 1).text(terms[ct]).fadeIn()
              .delay(1500).fadeOut(200, cycleTerm);
}
//$(cycleTerm);

document.getElementById("searchButton").addEventListener("click", function(event){
  event.preventDefault()
  var searchTerm = document.getElementById("searchInput").value;
  var redirectString = "?name=" + searchTerm;
  window.location.replace("/plantr/search.html" + redirectString);
});

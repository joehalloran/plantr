window.onload = function() {
  var listItems =  document.getElementsByTagName("LI");
  var searchParams = getSearchParameters();
  filterItems(listItems, searchParams);
};


function filterItems(items, searchParams) {
  var itemList = Array.prototype.slice.call(items);
  itemList.forEach(function(thing) {
    var item = thing.childNodes[0];
    if (!(
      item.dataset.sun == searchParams.sun &&
      item.dataset.wet == searchParams.wet &&
      item.dataset.effort == searchParams.effort &&
      item.dataset.type == searchParams.type
    )) {
      thing.style.display = "none";
    }
  });
}

function getSearchParameters() {
      var prmstr = window.location.search.substr(1);
      return prmstr != null && prmstr != "" ? transformToAssocArray(prmstr) : {};
}

function transformToAssocArray( prmstr ) {
    var params = {};
    var prmarr = prmstr.split("&");
    for ( var i = 0; i < prmarr.length; i++) {
        var tmparr = prmarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    return params;
}

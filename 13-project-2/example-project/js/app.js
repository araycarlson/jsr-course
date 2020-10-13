// tells jQuery to be ready to load the page.
// DOM is now ready
$(document).ready(function () {
  // setting variables at the highest scope, to be used at multiple instances of lower scope (functions etc)
  let lat = null;
  let lon = null;
  let searchTerm = null;

  // check if navigator geolocation is available from the browser. This is built in, so no declaration of `navigator` is necessary
  if (navigator.geolocation) {
    // if it is use the getCurrentPosition method to retrieve the Window's location
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    });
  }
  // main search function built off of the search button, grabbed by the ID
  $("#search").on("click", function (e) {
    e.preventDefault(); //
    $("#smallTitle").text("");
    // if they didn't approve geolocation, change title to trash on them a bit
    if (!(lat && lon)) {
      $("#smallTitle").text(
        "bro how am i supposed to get accurate photos if you don't let me know where you are lol"
      );
    }

    // Now that we have the user's location, let's search the API for landscape photos nearby
    let url = "https://api.flickr.com/services/rest/?"; // base URL
    // Object storing each key and value we need in our query.
    // This makes it clear what options we're choosing, and makes it easier
    // to change the values or add/remove options.
    searchTerm = $("#tags").val().split(" ")[0]; // going to string cut at first space otherwise search api will be crazy. if nothing, I default to landscape. i.e. `hello world` becomes `hello`
    let searchOptions = {
      method: "flickr.photos.search", // endpoint
      api_key: "2f5ac274ecfac5a455f38745704ad084", // the api key made 9/23. probably wont last long
      tags: searchTerm || "landscape",
      media: "photos",
      lat: lat || 38.8603131, // you can replace this while line with just 'lat'. Javascript is smart enough
      lon: lon || -77.0832724, // you can replace this while line with just 'lon'. Javascript is smart enough
      radius: 10,
      radius_units: "mi",
      format: "json",
      nojsoncallback: 1,
      extras: "url_n", // you can use 'url_z' for larger larger images
      content_type: 1,
      safe_search: 1,
      per_page: 30, // return 30 photos per page
      sort: "relevance", // sort by relevance
    };
    // loop through the searchOptions object and append each key and value
    // to the url variable to build the full search URL
    for (let key in searchOptions) {
      url += "&" + key + "=" + searchOptions[key];
    }
    // Now that we've built our URL, we can send our GET request
    $.get(url).done(function (response) {
      $("#images").empty(); // emptying in case its a new search
      // below is an extremely long and convoluted way to say "if response exists, check if it has photos, if so check for a photo key, and if that is greater than zero, then there are photos." it is so it does not error out saying "CANT GET LENGTH OF NOTHING"
      if (
        response &&
        response.photos &&
        response.photos.photo &&
        response.photos.photo.length === 0
      ) {
        // if the search returned no photos, change title to trash on them a bit
        $("#results").text(
          `Try searching for something smart. You literally just typed "${searchTerm}"`
        );
      } else {
        // if there are photos, do the append_photos function below
        append_photos(response);
      }
    });
  });

  // loops through the images in the response and with each photo: creates an image html element, sets the source (src) as the photo url/location, adds a CSS class of image (in stles.css this causes the images to be a smaller, nicer format), and appends it to the "images" div
  function append_photos(response) {
    $("#images").empty(); // emptying the images div, in case its a new search and not the first
    $("#results").text(
      `Here are some "${searchTerm}" photos from Flickr near you:  `
    ); // setting the results id div to let them know what they are searching for
    let allData = response.photos.photo;
    $.each(allData, function () {
      // photos without titles may not be carefully tagged, so exclude them
      if (this.title !== "") {
        let element = $("<img>").attr("src", this.url_n).addClass("image");
        $("#images").append(element);
      }
    });
  }
});

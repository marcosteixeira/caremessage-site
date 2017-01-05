// JS for the Careers page

// Get position list from Greenhouse API. Greenhouse calls this as a callback.
// Greenhouse passes in a JS object containing a list of positions.
function careersJobBuilder(data) {
  if (! (data.jobs && data.jobs.length)) {
    return;
  }

  var list = $('.careers-position-list');
  for(var i = 0; i < data.jobs.length; i++) {
    var job = data.jobs[i];

    // Run the content through the text filter twice. First run changes &gt;
    // to >. Second run removes >.
    var contentText = $('<div/>').html(job.content).text();
    contentText = $('<div/>').html(contentText).text();

    // Truncate at a word boundary
    contentText = contentText.substr(0, 400).split(" ").slice(0, -1).join(" ")
      + '...';

    // Append the job information to the list
    list.append('<li><h4>' + job.title + '</h4>' +
      '<div class="careers-job-location">' + job.location.name + '</div>' +
      '<p class="clear">' + contentText + '</p>' +
      '<a href="' + job.absolute_url + '" target="_blank">Learn More</a></li>');
  }
}

// Filter function to truncate image captions
function instafeedCaptionFilter(image) {
  var MAX_LENGTH = 150;

  if (image.caption && image.caption.text) {
    if (image.caption.text.length > MAX_LENGTH) {
      image.shortCaption = image.caption.text.substr(0, MAX_LENGTH).split(" ")
        .slice(0, -1).join(" ") + '...';
    } else {
      image.shortCaption = image.caption.text;
    }
  } else {
    image.shortCaption = '';
  }

  return true;
}

// Initialize and configure the slider
function initSlider() {
  $('#instafeed').slick({
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    variableWidth: true
  });
}

// Get a list of the latest posts from Instagram and create the slider
document.addEventListener("DOMContentLoaded", function(event) {
  var feed = new Instafeed({
    clientId: '067b8df98acd4576b589dccbfd21e078',
    accessToken: '4029666356.067b8df.8a1c86b53c7e4dc480f8492e60be6026',
    get: 'user',
    userId: '4029666356',
    resolution: 'low_resolution',
    limit: 16,
    filter: instafeedCaptionFilter,
    after: initSlider,
    template: '<div class="card">' +
      '<figure><a href="{{link}}" target="_blank"><img src="{{image}}" /></a>' +
      '<figcaption>{{model.shortCaption}}</figcaption></figure></div>'
  });

  feed.run();
});

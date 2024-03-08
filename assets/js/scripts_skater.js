/* http://stackoverflow.com/a/5077091 */
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{(\d+)\}/g, function (m, n) { return args[n]; });
};

$('button.group').on('click', function() {
  if ($(this).hasClass('selected')) {
    $(this).removeClass('selected');
  } else {
    $(this).siblings().removeClass('selected');
    $(this).addClass('selected');
  }

  // Hide/show relevant system versions
  $('.firmware .group').each(function (index, elem) {
    var no_kor = $(elem).hasClass('no_kor') && $('.kor').hasClass('selected');
    var no_usa = $(elem).hasClass('no_usa') && $('.usa').hasClass('selected');
    var no_eur = $(elem).hasClass('no_eur') && $('.eur').hasClass('selected');
    var no_jpn = $(elem).hasClass('no_jpn') && $('.jpn').hasClass('selected');
    if (no_kor || no_usa || no_eur || no_jpn) {
      $(elem).removeClass('selected');
      $(elem).hide();
    } else {
      $(elem).show();
    }
  })

  if (   $('.region').children().hasClass('selected')
      && $('.firmware').children().hasClass('selected')
  ) {
    $('#download').addClass('active');
  } else {
    $('#download').removeClass('active');
  }

});

$('#download').on('click', function() {
  if (!$(this).hasClass('active')) {
    return;
  }

  var region = $('.region').children('.selected').attr('id');
  var firmware_ = $('.firmware').children('.selected').attr('id');

  var base = "https://github.com/SpotPassArchive/SpotPassDumper9/raw/master/assets/super-skaterhax/";
  var filename = "spotpassdumper9_super-skaterhax-{0}-{1}.zip".format(region, firmware_);
  window.location.href = base + filename;
});

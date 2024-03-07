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
    if (no_kor) {
      $(elem).removeClass('selected');
      $(elem).hide();
    } else {
      $(elem).show();
    }
    var eur_only = $(elem).hasClass('eur_only') && $('.eur').hasClass('selected');
    if (eur_only) {
      $(elem).removeClass('selected');
      $(elem).hide();
    } else {
      $(elem).show();
    }
    var jpn_only = $(elem).hasClass('jpn_only') && $('.jpn').hasClass('selected');
    if (jpn_only) {
      $(elem).removeClass('selected');
      $(elem).hide();
    } else {
      $(elem).show();
    }
    var usa_only = $(elem).hasClass('usa_only') && $('.usa').hasClass('selected');
    if (usa_only) {
      $(elem).removeClass('selected');
      $(elem).show();
    } else {
      $(elem).hide();
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

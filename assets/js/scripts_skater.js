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
    var kor_only = $(elem).hasClass('kor_only') && $('.kor').hasClass('selected');
    var usa_only = $(elem).hasClass('usa_only') && $('.usa').hasClass('selected');
    var eur_only = $(elem).hasClass('eur_only') && $('.eur').hasClass('selected');
    var jpn_only = $(elem).hasClass('jpn_only') && $('.jpn').hasClass('selected');
    if (kor_only || usa_only || eur_only || jpn_only) {
      $(elem).show();
    } else {
      $(elem).removeClass('selected');
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

     function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
   }

  var region = $('.region').children('.selected').attr('id');
  var firmware_ = $('.firmware').children('.selected').attr('id');

  var base = "https://github.com/SpotPassArchive/SpotPassDumper9/raw/master/assets/super-skaterhax/";
  var filename = "spotpassdumper9_super-skaterhax-{0}-{1}.zip".format(region, firmware_);
  window.location.href = base + filename;
});

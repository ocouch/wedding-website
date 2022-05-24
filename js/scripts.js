$(document).ready(function() {

  //Enable bootstrap popover plugin
  $('[data-toggle="popover"]').popover();

  /***************** Waypoints ******************/

  $('.wp1').waypoint(function() {
    $('.wp1').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp2').waypoint(function() {
    $('.wp2').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });
  $('.wp3').waypoint(function() {
    $('.wp3').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp4').waypoint(function() {
    $('.wp4').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });
  $('.wp5').waypoint(function() {
    $('.wp5').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp6').waypoint(function() {
    $('.wp6').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });
  $('.wp7').waypoint(function() {
    $('.wp7').addClass('animated fadeInUp');
  }, {
    offset: '75%'
  });
  $('.wp8').waypoint(function() {
    $('.wp8').addClass('animated fadeInLeft');
  }, {
    offset: '75%'
  });
  $('.wp9').waypoint(function() {
    $('.wp9').addClass('animated fadeInRight');
  }, {
    offset: '75%'
  });

  /***************** Initiate Flexslider ******************/
  $('.flexslider').flexslider({
    animation: "slide"
  });

  /***************** Initiate Fancybox ******************/

  $('.single_image').fancybox({
    padding: 4
  });

  $('.fancybox').fancybox({
    padding: 4,
    width: 1000,
    height: 800
  });

  /***************** Tooltips ******************/
  $('[data-toggle="tooltip"]').tooltip();

  /***************** Nav Transformicon ******************/

  /* When user clicks the Icon */
  $('.nav-toggle').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('open');
    event.preventDefault();
  });
  /* When user clicks a link */
  $('.header-nav li a').click(function() {
    $('.nav-toggle').toggleClass('active');
    $('.header-nav').toggleClass('open');

  });

  /***************** Header BG Scroll ******************/

  $(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 20) {
        $('section.navigation').addClass('fixed');
        $('header').css({
          "border-bottom": "none",
          "padding": "35px 0"
        });
        $('header .member-actions').css({
          "top": "26px",
        });
        $('header .navicon').css({
          "top": "34px",
        });
      } else {
        $('section.navigation').removeClass('fixed');
        $('header').css({
          "border-bottom": "solid 1px rgba(255, 255, 255, 0.2)",
          "padding": "50px 0"
        });
        $('header .member-actions').css({
          "top": "41px",
        });
        $('header .navicon').css({
          "top": "48px",
        });
      }
    });
  });
  /***************** Smooth Scrolling ******************/

  $(function() {

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 90
          }, 2000);
          return false;
        }
      }
    });

  });

  /********************** Social Share buttons ***********************/
  var share_bar = document.getElementsByClassName('share-bar');
  var po = document.createElement('script');
  po.type = 'text/javascript';
  po.async = true;
  po.src = 'https://apis.google.com/js/platform.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(po, s);

  for (var i = 0; i < share_bar.length; i++) {
    var html = '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
      'src="https://platform.twitter.com/widgets/tweet_button.html?url=' + encodeURIComponent(window.location) + '&amp;text=' + encodeURIComponent(document.title) + '&amp;via=ramswarooppatra&amp;hashtags=ramandantara&amp;count=horizontal"' +
      'style="width:105px; height:21px;">' +
      '</iframe>' +

      '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(window.location) + '&amp;width&amp;layout=button_count&amp;action=like&amp;show_faces=false&amp;share=true&amp;height=21&amp;appId=101094500229731&amp;width=150" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:150px; height:21px;" allowTransparency="true"></iframe>' +

      '<div class="g-plusone" data-size="medium"></div>';

    // '<iframe src="https://plusone.google.com/_/+1/fastbutton?bsv&amp;size=medium&amp;url=' + encodeURIComponent(window.location) + '" allowtransparency="true" frameborder="0" scrolling="no" title="+1" style="width:105px; height:21px;"></iframe>';

    share_bar[i].innerHTML = html;
    share_bar[i].style.display = 'inline-block';
  }

  /********************** Embed youtube video *********************/
  $('.player').YTPlayer();


  /********************** Toggle Map Content **********************/
  $('#btn-show-map').click(function() {
    $('#map-content').toggleClass('toggle-map-content');
    $('#btn-show-content').toggleClass('toggle-map-content');
  });
  $('#btn-show-content').click(function() {
    $('#map-content').toggleClass('toggle-map-content');
    $('#btn-show-content').toggleClass('toggle-map-content');
  });

  /********************** Add to Calendar **********************/
  var myCalendar = createCalendar({
    options: {
      class: '',
      // You can pass an ID. If you don't, one will be generated for you
      id: ''
    },
    data: {
      // Event title
      title: "Ram and Antara's Wedding",

      // Event start date
      start: new Date('Nov 27, 2017 10:00'),

      // Event duration (IN MINUTES)
      // duration: 120,

      // You can also choose to set an end time
      // If an end time is set, this will take precedence over duration
      end: new Date('Nov 29, 2017 00:00'),

      // Event Address
      address: 'ITC Fortune Park Hotel, Kolkata',

      // Event Description
      description: "We can't wait to see you on our big day. For any queries or issues, please contact Mr. Amit Roy at +91 9876543210."
    }
  });

  $('#add-to-cal').html(myCalendar);


  /********************** RSVP Form **********************/
  //Warn if unsaved changes
  $("#rsvp-form").dirty({preventLeaving: true});

  // Swap +/- symbols on headers when expanding/closing
  $(document).on('hidden.bs.collapse', '.section-title', function(event) {
    let guestnumber = event.target.id.split('___')[1]; //Get guest number
    $('#accordionSymbol___' + guestnumber).addClass("fa-plus");
    $('#accordionSymbol___' + guestnumber).removeClass("fa-minus");
  });

  $(document).on('show.bs.collapse', '.section-title', function(event) {
    let guestnumber = event.target.id.split('___')[1];
    $('#accordionSymbol___' + guestnumber).addClass("fa-minus");
    $('#accordionSymbol___' + guestnumber).removeClass("fa-plus");
  });

  $('#rsvp-form').on('submit', function(e) {
    e.preventDefault(); /* Prevents form submission. See: https://www.w3schools.com/jsref/event_preventdefault.asp */
    var data = $(this).serialize(); /* https://api.jquery.com/serialize/ */

    $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> We are saving your details.'));

    //list of valid UUID hashes for basic typo prevention and (limited) security.
    const md5_hash_array = ['28826f365493f54b25db9cabba2d34d1',
      'a75663ae5a56a0e01eb0e26d7da2eaae',
      'c1cbc7bdc47fe6d3da2cabb171bf2139',
      '3e3e9841940003d52fe5e50496be0514',
      'cd1b0f5d2b511b28b550eacf7e00b56d',
      'a33fe3785715ffadefee260fcda1d14d',
      '569f89e24c5f468bd73830c7924e71c6',
      '16b4e29c3000c83e7c4028120f11fd08',
      '7659e1249004a3129c47861b2a19393c',
      '21319cd98a98e9d74b6fb44ae42e8432',
      '2d0dad563d0146830996bbc252dfe178',
      'fa746f0411ec2588e4b46cbbd6c12d17',
      '09f359c5121af0c06c69f1b218b54976',
      'f0c37696ffb6ff2177d2e1e912662740',
      '9ebfdc0ffa8beaccd3aeeca40844c8ad',
      '1de0932ae408ec2f134345fc2b9063f0',
      'e5c14595830d50b8cd93cb39173e1280',
      '12cf681fc0c24620f7666c628782479b',
      'cd94fdac4d080b4b9d7f40d2a12ffc41',
      '05e3397be7b7e854104fd3f5cf07d0f5',
      'b84ba6b6505e6c064ee8b67422a91410',
      '7f77ab72fddc6069dd78aed50a352866',
      '2101f941de195756180b06d10499c9c1',
      'cbd40409b10d222610feeb8336eafda8',
      'bf97668504c1063baddaf50d85f65e33',
      'fe9010901eef38af3dce8c19194337e2',
      '7ed5c1bbfc518e6a03362e4320c638f4',
      'a8854931f130ef6e44c655cf80830e65',
      'abf5d7b52ab4a97b845ed2ee2ab877c7',
      '29d64f54f02101e18df1538d42192289',
      'a34de8debf1bb84eb01579f18c11badf',
      'f34e56e9c9ca5f7c25498cec19e6ae2a',
      '0a6c677399ae370c10eb3d1e8ae480e7',
      '69d6941cc620454320312b61ca70769b',
      'de263b9a6fd0b3a70b2b13dd8411e10e',
      'fe566e34737383c1f287974cd2f78d59',
      'ab8055fdec4566faa9a0d1c7614cb22b',
      '3417284af6ef427fe7d688a474c0868b',
      'fd7a98cfbee4f5dff63356f024cc9578',
      '01e192619f5a4257070db67638ea6404',
      'a8c85129bdc20f7c2c846db92908ad61',
      '4050e6a8df2654912611690bcaee6ff4',
      'd5800c12c47566ada2ade4a296531b81',
      'c0a1492685d31218dada855ab2b734fd',
      '13249f87a13cea02e2772d379818a2fa',
      '12cc2011828e7a1b4a140ae1a1836369',
      '311b3033f7686e345edbf324bcf019a0',
      '008548e7661c92b3c0f6b53a0375ec07',
      'ad2ee0c38d57d21835ccfb2249e40372',
      'e5f7846a831525cf55ddfa61a1b563e9',
      'a3e810379a4467d552ee0ddac767a5ac',
      'aa356bdfc155d883c852bc551b99ae3a',
      '0764748bd2cea54d6736780491f92a62',
      '6dfdb9d1561d065197814d178c217fa4',
      '6f04bd5bf8612e852241a48edce50db2',
      '49a34e2b58de064820a35637398d63fe',
      'b200ce6e7fe4494a2e0f1af80eca6297',
      '6da57b294656197d9dea8f0f932ae14c',
      'f4c823cff8ec6ea2ced3d1ecde4ee4c4',
      '19cf717faec8e0083efd866ee7b2f7ee',
      'ff30d5b2c7edb697def475aa51411040',
      '1684ba5833f7d2d7b9e3eed62734694e',
      '8264c281b662b55668c41c1fea93bb93',
      '6f22499b249255ef3fef0167a103c72a',
      '083286b90328bed00f8efa103688568e',
      'bb7b536171efcdff8ab33121c6ea16e3',
      '71d737e5c2c1a6b940670bdf21daba62',
      '959ad95ddcf1031713b428d6195b07cf',
      'ed122dea31a6c1411c9f1fd23f0d8b3e',
      '9d31f4a6fb24b95c9de24aed9750d8b1',
      'c88d8038087b0882ca59b14a858a5797',
      '8f6227c1f7f2f7fefdb21015d0258ccc',
      '0b4c5d42626bedaf63f8eb536696dfdc',
      'f9d483be991cc326072dc5c4714e6550',
      '94657a6afe2d529358a69f7ce038bcd6',
      'b0f7b6d1e3cc10d50e44cd4507feea16',
      '1e3156dd7053207b3e7127bd3e62f9bc',
      '13df497b0a2ae1b403bac46ad8cf4339',
      '44b89bad18e24d9c320ccf1bae8d4618',
      '37488e9f8426d9bed2113f713e025385',
      '09f310f0837ed8c94cbaa95d9d6d2c3f',
      '3d9ed8742e950702b95abe94bbe448ec',
      '91343d6d59f9a18ee887718217a56614',
      '34293c228404f1ea5445dcbd879261d3',
      '7d48a47e9c63f175b0217729acc6f24f',
      'd24e82cfa9050af020f709b9fb5ba7df',
      '06b08e404921c2fbe90dc8fd2817fe38',
      'f957da2a76a535a2e1bc585ea289b49a',
      '7acfac8c3a5e6895b0eeac177a7a522f',
      '7785cf3c8edbe588375a7c92aedcc2d8',
      'e5910b3224e45a499f679a75e5936f3b',
      '7e6325506ae4d625f6dbb9e245311181',
      '8ea0d5ca604edba79b4ff39380dcf9cb',
      '50e4ff4fca673058401af0215e6cb80f',
      '15d6d801a15d5db3a7da97c5dbbe3922',
      'e342bd6eb175d70d3a8b575f855f2c97',
      '93255925853c7b79f295b90b75511e74',
      '5b0e3885aeebc035cb74fddee6e1d9e8',
      'bdec359915853c3bfd56154f9010fd5d',
      'eceb006ac7901ec1655f7cd24cf742e1'
    ];

    if (md5_hash_array.indexOf(MD5($('#uuid').val())) < 0) {
      $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your UUID is not valid. Please contact us for help!'));
    } else {
      $.post('https://script.google.com/macros/s/AKfycbzUqz44wOat0DiGjRV1gUnRf4HRqlRARWggjvHKWvqniP7eVDG-/exec', data)
        .done(function(data) {
          console.log(data);
          if (data.result === "error") {
            $('#alert-wrapper').html(alert_markup('danger', data.message));
          } else {
            $('#alert-wrapper').html('');
            $('#rsvp-modal').modal('show');
          }
        })
        .fail(function(data) {
          console.log(data);
          $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> There is some issue with the server. '));
        });
    }
  });

});

//RSVP Form: Copy guest name to the section header
function copyGuestNametoHeader(element) {
  let guestnumber = element.id.split('___')[1];
  let userInput = $("#attendee___" + guestnumber).val();
  if (userInput.length) {
    $("#header___" + guestnumber).text(userInput);
  } else {
    $("#header___" + guestnumber).text("Guest " + guestnumber);
  }
}

//RSVP Form: Add a new guest
function AddAGuest() {
  let guestCount = parseInt($(".guests").length) + 1;

  let guestLimit = 10;

  let template = `<!-- Begin Guest ${guestCount} -->
  <div class="form-input-group multi-input-group guests" id="guest___${guestCount}">

    <!-- Begin Guest ${guestCount} header -->
    <div class="row">
      <button data-toggle="collapse" role="button" type="button" data-target="#guestDiv___${guestCount}" aria-controls="guestDiv___${guestCount}" class="col-xs-12 form-section-title" style="">
        <div class="col-xs-8 col-md-10 text-left" style="padding-left: 25px;" id="header___${guestCount}">Guest ${guestCount}</div>
        <div class="col-xs-4 col-md-2 text-right"><i class="fa fa-minus fa-lg form-section-title" id="accordionSymbol___${guestCount}"></i></div>
      </button>
    </div>
    <!-- End Guest ${guestCount} header -->

    <!-- Begin Guest ${guestCount} details -->
    <div class="row collapse in section-title" aria-expanded="true" id="guestDiv___${guestCount}">

      <!-- Begin Guest ${guestCount} name -->
      <div class="col-xs-12 col-lg-6">
        <div data-toggle="popover" data-trigger="hover focus" data-delay='{ "show": 200, "hide": 650 }' title="Guest names" data-placement="auto bottom" data-html="true"
          data-content="We will print placecards for everyone using names as entered here.<br /><br />Please enter full names for everyone, and double check the spelling">
          <div class="form-input-group">
            <i class="fa fa-user fa-lg"></i>
            <input type="text" name="attendee___${guestCount}" id="attendee___${guestCount}" class="attendee" placeholder="Firstname & Lastname"  oninput="copyGuestNametoHeader(this);" required>
            <i class="fa fa-info-circle fa-lg fa-right"></i>
          </div>
        </div>
      </div>
      <!-- End Guest ${guestCount} name -->

      <!-- Begin Guest ${guestCount} meal -->
      <div class="col-xs-12 col-sm-12 col-lg-6">
        <div class="form-input-group">
          <i class="fa fa-cutlery fa-lg"></i><select name="age_group___${guestCount}" class="" placeholder="Meal type" required>
            <option value="" hidden>Select guest's meal type</option>
            <option value="1">Adult meal</option>
            <option value="2">Children's meal (Under 13)</option>
            <option value="3">No meal (Infant)</option>
          </select>
        </div>
      </div>
      <!-- End Guest ${guestCount} meal -->

      <!-- Begin Guest ${guestCount} Allergens -->
      <div class="col-xs-12">
        <div class="form-input-group">
          <div class="checkbox">
            <label><input type="checkbox" data-toggle="collapse" data-target="#allergens_collapse___${guestCount}" onclick="if ($(this).prop('checked') == false){ $('#allergens_collapse___${guestCount} input').prop('checked', false); $('#allergens_collapse___${guestCount} .other-input').val(''); };" />Food Allergies / Intolerances</label>
          </div>
          <div class="collapse" id="allergens_collapse___${guestCount}" aria-expanded="false">
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Gluten" /> Gluten</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Shellfish/Crustaceans" /> Shellfish/Crustaceans</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Egg" /> Egg</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-3 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Fish" /> Fish</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-5 col-lg-2 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Milk" /> Milk</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-4 col-lg-4 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Peanuts" /> Peanuts</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Tree Nuts" /> Tree nuts</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-5 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Sesame Seeds" /> Sesame Seeds</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Soybeans" /> Soybean</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-3 col-lg-4 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Sulphites" /> Sulphites</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-5 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}[]" value="Lupin" /> Lupin</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-4 col-lg-3 col-xlg-3">
              <div class="row">
                <div class="col-xs-12">
                  <input type="checkbox" name="allergens___${guestCount}[]" value="Other" /> <input type="text" name="allergens___${guestCount}[]" class="other-input" placeholder="Other">
                </div>
              </div>
            </div>
            <!-- Fix for expanded collapse div sizing. Need this so that form-input-group border encompasses all internal elements when expanded. -->
            &nbsp;
          </div><!-- Collapsing div -->
        </div><!-- Allergens form-input-group -->
      </div>
      <!-- End Guest ${guestCount} Allergens -->

      <!-- Begin Guest ${guestCount} Other dietary requirements -->
      <div class="col-xs-12 col-sm-12 text-left">
        <div class="form-input-group">
          <div class="checkbox">
            <label><input type="checkbox" data-toggle="collapse" data-target="#dietary_collapse___${guestCount}" onclick="if ($(this).prop('checked') == false){ $('#dietary_collapse___${guestCount} input').prop('checked', false); $('#dietary_collapse___${guestCount} .other-input').val(''); };"/>Other dietary restrictions / preferences</label>
          </div>
          <div class="collapse" id="dietary_collapse___${guestCount}" aria-expanded="false">
            <!-- Vego div -->
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xlg-2">
              <label><input type="radio" value="Vegetarian" name="dietary___${guestCount}"> Vegetarian</label>
            </div>
            <!-- Vegan div -->
            <div class="col-xs-12 col-sm-8 col-md-3 col-lg-2">
              <label><input type="radio" value="Vegan" name="dietary___${guestCount}"> Vegan</label>
            </div>
            <!-- Other div -->
            <div class="col-xs-12 col-md-6 col-lg-7 col-xlg-8">
              <label><input type="radio" value="" name="dietary___${guestCount}" onchange="$(this).next().focus();"/>&nbsp;<input type="text" name="dietary___${guestCount}" placeholder="Other" class="other-input" onfocus="$(this).prev().prop('checked', true);" tabindex="-1"/></label>
            </div>
            <!-- Fix for expanded element sizing. Need this so that form-input-group border encompasses all internal elements when expanded. -->
            &nbsp;
            </div><!-- Collapsing div -->
        </div><!-- form-input-group -->
      </div><!-- Other dietary cell -->
      <!-- End Guest ${guestCount} Other dietary requirements -->

      <!-- Begin Guest ${guestCount} Chair type -->
      <div class="col-xs-12 col-lg-6">
        <div class="form-input-group">
          <i class="fa fa-universal-access fa-lg"></i>
          <select name="age_group___${guestCount}" class="" placeholder="Meal type" required>
            <option value="Normal" selected>Normal dining chair</option>
            <option value="High-chair">Children's high-chair</option>
            <option value="No-Chair">No chair (BYO / Wheelchair)</option>
          </select>
        </div>
      </div>
      <!-- End Guest ${guestCount} Chair type -->

      <!-- Begin Guest ${guestCount} Mobility assistance -->
      <div class="col-xs-12 col-lg-6">
        <div data-toggle="popover" data-trigger="hover focus" data-delay='{ "show": 200, "hide": 650 }' title="Mobility assistance" data-placement="auto bottom" data-html="true"
          data-content="The ceremony will be held on the 10th Fairway - this is a few hundred metres walk from the car park and reception venue. <br /><br />We will have golf carts (with drivers) available to give a lift to those who need it.">
          <div class="form-input-group pointer"  onclick="$('#mobility___${guestCount}').prop('checked', !($('#mobility___${guestCount}').prop('checked')));">
            <i class="fa fa-wheelchair fa-lg"></i>
            <label class="pointer">Mobility assistance required</label>
            <input name="mobility___${guestCount}" id="mobility___${guestCount}" type="checkbox" style="pointer-events: none;" onclick="event.stopPropagation()" />
            <i class="fa fa-info-circle fa-lg fa-right"></i>
          </div><!-- form-input-group -->
        </div><!-- Popover div -->
      </div>
      <!-- End Guest ${guestCount} Mobility assistance -->

      <!-- Begin Guest ${guestCount} Transportation -->
      <div class="col-xs-12 col-lg-6">
        <div data-toggle="popover" data-trigger="hover focus" data-delay='{ "show": 200, "hide": 650 }' title="Event Shuttle Bus" data-placement="auto bottom" data-html="true"
          data-content="We have arranged a small shuttle bus between the ceremony/reception venue and the main guest hotel.<br /><br />There is limited seating available. If you might require this with a child seat, please let us know and we'll see what we can organise.<br /><br />Please check this box if you'd like us to save you a seat.">
          <div class="form-input-group pointer" onclick="$('#transport___${guestCount}').prop('checked', !($('#transport___${guestCount}').prop('checked')));" >
            <i class="fa fa-bus fa-lg"></i>
            <label class="pointer">Seat on the shuttle bus</label>
            <input name="transport___${guestCount}" id="transport___${guestCount}" type="checkbox" style="pointer-events: none;" onclick="event.stopPropagation()" />
            <i class="fa fa-info-circle fa-lg fa-right"></i>
          </div><!-- form-input-group mobility access -->
        </div><!-- Popover div -->
      </div>
      <!-- End Guest ${guestCount} Transportation -->

      <!-- Begin Guest ${guestCount} Remove button -->
      <div class="col-xs-12 col-lg-6">
        <div class="form-input-group">
          <button class="btn-fill btn-danger btn" type="button" onmouseup="blur()" onclick="deleteGuest(this);" id="RemoveGuest___${guestCount}" data-guestnum="${guestCount}">Delete guest</button>
        </div>
      </div>
    </div>
    <!-- End Guest ${guestCount} Remove button -->

  </div>
  <!-- End Guest ${guestCount} -->`;

  if (guestCount <= guestLimit) {
    $(template).insertBefore("guestInsertionMarker");
  } else {
    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> You can only RSVP for a maximum of ' + guestLimit + ' people at once.'));
  }
}

//RSVP Form: Delete a guest (and update guest numbering)
function deleteGuest(deleteButton) {
  let guestnumber = parseInt( deleteButton.dataset.guestnum );
  let guestCount = parseInt( $(".guests").length );

  $('#guest___' + guestnumber).remove();

  if (guestCount <= 1) {
    //We just deleted the last guest. Create a new guest.
    AddAGuest();

  }else{
    //Update the existing guests

  for (let i = guestnumber; i < guestCount; i++) {
    iNext = i+1;

    //Update the delete button target
    document.getElementById('RemoveGuest___' + iNext).dataset.guestnum = i;

    //Update all the human relevant info
    let target = document.getElementById('guest___'+ iNext );
    let regex = new RegExp('[Gg]uest '+ iNext, 'g');
    target.outerHTML = target.outerHTML.replace(regex, 'Guest '+i);

    //Update all the element ID's
    target = document.getElementById('guest___'+ iNext );
    regex = new RegExp('_{3}'+ iNext, 'g');
    target.outerHTML = target.outerHTML.replace(regex, '___'+i);

  }
}
}

/********************** Extras **********************/

// Google map
function initMap() {
  var location = {
    lat: 22.5932759,
    lng: 88.27027720000001
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    center: location,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

function initBBSRMap() {
  var la_fiesta = {
    lat: 20.305826,
    lng: 85.85480189999998
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    center: la_fiesta,
    scrollwheel: false
  });

  var marker = new google.maps.Marker({
    position: la_fiesta,
    map: map
  });
}

// alert_markup
function alert_markup(alert_type, msg) {
  return '<div class="alert alert-' + alert_type + '" role="alert">' + msg + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span>&times;</span></button></div>';
}

// MD5 Encoding
var MD5 = function(string) {

  function RotateLeft(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  }

  function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      } else {
        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
      }
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  }

  function F(x, y, z) {
    return (x & y) | ((~x) & z);
  }

  function G(x, y, z) {
    return (x & z) | (y & (~z));
  }

  function H(x, y, z) {
    return (x ^ y ^ z);
  }

  function I(x, y, z) {
    return (y ^ (x | (~z)));
  }

  function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
  };

  function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  function WordToHex(lValue) {
    var WordToHexValue = "",
      WordToHexValue_temp = "",
      lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = (lValue >>> (lCount * 8)) & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
  };

  function Utf8Encode(string) {
    string = string.replace(/\r\n/g, "\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

      var c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if ((c > 127) && (c < 2048)) {
        utftext += String.fromCharCode((c >> 6) | 192);
        utftext += String.fromCharCode((c & 63) | 128);
      } else {
        utftext += String.fromCharCode((c >> 12) | 224);
        utftext += String.fromCharCode(((c >> 6) & 63) | 128);
        utftext += String.fromCharCode((c & 63) | 128);
      }

    }

    return utftext;
  };

  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22;
  var S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20;
  var S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23;
  var S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  string = Utf8Encode(string);

  x = ConvertToWordArray(string);

  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);

  return temp.toLowerCase();
};

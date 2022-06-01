$(document).ready(function() {

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
      title: "Jen & Ollie's Wedding",

      // Event start date
      start: new Date('2022-09-22'),

      // Event duration (IN MINUTES)
      // duration: 120,

      // You can also choose to set an end time
      // If an end time is set, this will take precedence over duration
      end: new Date('2022-09-23'),

      allDay: true, //allDay events

      // Event Address
      address: 'The Greenhouse Eatery, Huntingdale Pl, Medowie, NSW, 2318, Australia',

      // Event Description
      description: "We're looking forward to seeing you there! For any queries, please email or call us."
    }
  });

  $('#add-to-cal').html(myCalendar);


  /********************** RSVP Form **********************/
  let urlQueryString = new URLSearchParams(window.location.search);
  //Only show the form if there's a uuid parameter (ie. User has clicked RSVP link in invitation email)
  if (urlQueryString.has('uuid')) {
    // We have the bare minimum required to enable the RSVP form
    //Display the form / hide the instructions to link in email
    $('.uuid-hide-show').toggleClass('hidden');

    let guests = 1; //1 guest by default
    if (urlQueryString.has('guest_count')) {
      //Set guests to value of guest_count parameter (and sanitize)
      guests = Math.max(urlQueryString.get('guest_count') || 0, 1);
    }

    //Add the form fields for user to enter guest info.
    for (i = guests; i > 0; i--) {
      AddAGuest(false); //Don't re-initalise Bootstrap popovers every time a guest is added
    }
    //Manually initialise the support functions
    $('[data-toggle="popover"]').popover();
    $('#rsvp-form input, #rsvp-form select').on('invalid', function(e) {
      addErrorHighlighting(e.target);
    });

    // Pre-fill the form fields
    for (let [key, value] of urlQueryString) {
      $("[name=" + key + "]").val(value);
      //Make sure to update the section-title divs too
      if (key.startsWith("guest___")) {
        $("[id$=header___" + key.split("___")[1] + "]").text(value);
      }
    }

    //Warn user on leave/reload page if there are unsubmitted changes to the RSVP form
    $("#rsvp-form").dirty({
      preventLeaving: true
    });


    /**** RSVP Form event listeners ****/

    // Swap +/- symbols on headers when expanding/closing sections
    //Currently a bug where open/closing a sub section will swap the +/-, but lowpriority
    $('#rsvp-form').on('hidden.bs.collapse show.bs.collapse', function(event) {
      if (event.target.id.includes('guestDiv')) { //Ignore nested collapsibles triggering this event
        let guestNumber = event.target.id.split('___')[1]; //Get guest number
        $('#accordionSymbol___' + guestNumber).toggleClass("fa-plus");
        $('#accordionSymbol___' + guestNumber).toggleClass("fa-minus");
      }
    });

    //Ensure parent checkbox is checked when collapsible is expanded (overrides rapid input during animation)
    $('#rsvp-form').on('shown.bs.collapse', function(event) {
      if (event.target.id.includes('collapse___')) { //Ignore section-title collapsibles triggering this event
        $(event.target).parent().find('[id*="parent"]').prop('checked', true);
      }
    });

    //Ensure parent checkbox is cleared when collapsible is collapsed  (overrides rapid input during animation)
    $('#rsvp-form').on('hidden.bs.collapse', function(event) {
      if (event.target.id.includes('collapse___')) { //Ignore section-title collapsibles triggering this event
        $(event.target).parent().find('[id*="parent"]').prop('checked', false);
      }
    });

    //Clear validation error highlighting and setCustomValidity() messages when user updates the value of an input
    //NB: validation error highlighting is applied in the AddAGuest() function
    $('#rsvp-form').on('input', function(e) {
      clearErrorHighlighting(e.target);
      if (e.target.matches('[name^="dietary___"],[name^="allergens___"]')) {
        e.target.closest('.form-input-group').querySelector('[id^="allergens_parent___"],[id^="dietary_parent___"]').setCustomValidity("");
        clearErrorHighlighting(e.target.closest('.form-input-group').querySelector('[id^="allergens_parent___"],[id^="dietary_parent___"]'));
      }
    });

    $('#rsvp_yesno').on('change', function() {
      //if user RSVP's no, delete all guests from form
      if (($(this).val() == 'No') && $('.guests').length >= 1) {
        //But double check with them first
        if (confirm("Click 'OK' to clear any guest information, then you can go ahead and submit the RSVP form.\n\nCancel to abort.")) {
          //Delete all the guests
          $('[id^="RemoveGuest___"]').each(function() {
            deleteGuest(this);
          });
        } else {
          //If user cancels setting RSVP to No, set to Yes
          $(this).val('Yes');
        }
      }
    });

    /**************** RSVP Form Validation and Submission ***************/
    $('#rsvp-form').on('submit', function(e) {
      e.preventDefault(); /* Prevents standard form submission handling by default browser methods. See: https://www.w3schools.com/jsref/event_preventdefault.asp */

      let failedValidation = false;
      //Validation - if user has selected allergens or dietary parent checkboxes, they must select one of the sub-checkboxes/radio buttons
      $('[id^="allergens_parent___"]:checked,[id^="dietary_parent___"]:checked').parent().parent().parent().each(function(index, element) {
        let checkedCount = $(element).find('[name^="allergens___"]:checked,[name^="dietary___"]:checked').length;
        if (!(checkedCount)) {
          //Whoops - ticked a parent box, but forgot to check a child
          element.querySelector('[id^="allergens_parent___"],[id^="dietary_parent___"]').setCustomValidity("Please clear this checkbox, or select at least one sub-checkbox/radio button"); //Mark as invalid and set the message to display
          element.querySelector('[id^="allergens_parent___"],[id^="dietary_parent___"]').reportValidity(); //Display the validation error message
          failedValidation = true;
        }
      });


      //list of valid UUID hashes for basic typo prevention and (limited) security.
      const md5_hash_array =
     ["aaef5aa7d10f30229301121f2af79686",
      "cd6749d74b1d02fa3013edb705da96bd",
      "4bd32488b8ae644e29d217f6a37d9428",
      "501805ad01f9d6ad27b6d09206ddb0fd",
      "e181b98387a6a940d262f502c0678aac",
      "06100af9d419d1dc4e659a4c128ca47c",
      "2d689e15f5ac5a9c6374656b87e7b43d",
      "27fdf39d36caae58b43e4fbfd04b847f",
      "8ba7cccce2c14230fcf4c1e47a6573c4",
      "85b3cfd52642aec0ad7ce2a773b080fb",
      "ee29254aad94957e323688503ee6be27",
      "424535c921744e1c192ca9385e5441e0",
      "c72875473fde647224c35ec83fb32817",
      "f39df9d59d59859390be91d0f9d4c9be",
      "e07b066ec615e21538c9bb354bb37548",
      "a4cfa825e51e45b08068192bdfb79482",
      "af7cb8fd631636328811adfddc013e8b",
      "37c9348ac4c4e62a242e3900ba468614",
      "32eff4508b7d1b9ef4769d9a6093c8c9",
      "f26b5d80c6a84a490e529b1dbb33019d",
      "6890346b209bdab725f0c58810b1013c",
      "3301b2c686b3c7ae404c2a5206b1ae81",
      "cf82d8634062645db9cf06f9ef7d671a",
      "129e59524109c60168d41e68d6fbe34d",
      "74158980f0f2991c40c4c371e0ca85b0",
      "5c6df2d1de0716cd470c0a970649d87e",
      "4d41bf4056e69fac46a0074b40d2448e",
      "6fb6dd0e8d9d940824956f1a2f0f1435",
      "344bc357a56111936904211958143178",
      "6572aa95dfe6caabc32b7c68943ceea9",
      "b21aa5cb73d06e6933dd261b0ac2f80e",
      "165526b434000ea8d7b3118e6565e948",
      "db0726cd7a5ae1125dffe21578266cd6",
      "d10f6fd10683b0d4a1cc5843bb4daf04",
      "f5911b9e14f55b89525281252f2b7ba5",
      "fd5abd707aebc0d94604bc173e4d0be7",
      "8bbbc044d7dc74c8e1e8685646171a1c",
      "1b30da1a95b740f3f2eaf230446f6e73",
      "9ef881da6535c6fda9d6115881f38800",
      "3dc19f7324e87bda70ddb25b3870b44c",
      "9ed3bebe9e896697170ecd35d6d21913",
      "8b508ba5b85f8678333bd182bb735ca2",
      "065d4de772ac8d126df196760bdaeafd",
      "faafaba126597f83d5bb505bcbb676b0",
      "ee509e72a13deb25a1389d8db2d9f409",
      "7849b223470464a9916beb29b4dc2695",
      "b136b7306a8a281ebb6598b63d2fb6ac",
      "118c7a878bf50f6562efe93489a68230",
      "f418a8b197ad73819d98fc6491ad8950",
      "9459a85b9994cef679b74ec1a3e924d1",
      "d0483b1c6b8634a9ac6e76bf0fa8ae26",
      "a249c4060f9a18676c758c509ae6897a",
      "8ef11247e02d71eacc72cec618baea4f",
      "7aa83a3bd8775ac825306ae1330727a8",
      "c656b378df7212bb3ae71ecd169f1171",
      "320dee7a90fd86dc95a0ed835f4e2ae4",
      "facacdddad0bf96c73d85653ba67f522",
      "4e8200e789536fefbc41bac62f0477bd",
      "f83aab8b5b8f7c3e79c9c7c0785a672c",
      "8865a7ae86115199ce21d5b762f8458d",
      "0151550de3df8b4e6f520b571fe802f7",
      "c5d034f182bbb84e6d05bab9b441b429",
      "b53623cd76fd36d30012bc0df18e93d3",
      "1fffb5dd5b4fa65f49a8af02c2cd1dc4",
      "69115fc654e235bd76b296310c4fe1ef",
      "870a412b05c16bd1b6a7026ae2709411",
      "79ac62739dabbdf5a4372acd967cb754",
      "d647f18bbfea6d36c392438d53ceddd5",
      "4dd948ab3901c96ae4d1e2d2537d5008",
      "1c82b9c4575ebef0a5789f46eb69ee3b",
      "c8264c38abc68a310cba44378f492051",
      "b05f46f1d89a8f270326a1a4e803fb19",
      "f61e50f7998fb4ac01316afbcb541700",
      "f900f38ec47a8116229da128a79c0624",
      "f697162c8532c6a639c1b40468e71e7c",
      "04bca1b4286de861e278a9a423f0d401",
      "460fe32180accaa489269d5cd3cb5e6e",
      "49ef58fff038fcb19de5291e849860f1",
      "2cf46482d2a5fc69210c975a5808bd8d",
      "6175f72e85af1f808b6644a352453913",
      "fdee838edeec5b3572a50f7f52754ba8",
      "41c605a2deec77a96485c25ab4b1ce9c",
      "04f1717ae8e4db0838d7f832f7ba1bcf",
      "1bbb0ecaf64f55680aa2df9638d5c19a",
      "2e08588e475341abe76df1a3966c2734",
      "2b0ccdd91c760968d090147a3ed6c67d",
      "0938386b39cf7e652d827f38f744eb2d",
      "be6844b12b776534294c9c146c4d0425",
      "cdee759de4b073f09b0ec2649a2c1e5f",
      "62cfb2530ef6334e1ccd19dea6388d3c",
      "b79af54e9771b220bf55549ba6abaa07",
      "252735b1f3f595ee84be22dc8dce3259",
      "a1aaf0641c61b0f1ffb7f0e81354c6f8",
      "0605110e34affca1de039832831e6c06",
      "03b9eda01d9b466f562ecb64d2aaac5c",
      "4c4537fc14b83992b8ca48b12a7c3880",
      "451d78276bb2c3e876d7d9a2558a10b0",
      "ce56cb279ccb948579bf85695db69be4",
      "b273ab3d7b4f4a1095907801429559ec",
      "ab149553c002f74310b27b781cda9881"];

      if (md5_hash_array.indexOf(MD5($('#uuid').val() + $('#salt').val())) < 0) {
        $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> Your password seems to be incorrect. Note that it is case sensitive.'));
        failedValidation = true;
      }
      if (($('#rsvp_yesno').val() == 'No') && (parseInt($('.guests').length))) {
        if (confirm("You've provided guest details, but have indicated you aren't attending.\n\nTo delete all guest info and continue with form submission, click 'OK'.\n\nTo abort submission and make changes, click 'Cancel'.")) {
          $('[id^="RemoveGuest___"]').each(function() {
            deleteGuest(this);
          });
        } else {
          failedValidation = true;
        }
      } else if (($('#rsvp_yesno').val() == 'Yes') && (parseInt($('.guests').length) < 1)) {
        $('#alert-wrapper').html(alert_markup('danger', "<strong>Hang on!</strong> If your party is attending, please add at least one guest."));
        failedValidation = true;
      }

      if (failedValidation) return;

      //We made it through all the validation, good to submit to server!
      $('#alert-wrapper').html(alert_markup('info', '<strong>Just a sec!</strong> Saving your details.'));
      const formData = $(this).serialize(); /* https://api.jquery.com/serialize/ */

      $.post('https://script.google.com/macros/s/AKfycbzuE6kLDE4u70JBYBga7wHh8kFT5CKUoEVTMQxXC-5wGBbknsYsN4nMqny81_I-TZ5LjQ/exec', formData)
        .done(function(returnData) {
          if (returnData.result === "error") {
            $('#alert-wrapper').html(alert_markup('danger', returnData.message));
            console.log(returnData);
          } else {
            $('#alert-wrapper').html('');
            $('#rsvp-modal').modal('show');
          }
        })
        .fail(function(returnData) {
          console.log('HTTP Request Failed');
          console.log(returnData);
          $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> The server did not respond. Please try again, or contact Oliver for help.'));
        });

    });

    //Hide popovers on click close button
    $(document).click(function(e) {
      if ($(e.target).is('.close')) {
        e.preventDefault();
        e.stopPropagation();
        $('.popover').popover('hide');
      }
    });
  }

}); // End $(document).ready

//RSVP Form: Copy guest name to the section header
function copyGuestNametoHeader(element) {
  let guestNumber = element.id.split('___')[1];
  let userInput = $("#guest___" + guestNumber).val();
  if (userInput.length) {
    $("#header___" + guestNumber).text(userInput);
  } else {
    $("#header___" + guestNumber).text("Guest " + guestNumber);
  }
}

//RSVP Form: Checkbox children toggle
function clearCheckboxChildren(element, guestNumber) {
  if ($(element).prop('checked') == false) {
    $(`#allergens_collapse___${guestNumber} input`).prop('checked', false);
    $(`#allergens_collapse___${guestNumber} .other-input`).val('');
  };
}

//RSVP Form: Add a new guest
function AddAGuest(initSupportFunctions = true, guestLimit = 10) {
  let guestCount = parseInt($(".guests").length) + 1;
  guestLimit = parseInt(guestLimit);

  const template = `<!-- Begin Guest ${guestCount} -->
  <div class="form-input-group multi-input-group guests" id="guestGroup___${guestCount}">

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
        <div data-toggle="popover" data-trigger="hover focus" data-delay='{ "show": 200, "hide": 350 }' title="Guest names <a class='close' href='#'>&times;</a>" data-placement="auto bottom" data-html="true"
          data-content="We will print placecards for everyone using names as entered here.<br /><br />Please enter full names for everyone, and double check the spelling">
          <div class="form-input-group">
            <i class="fa fa-user fa-lg"></i>
            <input type="text" name="guest___${guestCount}" id="guest___${guestCount}" class="guest" placeholder="Firstname & Lastname"  oninput="copyGuestNametoHeader(this);" required>
            <i class="fa fa-info-circle fa-lg fa-right"></i>
          </div>
        </div>
      </div>
      <!-- End Guest ${guestCount} name -->

      <!-- Begin Guest ${guestCount} meal -->
      <div class="col-xs-12 col-lg-6">
        <div class="form-input-group">
          <i class="fa fa-cutlery fa-lg"></i><select name="meal_type___${guestCount}" class="" placeholder="Meal type" required>
            <option value="" hidden>Select guest's meal type</option>
            <option value="Adult meal">Adult meal</option>
            <option value="Children's meal (Under 13)">Children's meal (Under 13)</option>
            <option value="No meal (Infant)">No meal (Infant)</option>
          </select>
        </div>
      </div>
      <!-- End Guest ${guestCount} meal -->

      <!-- Begin Guest ${guestCount} Allergens -->
      <div class="col-xs-12">
        <div class="form-input-group">
          <div class="checkbox pointer" data-toggle="collapse" data-target="#allergens_collapse___${guestCount}" onclick="if (event.target.tagName != 'INPUT' && event.target.tagName != 'LABEL') {$('#allergens_parent___${guestCount}').prop('checked', !($('#allergens_parent___${guestCount}').prop('checked'))); $('#allergens_parent___${guestCount}').trigger('change');}" >
            <label><input type="checkbox" id="allergens_parent___${guestCount}" onchange="clearCheckboxChildren(this, ${guestCount})"/>Food Allergies / Intolerances</label>
          </div>
          <div class="collapse" id="allergens_collapse___${guestCount}" aria-expanded="false">
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Gluten" /> Gluten</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-5 col-lg-4 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Shellfish/Crustaceans" /> Shellfish/Crustaceans</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Egg" /> Egg</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-3 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Fish" /> Fish</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-5 col-lg-2 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Milk" /> Milk</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-4 col-lg-4 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Peanuts" /> Peanuts</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-3 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Tree Nuts" /> Tree nuts</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-5 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Sesame Seeds" /> Sesame Seeds</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-2 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Soybeans" /> Soybean</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-3 col-lg-4 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Sulphites" /> Sulphites</label>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-5 col-lg-3 col-xlg-3">
              <label><input type="checkbox" name="allergens___${guestCount}" value="Lupin" /> Lupin</label>
            </div>
            <div class="col-xs-12 col-sm-8 col-md-4 col-lg-3 col-xlg-3">
              <div class="row">
                <div class="col-xs-12">
                  <input type="checkbox" name="allergens___${guestCount}" value="" onchange="if(!($(this).prop('checked'))) {$(this).next().val('');} $(this).next().focus();"/> <input type="text" name="allergens___${guestCount}" class="other-input" placeholder="Other" oninput="if($(this).val()==''){$(this).prev().prop('checked', false);}else{$(this).prev().prop('checked', true);}" tabindex="-1">
                </div>
              </div>
            </div>
            <!-- Fix for expanded 'collapse' div sizing. Need this so that form-input-group border encompasses all internal elements when expanded. -->
            &nbsp;
          </div><!-- Collapsing div -->
        </div><!-- Allergens form-input-group -->
      </div>
      <!-- End Guest ${guestCount} Allergens -->

      <!-- Begin Guest ${guestCount} Other dietary requirements -->
      <div class="col-xs-12 col-sm-12 text-left">
        <div class="form-input-group">
          <div class="checkbox pointer" data-toggle="collapse" data-target="#dietary_collapse___${guestCount}">
            <label><input id="dietary_parent___${guestCount}"" type="checkbox" onclick="if ($(this).prop('checked') == false){ $('#dietary_collapse___${guestCount} input').prop('checked', false); $('#dietary_collapse___${guestCount} .other-input').val(''); };"/>Other dietary restrictions / preferences</label>
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
          <select name="seating___${guestCount}" class="" placeholder="Seating Type" required>
            <option value="Normal" selected>Normal dining chair</option>
            <option value="High-chair">Children's high-chair</option>
            <option value="No_Chair">No chair (BYO / Wheelchair)</option>
          </select>
        </div>
      </div>
      <!-- End Guest ${guestCount} Chair type -->

      <!-- Begin Guest ${guestCount} mobility_assistance_required assistance -->
      <div class="col-xs-12 col-lg-6">
        <div data-toggle="popover" data-trigger="hover focus" data-delay='{ "show": 200, "hide": 350 }' title="mobility_assistance_required assistance <a class='close' href='#'>&times;</a>" data-placement="auto bottom" data-html="true"
          data-content="The ceremony will be held on the 10th Fairway - this is a few hundred metres walk from the car park and reception venue. <br /><br />We will have golf carts (with drivers) available to give a lift to those who need it.">
          <div class="form-input-group pointer"  onclick="$('#mobility_assistance_required___${guestCount}').prop('checked', !($('#mobility_assistance_required___${guestCount}').prop('checked')));">
            <i class="fa fa-wheelchair fa-lg"></i>
            <label class="pointer">Mobility assistance required</label>
            <input name="mobility_assistance_required___${guestCount}" id="mobility_assistance_required___${guestCount}" type="checkbox" style="pointer-events: none;" onclick="event.stopPropagation()" />
            <i class="fa fa-info-circle fa-lg fa-right"></i>
          </div><!-- form-input-group -->
        </div><!-- Popover div -->
      </div>
      <!-- End Guest ${guestCount} mobility_assistance_required assistance -->

    <!-- Begin Guest ${guestCount} Remove button -->
      <div class="col-xs-12 col-lg-6 col-lg-offset-6">
        <div class="form-input-group">
          <button class="btn-fill btn-danger btn" type="button" onmouseup="blur()" onclick="deleteGuest(this);" id="RemoveGuest___${guestCount}" data-guestnum="${guestCount}">Remove Guest</button>
        </div>
      </div>
    </div>
    <!-- End Guest ${guestCount} Remove button -->

  </div>
  <!-- End Guest ${guestCount} -->`;

  if (guestCount <= guestLimit) {
    //Add a guest section
    $(template).insertBefore("guestInsertionMarker");

    //if initSupportFunctions == false, you must perform the following manually after calling this function
    if (initSupportFunctions) {
      $('[data-toggle="popover"]').popover(); //Re-initialise Bootstrap popovers for new fields.

      //Highlight fields with validation errors, and expand the containing collapsible
      //NB: The invalid event does not bubble, so event delegation won't work for this,
      //therefore, we need to make sure an 'invalid' event listener is added every time we add a form element.
      $('#rsvp-form input, #rsvp-form select').on('invalid', function(e) {
        addErrorHighlighting(e.target);
      });
    }

  } else {
    $('#alert-wrapper').html(alert_markup('danger', '<strong>Sorry!</strong> You can only RSVP for a maximum of ' + guestLimit + ' people at once.'));
  }
}

//RSVP Form: Delete a guest (and update numbering)
function deleteGuest(deleteButton) {
  let guestNumber = parseInt(deleteButton.dataset.guestnum);
  let guestCount = parseInt($(".guests").length);

  $('#guestGroup___' + guestNumber).remove();
  $("[data-toggle='popover']").popover('destroy'); //Clear all popovers (prevents orphaned popovers if user deletes while a popover is open)

  //Re-number the existing guests (that are after the one we deleted)
  for (let i = guestNumber; i < guestCount; i++) {
    let iNext = i + 1;
    let target = $('#guestGroup___' + iNext);

    //Update the delete button target
    document.getElementById('RemoveGuest___' + iNext).dataset.guestnum = i;

    //There's a better way to do this, say by recursively looping through all DOM nodes?
    //But if it's stupid and it works...

    //update all name attributes
    $.each(target.find('[name$="___' + iNext + '"]'), function() {
      $(this).attr('name', $(this).attr('name').replace("___" + iNext, "___" + i));
    });

    //update all ID attributes
    $.each(target.find('[id$="___' + iNext + '"]'), function() {
      $(this).prop('id', $(this).prop('id').replace("___" + iNext, "___" + i));
    });

    //update all data-target attributes
    $.each(target.find('[data-target$="___' + iNext + '"]'), function() {
      $(this).attr('data-target', $(this).attr('data-target').replace("___" + iNext, "___" + i));
    });

    //update all aria-controls attributes
    $.each(target.find('[aria-controls$="___' + iNext + '"]'), function() {
      $(this).attr('aria-controls', $(this).attr('aria-controls').replace("___" + iNext, "___" + i));
    });

    //update all onclick attributes
    $.each(target.find('[onclick*="___' + iNext + '"]'), function() {
      let regex = new RegExp('___' + iNext, 'g');
      $(this).attr('onclick', $(this).attr('onclick').replace(regex, "___" + i));
    });

    //Update guest header
    if (!($('#guest___' + i).val())) {
      $('#header___' + i).text('Guest ' + i);
    }

    //Update guest div ID
    target.attr('id', 'guestGroup___' + i);


    /*
    This approach works to update the form, but because it overwirtes the HTML using strings
    the DOM is rebuilt, and all field values and checked statuses are lost.

    //Update all the human legible info
    let target = document.getElementById('guestGroup___' + iNext);
    let regex = new RegExp('[Gg]uest ' + iNext, 'g');
    target.outerHTML = target.outerHTML.replace(regex, 'Guest ' + i);

    //Update the rest of the elements
    target = document.getElementById('guestGroup___' + iNext);
    regex = new RegExp('_{3}' + iNext, 'g');
    target.outerHTML = target.outerHTML.replace(regex, '___' + i);
    */
  }
  //Re-initialise popovers
  $("[data-toggle='popover']").popover();
}

function addErrorHighlighting(element) {
  //Ensure collapsible containing the invalid element is expanded
  $(element).parents('.section-title').addClass('in'); //Note: The invalid event does not bubble, so event capturing is not possible. Need to find the parent.

  //Set the Plus/Minus symbol to Minus on the section we just expanded
  let guestNumber = $(element).prop('name').split('___')[1]; //Get guest number
  $('#accordionSymbol___' + guestNumber).removeClass("fa-plus");
  $('#accordionSymbol___' + guestNumber).addClass("fa-minus");

  //Highlight the field with a validation issue for the user
  $(element).addClass('has-error');
  $(element).parentsUntil('.form-input-group').addClass('has-error');
}

function clearErrorHighlighting(element) {
  $(element).removeClass('has-error');
  $(element).parentsUntil('.form-input-group').removeClass('has-error');
}

/********************** Extras **********************/
/*
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
*/
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

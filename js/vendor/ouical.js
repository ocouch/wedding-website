;(function(exports) {
    var MS_IN_MINUTES = 60 * 1000;

    var formatTime = function(date, allDay = false) {
        return allDay ? date.toISOString().replace(/-|:|\.\d+/g, '').substr(0,8) : date.toISOString().replace(/-|:|\.\d+/g, '');
    };

    var calculateEndTime = function(event) {
      return event.end ? event.end : new Date(event.start.getTime() + (event.duration * MS_IN_MINUTES));
    };

    var calendarGenerators = {
        google: function(event) {
            var startTime = formatTime(event.start, event.allDay);
            var endTime = formatTime(calculateEndTime(event));

            var href = ([
                'https://www.google.com/calendar/render',
                '?action=TEMPLATE',
                '&text=' + encodeURIComponent(event.title || ''),
                '&dates=' + encodeURIComponent(startTime || ''),
                '/' + encodeURIComponent(endTime || ''),
                '&details=' + encodeURIComponent(event.description || ''),
                '&location=' + encodeURIComponent(event.address || ''),
                '&sprop=&sprop=name:'
            ].join(''));
            return '<a class="icon-google" target="_blank" href="' +
                href + '">Google Calendar</a>';
        },

        yahoo: function(event) {
          // Remove timezone from event time(s)
              var st = formatTime(new Date(event.start - (event.start.getTimezoneOffset() * MS_IN_MINUTES))) || '';
              var et = calculateEndTime(event);
                  et = formatTime(new Date(et - (et.getTimezoneOffset() * MS_IN_MINUTES))) || '';

                  var href = ([
                    'http://calendar.yahoo.com/?v=60&view=d&type=20',
                    '&title=' + encodeURIComponent(event.title || ''),
                    '&st=' + encodeURIComponent(st || ''),
                    '&et=' + encodeURIComponent(et ||''),
                    '&dur=' + encodeURIComponent((event.allDay ? 'allday' : '')  || ''),
                    '&desc=' + encodeURIComponent(event.description || ''),
                    '&in_loc=' + encodeURIComponent(event.address || '')
                  ].join(''));

            return '<a class="icon-yahoo" target="_blank" href="' +
                href + '">Yahoo! Calendar</a>';
        },

        ics: function(event, eClass, calendarName) {
            var startTime = formatTime(event.start, event.allDay);
            var endTime = formatTime(calculateEndTime(event), event.allDay);

            var href = encodeURI(
                'data:text/calendar;charset=utf8,' + [
                    'BEGIN:VCALENDAR',
                    'VERSION:2.0',
                    'BEGIN:VEVENT',
                    'URL:' + document.URL,
                    'DTSTART:' + (startTime || ''),
                    'DTEND:' + (endTime || ''),
                    'SUMMARY:' + (event.title || ''),
                    'DESCRIPTION:' + (event.description || ''),
                    'LOCATION:' + (event.address || ''),
                    'END:VEVENT',
                    'END:VCALENDAR'].join('\n'));

            return '<a class="' + eClass + '" target="_blank" href="' +
                href + '">' + calendarName + ' Calendar</a>';
        },

        ical: function(event) {
            return this.ics(event, 'icon-ical', 'iCal');
        },

        outlook: function(event) {
            return this.ics(event, 'icon-outlook', 'Outlook');
        }
    };

    var generateCalendars = function(event) {
        return {
            google: calendarGenerators.google(event),
            yahoo: calendarGenerators.yahoo(event),
            ical: calendarGenerators.ical(event),
            outlook: calendarGenerators.outlook(event)
        };
    };

    // Create CSS
    var addCSS = function() {
        if (!document.getElementById('ouical-css')) {
            document.getElementsByTagName('head')[0].appendChild(generateCSS());
        }
    };

    var generateCSS = function() {
        var styles = document.createElement('style');
        styles.id = 'ouical-css';

        styles.innerHTML = "#add-to-calendar-label{margin-bottom:10px;cursor:pointer}.add-to-calendar a{margin:3px}.add-to-calendar-checkbox~a{display:none}.add-to-calendar-checkbox:checked~a{display:block;}input[type=checkbox].add-to-calendar-checkbox{display:none}";

        return styles;
    };

    // Make sure we have the necessary event data, such as start time and event duration
    var validParams = function(params) {
        return params.data !== undefined && params.data.start !== undefined &&
            (params.data.end !== undefined || params.data.duration !== undefined);
    };

    var generateMarkup = function(calendars, clazz, calendarId) {
        var result = document.createElement('div');

        result.innerHTML = '<label id="add-to-calendar-label" for="checkbox-for-' +
            calendarId + '" class="btn btn-fill btn-small"><i class="fa fa-calendar"></i>&nbsp;&nbsp; Add to Calendar</label>';
        result.innerHTML += '<input name="add-to-calendar-checkbox" class="add-to-calendar-checkbox" id="checkbox-for-' + calendarId + '" type="checkbox">';

        Object.keys(calendars).forEach(function(services) {
            result.innerHTML += calendars[services];
        });

        result.className = 'add-to-calendar';
        if (clazz !== undefined) {
            result.className += (' ' + clazz);
        }

        addCSS();

        result.id = calendarId;
        return result;
    };

    var getClass = function(params) {
        if (params.options && params.options.class) {
            return params.options.class;
        }
    };

    var getOrGenerateCalendarId = function(params) {
        return params.options && params.options.id ?
            params.options.id :
            Math.floor(Math.random() * 1000000); // Generate a 6-digit random ID
    };

    exports.createCalendar = function(params) {
        if (!validParams(params)) {
            console.log('Event details missing.');
            return;
        }

        return generateMarkup(generateCalendars(params.data),
            getClass(params),
            getOrGenerateCalendarId(params));
    };
})(this);

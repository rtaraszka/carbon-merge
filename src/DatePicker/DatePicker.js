import React from "react";
import PropTypes from "prop-types";
import { DatePicker as DatePickerComponent } from "carbon-components-react";

function DatePicker(props) {
  return (
    <DatePickerComponent {...props} />
  );
}

DatePicker.propTypes = {
    /**
     * The child nodes.
     */
    children: PropTypes.node,

    /**
     * The CSS class names.
     */
    className: PropTypes.string,

    /**
     * `true` to use the short version.
     */
    short: PropTypes.bool,

    /**
     * `true` to use the light version.
     */
    light: PropTypes.bool,

    /**
     * The type of the date picker:
     *
     * * `simple` - Without calendar dropdown.
     * * `single` - With calendar dropdown and single date.
     * * `range` - With calendar dropdown and a date range.
     */
    datePickerType: PropTypes.oneOf(['simple', 'single', 'range']),

    /**
     * The description of the calendar icon.
     */
    iconDescription: PropTypes.string,

    /**
     * The date format.
     */
    dateFormat: PropTypes.string,

    /**
     *  The language locale used to format the days of the week, months, and numbers.
     *
     * * `ar` - Arabic
     * * `at` - Austria
     * * `be` - Belarusian
     * * `bg` - Bulgarian
     * * `bn` - Bangla
     * * `cat` - Catalan
     * * `cs` - Czech
     * * `cy` - Welsh
     * * `da` - Danish
     * * `de` - German
     * * `en` - English
     * * `eo` - Esperanto
     * * `es` - Spanish
     * * `et` - Estonian
     * * `fa` - Persian
     * * `fi` - Finnish
     * * `fr` - French
     * * `gr` - Greek
     * * `he` - Hebrew
     * * `hi` - Hindi
     * * `hr` - Croatian
     * * `hu` - Hungarian
     * * `id` - Indonesian
     * * `it` - Italian
     * * `ja` - Japanese
     * * `ko` - Korean
     * * `lt` - Lithuanian
     * * `lv` - Latvian
     * * `mk` - Macedonian
     * * `mn` - Mongolian
     * * `ms` - Malaysian
     * * `my` - Burmese
     * * `nl` - Dutch
     * * `no` - Norwegian
     * * `pa` - Punjabi
     * * `pl` - Polish
     * * `pt` - Portuguese
     * * `ro` - Romanian
     * * `si` - Sinhala
     * * `sk` - Slovak
     * * `sl` - Slovenian
     * * `sq` - Albanian
     * * `sr` - Serbian
     * * `sv` - Swedish
     * * `th` - Thai
     * * `tr` - Turkish
     * * `uk` - Ukrainian
     * * `vn` - Vietnamese
     * * `zh` - Mandarin
     */
    locale: PropTypes.oneOf([
        'ar',
        'at',
        'be',
        'bg',
        'bn',
        'cat',
        'cs',
        'cy',
        'da',
        'de',
        'en',
        'en',
        'eo',
        'es',
        'et',
        'fa',
        'fi',
        'fr',
        'gr',
        'he',
        'hi',
        'hr',
        'hu',
        'id',
        'it',
        'ja',
        'ko',
        'lt',
        'lv',
        'mk',
        'mn',
        'ms',
        'my',
        'nl',
        'no',
        'pa',
        'pl',
        'pt',
        'ro',
        'ru',
        'si',
        'sk',
        'sl',
        'sq',
        'sr',
        'sv',
        'th',
        'tr',
        'uk',
        'vn',
        'zh',
    ]),

    /**
     * The value of the date value provided to flatpickr, could
     * be a date, a date number, a date string, an array of dates.
     */
    value: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.object,
        ])
    ),

    /**
     * The DOM element or selector the Flatpicker should be inserted into. `<body>` by default.
     */
    appendTo: PropTypes.string,

    /**
     * The `change` event handler.
     */
    onChange: PropTypes.func,

    /**
     * The minimum date that a user can start picking from.
     */
    minDate: PropTypes.string,

    /**
     * The maximum date that a user can pick to.
     */
    maxDate: PropTypes.string,
};

DatePicker.defaultProps = {
    short: false,
    light: false,
    dateFormat: 'm/d/Y',
    locale: 'en',
};

export default DatePicker;

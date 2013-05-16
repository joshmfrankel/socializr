/**
 * Socializr
 *
 * A Social Feed widget for multiple networks.  Most notably is support
 * for twitter 1.1.
 *
 * @author Joshua Frankel <joshmfrankel@gmail.com>
 * @copyright Copyright (c) 2013, Joshua Frankel
 * @link http://www.joshfrankel.me
 * @link https://github.com/joshmfrankel/socializr
 * @see  Twitteroauth https://github.com/abraham/twitteroauth for authentication details
 * @version 0.1
 */

/**
 * Wrap the plugin in the jquery dollar sign, which will prevent overriding other
 * methods with the same name as this plugin.  Additionally we can call $ to
 * reference jQuery
 */
(function($) {

    // Register the plugin name as a function in jQuery
    // Takes options parameter for overridding defaults
    $.fn.socializr = function(options) {

    }; // End Plugin

})(jQuery);

H5P.Starter = (function ($) {

  /**
   * @class H5P.MyLib
   * @param {Object} params
   */
  function Starter(params) {
    var $wrapper;

    this.attach = function ($container) {
      if ($wrapper === undefined) {
        $wrapper = $('<div/>', {
          html: 'Hello ' + params.name
        });
      }

      $container.html('').addClass('h5p-starter').append($wrapper);
    };
  }

  return Starter;
})(H5P.jQuery);

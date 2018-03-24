
/* WIDGET */

const widget = {

  button: ( label, onclick ) => {

    return `<button onclick="${onclick}()">${label}</button>`;

  }

};

/* EXPORT */

module.exports = widget;

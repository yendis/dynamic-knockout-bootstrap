// TODO: Modal

// TODO: Dropdown

// TODO: Scrollspy

// TODO: Tab

// TODO: Tooltip

// TODO: Popover

// TODO: Alert

// TODO: Button

// TODO: Collapse

// TODO: Carousel

ko.bindingHandlers.typeahead = {
    defaults: { source: '', items: 10, minLength: 3 },
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.typeahead.defaults, options);
        $(element).typeahead(settings);
    }
};

// TODO: Affix
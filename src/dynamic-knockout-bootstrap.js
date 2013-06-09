ko.bindingHandlers.modal = {
    defaults: {},
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.modal.defaults, options);
        $(element).modal(settings);
    }
};

ko.bindingHandlers.dropdown = {
    defaults: {},
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.dropdown.defaults, options);
        $(element).dropdown(settings);
    }
};

//ko.bindingHandlers.scrollspy = {
//    defaults: {},
//    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
//        var options = ko.utils.unwrapObservable(valueAccessor() || {});
//        var settings = $.extend({}, ko.bindingHandlers.scrollspy.defaults, options);
//        $(element).scrollspy(settings);
//    }
//};

// TODO: Tab

ko.bindingHandlers.tooltip = {
    defaults: {},
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.tooltip.defaults, options);
        $(element).tooltip(settings);
    }
};

ko.bindingHandlers.popover = {
    defaults: {},
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.popover.defaults, options);
        $(element).popover(settings);
    }
};

ko.bindingHandlers.alert = {
    defaults: {},
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.alert.defaults, options);
        $(element).alert(settings);
    }
};


// TODO: Button

// TODO: Collapse

// TODO: Carousel

ko.bindingHandlers.typeahead = {
    defaults: {},
    init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var options = ko.utils.unwrapObservable(valueAccessor() || {});
        var settings = $.extend({}, ko.bindingHandlers.typeahead.defaults, options);
        $(element).typeahead(settings);
    }
};

// TODO: Affix
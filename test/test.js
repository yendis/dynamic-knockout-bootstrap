function AppViewModel() {
    var self = this;

    self.Title = ko.observable("Dynamic-knockout-bootstrap tests");

    // Tooltip
    self.tt_Text1 = "My tooltip!";
    self.tt_Text2 = ko.observable("My observable tooltip!");

    // Typeahead
    self.ta_List1 = ["Arnold", "Bob", "Charlie", "Jamie","James"];
    self.ta_List2 = ko.observableArray(self.ta_List1);
}

$(function () {
    ko.applyBindings(new AppViewModel());
});

// Override defaults
$.extend(ko.bindingHandlers.typeahead.defaults, {
    items: 5,
    minLength: 2
});

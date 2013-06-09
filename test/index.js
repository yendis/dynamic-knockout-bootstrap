function AppViewModel() {
    var self = this;

    self.Title = ko.observable("Dynamic-knockout-bootstrap tests");

    // Modal
    self.mo_Content = ko.observable();
    self.showModal = function () {
        self.mo_Content({ title: "Modal title", content: "Modal content.." });
        $(".modal").on('hide', self.hideModal);
    };
    self.hideModal = function () {
        self.mo_Content(null);
    };

    // Tooltip
    self.tt_Text1 = "My tooltip!";
    self.tt_Text2 = ko.observable("My observable tooltip!");

    // Popover
    self.po_Title = ko.observable("Observable popover title");
    self.po_Content = ko.observable("Observable popover content..");

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

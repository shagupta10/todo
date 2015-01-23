angular.module("myApp",["todo"]);
it('should check ng-class-odd and ng-class-even', function() {
    expect(element(by.repeater('item in todos').row(0).column('item')).getAttribute('class')).
        toMatch(/odd/);
    expect(element(by.repeater('item in todos').row(1).column('item')).getAttribute('class')).
        toMatch(/even/);
});
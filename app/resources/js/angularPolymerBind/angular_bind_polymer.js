angular
    .module('eee-c.angularBindPolymer', [])
    .directive('bindPolymer', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            scope: false,
            compile: function bindPolymerCompile(el, attr) {
                var attrMap = {};
                for (var prop in attr) {
                    if (angular.isString(attr[prop])) {
                        var _match = attr[prop].match(/\{\{\s*([\.\w]+)\s*\}\}/);
                        if (_match) {
                            attrMap[prop] = $parse(_match[1]);
                        }
                    }
                }
                return function bindPolymerLink(scope, element, attrs) {
                    Object.keys(attrMap).forEach(function (key) {
                        element.on(key + '-changed', function (event) {
                            scope.$evalAsync(function () {
                                if (attrMap[key](scope) === event.detail.value) return;
                                attrMap[key].assign(scope, event.detail.value);
                            });
                        });
                    });
                };
            }
        };
    }]);

/*angular.module('eee-c.angularBindPolymer', []).

    directive('bindPolymer', ['$parse', function ($parse) {
        
        'use strict';
        return {
            restrict: 'A',
            scope: false,
            compile: function bindPolymerCompile($element, $attr) {
                var attrMap = {};

                for (var prop in $attr) {
                    if (angular.isString($attr[prop])) {
                        var _match = $attr[prop].match(/\{\{\s*([\.\w]+)\s*\}\}/);
                        if (_match) {
                            attrMap[prop] = $parse(_match[1]);
                        }
                    }
                }

                return function bindPolymerLink(scope, element, attrs) {

                    // When Polymer sees a change to the bound variable,
                    // $apply / $digest the changes here in Angular
                    var observer = new MutationObserver(function processMutations(mutations) {
                        mutations.forEach(function processMutation(mutation) {
                            var attributeName, newValue, oldValue, getter;
                            attributeName = mutation.attributeName;

                            if (attributeName in attrMap) {
                                newValue = element.attr(attributeName);
                                getter = attrMap[attributeName];
                                oldValue = getter(scope);

                                if (oldValue != newValue && angular.isFunction(getter.assign)) {
                                    getter.assign(scope, newValue);
                                }
                            }
                        });
                        scope.$apply();
                    });

                    observer.observe(element[0], { attributes: true });
                    scope.$on('$destroy', observer.disconnect.bind(observer));
                }
            }
        };
    }]);*/
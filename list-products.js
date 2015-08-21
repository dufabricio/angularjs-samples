/**
 * Created by eduardo on 21/08/2015.
 */

function ListProductsController($scope) {
    $scope.products = [
        {description: 'Milk', quantity: 2, purchased: false},
        {description: 'Beer', quantity: 12, purchased: false}
    ];
}
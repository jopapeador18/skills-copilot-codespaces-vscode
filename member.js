function skillsMember()
{
    return{
        restrict: 'E',
        templateUrl: 'app/components/member/member.html',
        controller: 'skillsMemberCtrl',
        controllerAs: 'skillsMemberVM',
        bindToController: true,
        scope: {
            member: '='
    }
}
}

    

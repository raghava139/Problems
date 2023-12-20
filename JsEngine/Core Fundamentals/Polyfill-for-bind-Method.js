let Mname ={
    firstname:'yallamanda',
    lastname :'raghavendra'
}

let showInbuiltbind= function(check,check1,check2){
    console.log(`${this.firstname} ${this.lastname} ${check} ${check1} ${check2}`);
}

let testingbind = showInbuiltbind.bind(Mname,'rayachoty','kadapa');
testingbind('andrapradesh');

// if bind method is not supporting some not compatibility browser --->
// then we have an solution to write polyfill code means-->
// 'POLY' means "Many" and 'FILL' means "fill the gaps" in compatibility 

Function.prototype.mybind = function(...args){

    console.log('args',args.slice(1));
    let obj = this;
    // console.log('keyword',this);
    let params = args.slice(1);
    return function(...innerargs){
        console.log('inner args',innerargs);
        obj.apply(args[0],[...params,...innerargs])
    }
    
}

let testingbind2 = showInbuiltbind.mybind(Mname,'raychoty','kadapa');
testingbind2('AP');

// Note:-
// The key difference lies in their use cases:
// Spread Operator: Used for spreading elements or properties (e.g., in arrays or objects) to create copies, merge, or concatenate.
// Rest Operator: Used in function parameters to collect the remaining arguments into an array.
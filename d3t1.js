var a=[{"Name":"raj","Age":"23"},{"Name":"kishore","Age":"22"}]
for(let i=0; i<a.length; i++){
console.log(a[i]);
}

var a=[{"Name":"raj","Age":"23"},{"Name":"kishore","Age":"22"}];
for(let i in a){
console.log(a);
}

var a=[{"Name":"raj","Age":"23"},{"Name":"kishore","Age":"22"}];
for(let i of a){
console.log(a);
}

var a=[{"Name":"raj","Age":"23"},{"Name":"kishore","Age":"22"}];
a.forEach(function(x){
console.log(x);
});


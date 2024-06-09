function* GeneratorTest(){

    yield 20;
    yield 24;
}
 let  x = GeneratorTest();

console.log(x.next().value)
console.log(x.next().value)
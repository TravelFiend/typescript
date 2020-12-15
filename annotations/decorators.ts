@classDecorator
class Boat {
  @testDecorator
  color: string = 'green';

  @testDecorator
  get formattedColor(): string {
    return `This boat's color is ${this.color}`
  }
  
  @logError('The boat sank in the ocean')
  pilot(@parameterDecorator speed: string, @parameterDecorator makeWake: boolean): void {
    if(speed === 'fast'){
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }
};

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
  
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
};

function testDecorator(target: any, key: string) {
  console.log(key);
};

function logError(errorMessage: string) {
  return function (target: any,key: string, desc: PropertyDescriptor): void {    
    const method = desc.value;

    desc.value = function() {
      try{
        method();
      }catch(err){
        console.log(errorMessage);
      }
    };
  };
};

// run "ts-node decorator.ts" in console to see the decorators in action

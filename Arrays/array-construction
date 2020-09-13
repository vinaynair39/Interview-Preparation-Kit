class MyArray {
  length = 0;
  data = {};
  constructor(...args){
    for(const key in args){   //for(in) can also loop over an array to give out the indices
      this.data[key] = args[key]
    }
    this.length = args.length
  }

  append(input){
    this.data[this.length] = input
    this.length++;
  }

  pop(){
    const poppedData = this.data[this.length - 1];
    delete this.data[this.length - 1];
    return poppedData
  }

  insert(input, pos){
    for(let i=this.length; i >= pos; i--){
      this.data[i] = this.data[i - 1]
    }
    this.data[pos] = input
    this.length++;
  }


  insert(input, pos){
    for(let i=this.length; i >= pos; i--){
      this.data[i] = this.data[i - 1]
    }
    this.data[pos] = input
    this.length++;
  }

  removeAt(pos){
    const poppedData = this.data[pos]
    for(let i=pos; i<this.length - 1; i++){
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--;
    return poppedData
  }

}


const array = new MyArray(10, 20)

array.append(0)
array.append(1)
array.append(2)
array.append(4)
array.append(5)
array.insert(3, 3)
array.removeAt(3)
console.log(array)

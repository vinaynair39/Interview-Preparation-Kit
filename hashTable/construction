function hash(key, length){
  let hashedValue = 17;
  for(let i = 0; i < key.length; i++) {
    hashedValue = (13 * hashedValue * key.charCodeAt(i)) % length;
  }
  return hashedValue
}

class HashTable{
  data = new Array(100)
  numItems = 0;
  
  constructor(...args){
    for(const arg of args){
      this.setItem(arg[0], arg[1])
    }
  }

  setItem = (key, value) => {
    this.numItems++;
    const index = hash(key, this.data.length)
    if(this.data[index]){
      this.data[index].push([key, value])
    }
    else{
      this.data[index] = [[key, value]]
    }
  }

  getItem = (key) => {
    const idx = hash(key, this.data.length)
    if(!this.data[idx]) return null
    return this.data[idx].find(x => x[0] === key)[1]
  }
}

const myHash = new HashTable(['lastName','Nair']);

myHash.setItem('firstName', 'Vinay')
myHash.getItem('firstName')

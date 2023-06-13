class Array {
  arr = [];

  constructor(array) {
    this.arr = [...array];
  }

  display() {
    return this.arr;
  }

  add(value) {
    this.arr.push(value);
  }

  insert(index, value) {
    if (index < 0 || index > this.arr.length) return;

    for (let i = this.arr.length; i > index; i--) {
      this.arr[i] = this.arr[i - 1];
    }

    this.arr[index] = value;
  }

  delete(index) {
    if (index >= 0 && index < this.arr.length) {
      for (let i = index; i < this.arr.length - 1; i++) {
        this.arr[i] = this.arr[i + 1];
      }

      this.arr.length--;
    }
  }

  linearSearch(value) {
    // TODO: review swap not working.
    function swap(a, b) {
      let temp = this.arr[a];
      this.arr[a] = this.arr[b];
      this.arr[b] = temp;
    }

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] === value) {
        return i;
      }
    }

    return -1;
  }
}

module.exports = { Array };

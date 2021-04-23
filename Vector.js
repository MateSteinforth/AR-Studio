// Provides a simple 3D vector class. Vector operations can be done using member
// functions, which return new vectors, or static functions, which reuse
// existing vectors to avoid generating garbage.
// based on https://github.com/evanw/lightgl.js/blob/master/src/vector.js

// import with from main script via > const {Vector} = require('./Vector.js');
// make a new vector with           > var myvector = new Vector(1,2,3);

// ### Instance Methods
// The methods `add()`, `subtract()`, `multiply()`, and `divide()` can all
// take either a vector or a number as an argument.

export class Vector {
  constructor(x, y, z) {
      this.x = x || 0;
      this.y = y || 0;
      this.z = z || 0;
  }

  add(v) {
      if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
      else return new Vector(this.x + v, this.y + v, this.z + v);
  }

  subtract(v) {
      if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
      else return new Vector(this.x - v, this.y - v, this.z - v);
  }

  multiply(v) {
      if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
      else return new Vector(this.x * v, this.y * v, this.z * v);
  }

  divide(v) {
      if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
      else return new Vector(this.x / v, this.y / v, this.z / v);
  }

  equals(v) {
      return this.x == v.x && this.y == v.y && this.z == v.z;
  }

  dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
      return new Vector(
          this.y * v.z - this.z * v.y,
          this.z * v.x - this.x * v.z,
          this.x * v.y - this.y * v.x
      );
  }

  length() {
      return Math.sqrt(this.dot(this));
  }

  unit() {
      return this.divide(this.length());
  }

  min() {
      return Math.min(Math.min(this.x, this.y), this.z);
  }

  max() {
      return Math.max(Math.max(this.x, this.y), this.z);
  }

  toAngles() {
      return {
          theta: Math.atan2(this.z, this.x),
          phi: Math.asin(this.y / this.length())
      };
  }

  angleTo(a) {
      return Math.acos(this.dot(a) / (this.length() * a.length()));
  }

  toArray(n) {
      return [this.x, this.y, this.z].slice(0, n || 3);
  }

  clone() {
      return new Vector(this.x, this.y, this.z);
  }

  init(x, y, z) {
      this.x = x; this.y = y; this.z = z;
      return this;
  }

  // ### Static Methods
  // `Vector.randomDirection()` returns a vector with a length of 1 and a
  // statistically uniform direction. `Vector.lerp()` performs linear
  // interpolation between two vectors.
  static negative(a, b) {
      b.x = -a.x; b.y = -a.y; b.z = -a.z;
      return b;
  }

  static add(a, b, c) {
      if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
      else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
      return c;
  }

  static subtract(a, b, c) {
      if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
      else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
      return c;
  }

  static multiply(a, b, c) {
      if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
      else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
      return c;
  }

  static divide(a, b, c) {
      if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
      else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
      return c;
  }

  static cross(a, b, c) {
      c.x = a.y * b.z - a.z * b.y;
      c.y = a.z * b.x - a.x * b.z;
      c.z = a.x * b.y - a.y * b.x;
      return c;
  }

  static unit(a, b) {
      var length = a.length();
      b.x = a.x / length;
      b.y = a.y / length;
      b.z = a.z / length;
      return b;
  }

  static fromAngles(theta, phi) {
      return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
  }

  static randomDirection() {
      return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
  }

  static min(a, b) {
      return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
  }

  static max(a, b) {
      return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
  }

  static lerp(a, b, fraction) {
      return b.subtract(a).multiply(fraction).add(a);
  }

  static fromArray(a) {
      return new Vector(a[0], a[1], a[2]);
  }

  static angleBetween(a, b) {
      return a.angleTo(b);
  }
};

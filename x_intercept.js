function x_intercept(L0, L1) { // point signal, ignores z
  return L0.x.sub(L0.y.mul(L1.x.sub(L0.x)).div(L1.y.sub(L0.y))); // scalar signal
}

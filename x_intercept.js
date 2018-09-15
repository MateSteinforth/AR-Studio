function intercept(L0, L1, y) { // point signal, ignores z
  return y.sub(L0.y).div((L1.y.sub(L0.y)).div(L1.x.sub(L0.x))).add(L0.x) ; 
}

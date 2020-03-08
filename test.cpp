
int add(int n1, int n2) {
  return n1 + n2;
}

// this compiles to wasm and wat file (wat is readable)
// -> function name 'add' gets renamed to something like this '_Z3addii'
// https://mbebenita.github.io/WasmExplorer/
// (run this on this site) and check .wat file to find '_Z3addii' translation
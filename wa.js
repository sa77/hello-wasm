let add;

// this is required to load the actual wasm module
// makes Asyc wasm API call within the browser
// once done, you can run it via javascript
function loadWasm(filename) {
  return fetch(filename)
  .then(response => response.arrayBuffer())
  .then(bits => WebAssembly.compile(bits))
  .then(module => {
    return new WebAssembly.Instance(module)
  });
}

// --- loadWasm(filename)
// take the WASM filename
// then => the fetch method is going to grab the file with that filename, then return that WASM bytecode into an array buffer
// then => take that bits from the arrayBuffer, and use WebAssembly to comile it
// then => take the module that got compiled for us, then instantiate WebAssembly Instance

// test.wasm we fetch from the server
// then => take the instance it got compiled for
loadWasm('test.wasm')
.then(instance => {
  add = instance.exports._Z3addii;
  document.getElementById('add1').innerHTML = add(1,2)
  document.getElementById('add2').innerHTML = add(998,777)
})

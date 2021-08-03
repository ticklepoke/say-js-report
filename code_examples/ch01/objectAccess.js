const obj = {
  a: function () {
    return 1;
  },
};

function getBChar() {
  return "a";
}

obj.a(); // 1;

obj["a"](); // 1;

obj[getBChar()](); // 1;

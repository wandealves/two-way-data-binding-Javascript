const model = {
  value: ""
};

load = () => {
  const number = document.getElementById("ipt-number");
  number.value = "0";

  Object.defineProperty(model, "prop", {
    get: function () {
      console.log("Getter called");
      return this.value;
    },
    set: function (value) {
      console.log("Setter called", value);
      this.value = value;
      printVal();
    }
  });
};

increment = () => {
  let val = parseInt(model.prop || 0) + 1;
  model.prop = val;
};

decrement = () => {
  let val = parseInt(model.prop || 0) - 1;
  if (val < 0) val = 0;
  model.prop = val;
};

printVal = () => {
  const el = document.getElementById("ipt-number");
  el.value = model.prop;
};

load();

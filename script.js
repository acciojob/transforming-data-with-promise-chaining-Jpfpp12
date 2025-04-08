//your JS code here. If required.
    const btn = document.getElementById("btn");
    const result = document.getElementById("output");

    function MultipliedByTwo(value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const multiplied = value * 2;
          resolve(multiplied);
        }, 1000);
      });
    }

    function SubtractThree(value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const subtracted = value - 3;
          resolve(subtracted);
        }, 1000);
      });
    }

    function DividedByTwo(value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const divided = value / 2;
          resolve(divided);
        }, 1000);
      });
    }

    function AddTen(value) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const added = value + 10;
          resolve(added);
        }, 1000);
      });
    }

    btn.addEventListener("click", () => {
      const inputValue = parseFloat(document.getElementById("ip").value);


      MultipliedByTwo(inputValue)
        .then(res1 => {
          result.innerHTML += `<br>Result: ${res1}`;
          return SubtractThree(res1);
        })
        .then(res2 => {
          result.innerHTML += `<br>Result: ${res2}`;
          return DividedByTwo(res2);
        })
        .then(res3 => {
          result.innerHTML += `<br>Result: ${res3}`;
          return AddTen(res3);
        })
        .then(finalRes => {
          result.innerHTML += `<br>Result: ${finalRes}`;
        })
        .catch(err => {
          result.innerHTML = `<span style="color:red">Error: ${err}</span>`;
        });
    });
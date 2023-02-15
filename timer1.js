


let times = [10, 3, 5, 15, 7];
if (times && times.length > 0) {

  times = times.sort((a, b) => a - b);
  console.log(times);

  process.stdout.write('hello from spinner1.js... \rheyyy\n');

  for (let i of times) {
    setTimeout(() => {

      process.stdout.write('\x07');
      console.log(i);
    }, i * 1000);
  };

};


const potrace = require("potrace");
const fs = require("fs");

const input = process.argv[2];
const output = process.argv[3];

potrace.trace(input, function (err, svg) {
  if (err) throw err;
  fs.writeFileSync(output, svg);
});

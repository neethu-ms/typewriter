const sentence = "hello there from lighthouse labs";

let count = 0;
for (const char of sentence) {
  count += 50;
  setTimeout(()=>{
    process.stdout.write(char);
       
       
  },count);
}
count += 50;
setTimeout(() => {
  process.stdout.write('\n');
}, count);





const { readFile } = require("fs").promises;
const path = require("path");


async function isDisposable(email) {
  const filePath = path.join(__dirname, "disposable_email_blocklist.conf");
  const content = await readFile(filePath, { encoding: "utf-8" });

  const blocklist = content.split(/\r?\n/).filter(line => line.trim() !== '');
 
  // console.log(blocklist);
  // console.log("Email : " + email.split("@")[1]);
  // console.log("If includes: " + blocklist.includes(email.split("@")[1]));
  const dummyincludes = blocklist.includes(email.split("@")[1])
  
  return dummyincludes;
}
// setTimeout(()=>{
//   const hi = isDisposable("oglnoftah@emltmp.com")
//   console.log(hi)

// },20000)
module.exports = {isDisposable}

function checkCap(string) {
    if (string === string.toUpperCase()) {
      console.log("SHOUTING:", string);
    } else if (string === string.toLowerCase()) {
      console.log("whispering:", string);
    } else {
      console.log("talking normally:", string);
    }
  }
  
checkCap("HELLO WORLD"); // Outputs: "SHOUTING: HELLO WORLD"

checkCap("hello world"); // Outputs: "whispering: hello world"

checkCap("Hello World"); // Outputs: "talking normally: Hello World"

/* In this code I created a functino called checkCaps. The way that it works is: if 
input is === .checkCaps, the console log will output a string that it's shouting, + the input you wrote in caps. 
if input is === to .toLowerCase then the console log will output a string that it's whispering + the lowercase text that you wrote. 
the last input is talking normally so when you have a capital as first letter it will output it as talking normally. 

How do I test? simply do checkCaps("YOURTEXTHERE"); and it will output one of the 3 options. */
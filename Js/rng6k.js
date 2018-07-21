var freq1=0;
var freq2=0;
var freq3=0;
var freq4=0;
var freq5=0;
var freq6=0;
var face;

for(var roll=1; roll <= 6000; roll++) {
  face=Math.floor(1+Math.random() * 6);
  switch(face) {
    case 1: 
       ++freq1;
      break;
    case 2:
      ++freq2;
      break;
    case 3:
      ++freq3;
      break;
    case 4:
      ++freq4;
      break;
    case 5:
      ++freq5;
      break;
    case 6:
      ++freq6;
      break;
  }
}
document.writeln("<table border = \"1\">");
document.writeln("<thead><th>Face</th" + "<th>Frequency</th></thead");
document.writeln("<tbody><tr><td>1</td><td>" + freq1 + "</td></tr>");
document.writeln("<tr><td>2</td><td>" + freq2 + "</td></tr>");
document.writeln("<tr><td>3</td><td>" + freq3 + "</td></tr>");
document.writeln("<tr><td>4</td><td>" + freq4 + "</td></tr>");
document.writeln("<tr><td>5</td><td>" + freq5 + "</td></tr>");
document.writeln("<tr><td>6</td><td>" + freq6 + "</td></tr><tbody></table");

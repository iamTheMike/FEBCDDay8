const submitbutton = document.getElementById("submitButton");
submitButton.addEventListener("click", addContent);
 
function addContent(){
    console.log("It's work");
    const text = document.getElementById("textInput").value;
    const result = document.getElementById("result");
    //เพิ่ม element content
    /*const newDiv = document.createElement("div");
    const newContent = document.createTextNode(text);
    newDiv.appendChild(newContent);
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv) ;*/

    result.innerHTML+=`<h1>${text}</h1>`
}
//การเรียก data จากข่้างนอก
/*API endpoint เปน URL
fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json()) //หน่วงเวลา เพราะว่ามีการรอในการดึงข้อมูลให้เสร๋จก่อน
      .then(json => console.log(json)) //หน่วงเวลา เพื่อรอให้่ดึงข้อมูลให้เสร็จ
*/

async function fetchData(){
   const data = await fetch('https://jsonplaceholder.typicode.com/todos/')
   console.log(data);
   const json = await data.json(); 
   console.log(json);

   const titleList = document.getElementById("titleList")
   for(let i=0; i<json.length; i++){
       titleList.innerHTML += `<h3>${json[i].title}</h3>`
   }
}
fetchData()

const xhr= new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
xhr.onload=function(){
    console.log(xhr.responseText);
}

const xhr = new XMLHttpRequest();
const url = "https://output.jsbin.com/qiwizo.json";
xhr.addEventListener("load",()=>{const data = JSON.parse(xhr.responseText);console.log(data)})
xhr.open("GET",url);
xhr.send();


// const url = "https://output.jsbin.com/qiwizo.json";

fetch(url)
  .then(response => {
    // 首先检查响应是否成功
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // 解析JSON数据
  })
  .then(data => {
    console.log(data); // 处理数据
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

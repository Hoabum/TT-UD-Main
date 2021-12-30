function getvalue() {
  var checkbox = document.getElementsByName("vehicle");

  var result = "";
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked === true) {
      result += " " + checkbox[i].value;
    }
  }
  let arr = result.split(" ").slice(1);
  console.log(arr);
  // var n = arr.includes("KN");
  // console.log(n);
}

const courses = [
  {
    content: "Khái niệm",
    link: "#",
    category: ["KN"],
    itemsFirst: [
      {
        content: "Chương 1: Logic",
        link: "#",
      },
      {
        content: "Chương 2: Logic",
        link: "#",
      },
      {
        content: "Chương 3: Logic",
        link: "#",
      },
    ],
  },
  {
    content: "Định lí & Tính chất",
    link: "#",
    category: ["DL"],
    itemsChild: [
      {
        content: "Chương 1: Logic",
        link: "#",
      },
      {
        content: "Chương 2: Logic",
        link: "#",
      },
      {
        content: "Chương 3: Logic",
        link: "#",
      },
    ],
  },
  {
    content: "Dạng bài tập",
    link: "#",
    category: ["DBT"],
    itemsChild: [
      {
        content: "Chương 1: Logic",
        link: "#",
      },
      {
        content: "Chương 2: Logic",
        link: "#",
      },
      {
        content: "Chương 3: Logic",
        link: "#",
      },
    ],
  },
  {
    content: "Phương pháp giải",
    link: "#",
    category: ["PPG"],
    itemsChild: [
      {
        content: "Chương 1: Logic",
        link: "#",
      },
      {
        content: "Chương 2: Logic",
        link: "#",
      },
      {
        content: "Chương 3: Logic",
        link: "#",
      },
    ],
  },
];
// $(document).ready(function(){
//     $(".contents").empty();
//     $("#btn1").click(function(){
//       $(".contents").append( `<li ><a href="${item.link}">${item.content}</a></li>`);
//     });
//   });

function render(courses) {
  return courses.category;
}
var newcourses = courses.map(render);
// console.log(newcourses);
// function renderSilebar(courses){
//     $(".sidebar1").empty();
//     let itemChild= null;
//     courses.map(item=>{
//        if(item.itemChild){
//            itemChild = item.itemChild.map(item=>{
//                `<li ><a href="${item.link}">${item.content}</a></li>`
//            });
//        }
//        return `<li><a href="${item.link}"> ${item.content}</a>
//         <ul>
//         </ul>
//        </li>`

//     })

// }

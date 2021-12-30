$(document).ready(function () {
  const courses = [
    {
      content: "Khái niệm",
      link: "#",
      category: ["KN"],
    },
    {
      content: "Định lí & Tính chất",
      link: "#",
      category: ["DL"],
     
    },
    {
      content: "Dạng bài tập",
      link: "#",
      category: ["DBT"],
    },
    {
      content: "Phương pháp giải",
      link: "#",
      category: ["PPG"],
      
    },
  ];

  renderTeam(courses, "#checkboxs");
});

function renderTeam(list, selector) {
  list.map((val, index) => {
    $(
      `<input onClick ="updateList()" type="checkbox" class="vehicle" name="vehicle" value="${val.category[0]}">
       <label for="vehicle1"> ${val.content}</label><br>`
    ).appendTo(selector);
  });
}

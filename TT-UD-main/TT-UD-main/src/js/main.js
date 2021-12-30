const renderCateOnSideBar = (list, selection) => {
    list.forEach((val, idx) => {
        $(
            `
      <li >
        <a href="${val.link}" class="btn-${val.category}">${val.content}
          <span class="fas fa-caret-down child-${val.category}"></span> 
        </a>
        <ul class="content-${val.category}">
          <li>
            <a href="${val.link}" class=" ${val.category}-${val.itemsChild[0].id} ">${val.itemsChild[0].content}
                <span class="fas fa-chevron-down first-${val.category}" style="font-size: 10px;"></span> 
            </a>
            <ul class="content-${val.category}-${val.itemsChild[0].id} ">
                <li class="topic-content">
                    <a class="${val.category}-b1" style=" padding-left: 50px;">${val.itemsChild[0]. itemsFisrt[0].content}</a>
                </li>
                <li class="topic-content">
                    <a class="${val.category}-b2" style=" padding-left: 50px;">${val.itemsChild[0]. itemsFisrt[1].content}</a>
                </li>
                <li class="topic-content">
                <a class="${val.category}-b3" style=" padding-left: 50px;">${val.itemsChild[0]. itemsFisrt[2].content}</a>
                </li>
            </ul>
          </li>
          <li><a href="${val.link}" class=" ${val.category}-${val.itemsChild[1].id}">${val.itemsChild[1].content}
                <span class="fas fa-chevron-down first1-${val.category}"  style="font-size: 10px;"></span>  
            </a>
                <ul class="content-${val.category}-${val.itemsChild[1].id}">
                    <li class="topic-content">
                        <a class="${val.category}-b4" style=" padding-left: 50px;">${val.itemsChild[1]. itemsFisrt[0].content}</a>
                    </li>
                    <li class="topic-content">
                        <a class="${val.category}-b5" style=" padding-left: 50px;">${val.itemsChild[1]. itemsFisrt[1].content}</a>
                    </li>
                    <li class="topic-content">
                    <a class="${val.category}-b6" style=" padding-left: 50px;">${val.itemsChild[1]. itemsFisrt[2].content}</a>
                    </li>
                </ul>
          </li>
          <li><a href="${val.link}" class=" ${val.category}-${val.itemsChild[2].id}">${val.itemsChild[2].content}
                <span class="fas fa-chevron-down first2-${val.category}" style="font-size: 10px;"></span> 
                </a>
                <ul class="content-${val.category}-${val.itemsChild[2].id}">
                    <li class="topic-content">
                        <a class="${val.category}-b7" style=" padding-left: 50px;">${val.itemsChild[2]. itemsFisrt[0].content}</a>
                    </li>
                    <li class="topic-content">
                        <a class="${val.category}-b8" style=" padding-left: 50px;">${val.itemsChild[2]. itemsFisrt[1].content}</a>
                    </li>
                    <li class="topic-content">
                    <a class="${val.category}-b9" style=" padding-left: 50px;">${val.itemsChild[2]. itemsFisrt[2].content}</a>
                    </li>
                </ul>
          </li>
        </ul>                   
      </li>`
        ).appendTo(selection);
        $(`.btn-${val.category}`).click(function(event) {
            $(`.content-${val.category}`).toggleClass("show");
            $(`.child-${val.category}`).toggleClass("rotate");
            event.preventDefault()
        });
        $(`.${val.category}-${val.itemsChild[0].id}`).click(function(event) {
            $(`.content-${val.category}-${val.itemsChild[0].id}`).toggleClass("show");
            $(`.first-${val.category}`).toggleClass("rotate");
            event.preventDefault()
        });

        $(`.${val.category}-${val.itemsChild[1].id}`).click(function(event) {
            $(`.content-${val.category}-${val.itemsChild[1].id}`).toggleClass("show");
            $(`.first1-${val.category}`).toggleClass("rotate");
            event.preventDefault()
        });
        $(`.${val.category}-${val.itemsChild[2].id}`).click(function(event) {
            $(`.content-${val.category}-${val.itemsChild[2].id}`).toggleClass("show");
            $(`.first2-${val.category}`).toggleClass("rotate");
            event.preventDefault()
        });




        // $(`${val.category}-b1`).click(function (event) {
        //   $(`.content-b1`).toggleClass("show");
        //   event.preventDefault()  
        // });
        renderContent(val.category);

    });
};


const updateList = () => {
    const courses = [{
            content: "Khái niệm",
            link: "#",
            category: "KN",

            itemsChild: [{
                    content: "Chương 1: Logic",
                    link: "#",
                    id: "C1",
                    itemsFisrt: [{
                            content: "Mệnh đề",
                            link: "#",

                        },
                        {
                            content: "Dạng Mệnh đề",
                            link: "#",
                        },
                        {
                            content: "Tương đương Logic",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 2:Quan Hệ",
                    link: "#",
                    id: "C2",
                    itemsFisrt: [{
                            content: "Quan hệ hai ngôi",
                            link: "#",
                        },
                        {
                            content: "Quan hệ tương đương",
                            link: "#",
                        },
                        {
                            content: "Quan hệ thức tự",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 3: Hàm Boole",
                    link: "#",
                    id: "C3",
                    itemsFisrt: [{
                            content: "Hàm bool",
                            link: "#",
                        },
                        {
                            content: "Đại Số Bool",
                            link: "#",
                        },
                        {
                            content: "Mạch logic",
                            link: "#",
                        },
                    ]
                },

            ],
        },
        {
            content: "Định lí & Tính chất",
            link: "#",
            category: "DL",
            itemsChild: [{
                    content: "Chương 1: Logic",
                    link: "#",
                    id: "C1",
                    itemsFisrt: [{
                            content: "Tương đương logic",
                            link: "#",
                        },
                        {
                            content: "Các luật logic",
                            link: "#",
                        },
                        {
                            content: "Quy Tắc suy diễn",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 2:Quan Hệ",
                    link: "#",
                    id: "C2",
                    itemsFisrt: [{
                            content: "Tính phản xạ",
                            link: "#",
                        },
                        {
                            content: "Tính đối xứng",
                            link: "#",
                        },
                        {
                            content: "Tính bắt cầu",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 3: Hàm Boole",
                    link: "#",
                    id: "C3",
                    itemsFisrt: [{
                            content: "Tính kết hợp",
                            link: "#",
                        },
                        {
                            content: "Tính giao hoán",
                            link: "#",
                        },
                        {
                            content: "Tính phân bố",
                            link: "#",
                        },

                    ]
                },

            ],
        },
        {
            content: "Dạng bài tập",
            link: "#",
            category: "DBT",
            itemsChild: [{
                    content: "Chương 1: Logic",
                    link: "#",
                    id: "C1",
                    itemsFisrt: [{
                            content: " Các phép toán cơ bản",
                            link: "#",
                        },
                        {
                            content: "Biểu thức tường minh",
                            link: "#",
                        },
                        {
                            content: "Một số bài Logic",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 2:Quan Hệ",
                    link: "#",
                    id: "C2",
                    itemsFisrt: [{
                            content: " Tính chất nào? ",
                            link: "#",
                        },
                        {
                            content: "Cho S",
                            link: "#",
                        },
                        {
                            content: "Vẽ sơ đồ Hasse",
                            link: "#",
                        },

                    ]
                },
                {
                    content: "Chương 3: Hàm Boole",
                    link: "#",
                    id: "C3",
                    itemsFisrt: [{
                            content: " Dạng biểu diễn hàm Boolean",
                            link: "#",
                        },
                        {
                            content: "Dạng Cổng Logic",
                            link: "#",
                        },
                        {
                            content: "Bản đồ Karnaugh",
                            link: "#",
                        },
                    ]
                },
            ],
        },
        {
            content: "Phương pháp giải",
            link: "#",
            category: "PPG",
            itemsChild: [{
                    content: "Chương 1: Logic",
                    link: "#",
                    id: "C1",
                    itemsFisrt: [{
                            content: " Mệnh đề Trong Đại số",
                            link: "#",
                        },
                        {
                            content: "Chứng minh công thức",
                            link: "#",
                        },
                        {
                            content: "Kiểm chứng",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 2:Quan Hệ",
                    link: "#",
                    id: "C2",
                    itemsFisrt: [{
                            content: " Phương trình trên  Zn",
                            link: "#",
                        },
                        {
                            content: "Phương pháp Maple",
                            link: "#",
                        },
                        {
                            content: "Kiểm chứng",
                            link: "#",
                        },
                    ]
                },
                {
                    content: "Chương 3: Hàm Boole",
                    link: "#",
                    id: "C3",
                    itemsFisrt: [{
                            content: "Nối rời chính tắc",
                            link: "#",
                        },
                        {
                            content: "Thuật toán tìm các họ phủ",
                            link: "#",
                        },
                        {
                            content: "Biểu thức tường minh",
                            link: "#",
                        },
                    ]
                },
            ],
        },
    ];


    //console.log(courses[1].category);
    $("#myTable").empty();
    let allCheckBox = document.querySelectorAll(".vehicle");

    let item = [];
    for (i = 0; i < allCheckBox.length; i++) {
        if (allCheckBox[i].checked) {
            item.push(allCheckBox[i].defaultValue);
        }
    }
    let final = [];
    for (j = 0; j < item.length; j++) {
        for (k = 0; k < courses.length; k++) {
            console.log(courses[k].category)
            if (item[j] === courses[k].category) {

                final.push(courses[k]);
            }
        }
    }

    renderCateOnSideBar(final, "#myTable");
};

const renderContent = (id) => {
    if (id == "KN") {
        $(`.${id}-b1`).click(function(event) {
            $(".ND").toggleClass("ND-b1-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c1")
            $(".KTLQ").empty();
            $('.ND-b1-c1').append(`
                <p>là một khẳng định có giá trị chân lý xác định, đúng hoặc sai. </p>
            </p>Câu hỏi, câu cảm thán, mệnh lệnh... không là mệnh đề. </p>
            </p>+  ví dụ:  </p>
            <ul>
                <li>mặt trời quay quanh trái đất</li>
                <li>Hôm nay trời đẹp quá !  (ko là mệnh đề)</li>
                <li>1+1 =2</li>
                <li>Học bài đi ! (ko là mệnh đề)</li>
                <li>3 là số chẵn phải không? (ko là mệnh đề)</li>
            </ul>
            <p>+ kí hiệu: người ta dùng các ký hiệu P, Q, R... để chỉ mệnh đề.</p>
               
            `);
            $('.KTLQ-b1-c1').append(`
                    <p>
                    - Mệnh đề phức hợp: là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ (và, hay, khi và chỉ khi,...) hoặc trạng từ “không”.<br>
                    - Mệnh đề sơ cấp (nguyên thủy): Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “không”.          
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b2`).click(function(event) {
            $(".ND").toggleClass("ND-b2-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c1")
            $(".KTLQ").empty();
            $('.ND-b2-c1').append(`
                <p> + một mệnh đề chỉ có thể đúng hoặc sai, không thể đồng thời  vừa đúng hoặc vừa sai. khi mệnh đề P đúng ta nói P có chân trị đúng , ngược lại ta nói P có chân trị sai.</p>
                <p> + chân trị đúng và chân trị sai sẽ được ký hiệu lần lượt là là 1(hay Đ,T) và 0( S,F).</p>
                <p>+ Phân Loại</p>
                <ul>
                    <li>
                        mệnh đề phức hợp : là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ ( và, hay , khi  và chỉ khi) hoặc trạng từ “không”</li>
                    <li>mệnh đề sơ cấp: ( nguyên thủy) : Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “ không”.</li>
            
                    
                </ul>
            `);
            $('.KTLQ-b2-c1').append(`
                    <p>
                    - Mệnh đề phức hợp: là mệnh đề được xây dựng từ các mệnh đề khác nhờ liên kết bằng các liên từ (và, hay, khi và chỉ khi,...) hoặc trạng từ “không”.<br>
                    - Mệnh đề sơ cấp (nguyên thủy): Là mệnh đề không thể xây dựng từ các mệnh đề khác thông qua liên từ hoặc trạng từ “không”.          
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b3`).click(function(event) {
            $(".ND").toggleClass("ND-b3-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c1")
            $(".KTLQ").empty();
            $('.ND-b3-c1').append(`
                <p>Dạng Mệnh đề  là một biểu thức được cấu tạo từ:   </p>
            <p>    -  Các mệnh đề (các hằng mệnh đề)   </p>
            <p>  -  Các biến mệnh đềp, q, r, ..., tức là các biến lấy giá trị là các mệnh đề nào đó  </p>
            <p>    -  Các phép toán  ¬, ∧, ∨, →, ↔ và dấu đóng mở ngoặc ()</p>
            `);
            $('.KTLQ-b3-c1').append(`
                    <p>
                    Phép phủ định <br>
                    Phép nối liền <br>
                    Phép nối rời (tuyển, hợp) <br>
                    Phép kéo theo<br>
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b4`).click(function(event) {
            $(".ND").toggleClass("ND-b4-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b4-c2")
            $(".KTLQ").empty();
            $('.ND-b4-c2').append(`
                <p>
                quan hệ hai ngôi (hay còn gọi là quan hệ nhị phân) trên hai tập A và B là một tập các cặp được sắp (a, b), chứa các phần tử a thuộc A và các phần tử b thuộc B. Đó là một tập con của tích Descartes A × B. Nó mã hóa thông tin quan hệ: một phần tử a có liên quan với một phần tử b khi và chỉ khi cặp (a, b) thuộc về một tập hợp
                </p>
                <p>Một quan hệ hai ngôi từ tập A đến tập B là tập con R của tích Descartes A × B. <br>
                Quan hệ từ A đến chính nó được gọi là quan hệ hai ngôi (hay quan hệ ) trên A.
                </p>
            `);
            $('.KTLQ-b4-c2').append(`
                    <p>
                    Quan hệ hai ngôi (hay còn gọi là quan hệ nhị phân)
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b5`).click(function(event) {
            $(".ND").toggleClass("ND-b5-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b5-c2")
            $(".KTLQ").empty();
            $('.ND-b5-c2').append(`
                <p>Cho quan hệ hai ngôi ℜ trên tập hợp S ≠ ∅.</p> 
                <p>a)  ℜ là một quan hệ tương đương trên S nếu ℜ phản xạ, đối xứng và truyền trên S.</p> 
                <p>b)  Ta dùng ký hiệu ~ để thể hiện một quan hệ tương đương tổng quát.</p> 
                <p>Ký hiệu (S,~) được hiểu là trên tập hợp S có quan hệ tương đương ~ .</p> 
                <p>∀x,y ∈ S, nếu x ~ y thì ta nói một cách hình thức rằng “ x tương đương với y ”</p> 
                <p> c) Nếu ℜ là một quan hệ tương đương trên S và ∅ ≠ T ⊂ S thì ℜ cũng là  một quan hệ tương đương trên T.</p> 
                
            `);
            $('.KTLQ-b5-c2').append(`
                    <p>
                    quan hệ hai ngôi ℜ trên tập hợp S ≠ ∅
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b6`).click(function(event) {
            $(".ND").toggleClass("ND-b6-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b6-c2")
            $(".KTLQ").empty();
            $('.ND-b6-c2').append(`
                <p>Cho quan hệ hai ngôi ℜ trên tập hợp S ≠ ∅.</p>
            <p>ℜ là một quan hệ thứ tự trên S nếu ℜ phản xạ, phản xứng và truyền trên S.</p>
            <p>Ta dùng ký hiệu  để thể hiện một quan hệ thứ tự tổng quát.</p>
             <p>Ký hiệu (S,  ) được hiểu là trên tập hợp S có quan hệ thứ tự  .</p>
            <p>∀x,y ∈ S, nếu x  y thì ta nói một cách hình thức </p>
            <p>“ x nhỏ hơn y ” hay “ x kém hơn y ” hay “ x đứng trước y ” hay “ y lớn hơn x ” hay “ y trội hơn x ” hay “ y đứng sau x ”</p>
           <p>Nếu ℜ là một quan hệ thứ tự trên S và ∅ ≠ T ⊂ S thì ℜ cũng là một quan hệ thứ tự trên T.</p>
        
                
            `);
            $('.KTLQ-b6-c2').append(`
                    <p>
                    quan hệ hai ngôi ℜ trên tập hợp S ≠ ∅
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b7`).click(function(event) {
            $(".ND").toggleClass("ND-b7-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b7-c3")
            $(".KTLQ").empty();
            $('.ND-b7-c3').append(`
                <p>Tập hợp khác rỗng S cùng với các phép toán ký hiệu nhân (.), cộng (+), lấy bù (’)      được gọi là một đại số Boole nếu các tiên đề sau đây được thoả mãn với mọi a, b, c ∈ S.</p>
                <p>Mỗi một biểu thức Boole biểu diễn một hàm Boole. Các giá trị của hàm này nhận được bằng cách thay 0 và 1 cho các biến trong biểu thức đó</p>
                <p>∀x,y ∈ S, nếu x  y thì ta nói một cách hình thức </p>
                <p>Hai hàm n biến F và G được gọi là bằng nhau nếu F(a1, a2, …, an)=G(a1, a2, …,an) với mọi a1, a2, …, anB. Hai biểu thức Boole khác nhau biểu diễn cùng một hàm Boole được gọi là tương đương. Phần bù của hàm Boole F là hàm  với (x1, x2, …, xn) = . Giả sử F và G là các hàm Boole bậc n. Tổng Boole F+G và tích Boole FG được định nghĩa </p>
                
            `);
            $('.KTLQ-b7-c3').append(`
                    <p>
                    Đa Thức Tối Tiểu
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b8`).click(function(event) {
            $(".ND").toggleClass("ND-b8-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b8-c3")
            $(".KTLQ").empty();
            $('.ND-b8-c3').append(`
                <p>Ký hiệu B = {0, 1} và Bn = {(x1, x2, …, xn) | xiB, 1≤ i ≤ n}, ở đây B và Bn là các đại số Boole (xem 2) và 3) của Thí dụ 1). Biến x được gọi là một biến Boole nếu nó nhận các giá trị chỉ từ B. Một hàm từ Bn vào B được gọi là một hàm Boole (hay hàm đại số lôgic) bậc n.        .</p>
                <p>Các hàm Boole cũng có thể được biểu diễn bằng cách dùng các biểu thức được tạo bởi các biến và các phép toán Boole (xem Bảng 1 trong Thí dụ 1). Các biểu thức Boole với các biến x1, x2, …, xn được định nghĩa bằng đệ quy </p>
                <p>Nếu P và Q là các biểu thức Boole thì , PQ và P+Q cũng là các biểu thức Boole</p>
                <p>Mỗi một biểu thức Boole biểu diễn một hàm Boole. Các giá trị của hàm này nhận được bằng cách thay 0 và 1 cho các biến trong biểu thức đó</p>
                <p>∀x,y ∈ S, nếu x  y thì ta nói một cách hình thức </p>
                <p>Hai hàm n biến F và G được gọi là bằng nhau nếu F(a1, a2, …, an)=G(a1, a2, …,an) với mọi a1, a2, …, anB. Hai biểu thức Boole khác nhau biểu diễn cùng một hàm Boole được gọi là tương đương. Phần bù của hàm Boole F là hàm  với (x1, x2, …, xn) = . Giả sử F và G là các hàm Boole bậc n. Tổng Boole F+G và tích Boole FG được định nghĩa </p>
                
                
            `);
            $('.KTLQ-b8-c3').append(`
                    <p>
                    Đa Thức Tối Tiểu
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b9`).click(function(event) {
            $(".ND").toggleClass("ND-b9-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b9-c3")
            $(".KTLQ").empty();
            $('.ND-b9-c3').append(`
                <p>Ký hiệu B = {0, 1} và Bn = {(x1, x2, …, xn) | xiB, 1≤ i ≤ n}, ở đây B và Bn là các đại số Boole (xem 2) và 3) của Thí dụ 1). Biến x được gọi là một biến Boole nếu nó nhận các giá trị chỉ từ B. Một hàm từ Bn vào B được gọi là một hàm Boole (hay hàm đại số lôgic) bậc n.        .</p>
                <p>Các hàm Boole cũng có thể được biểu diễn bằng cách dùng các biểu thức được tạo bởi các biến và các phép toán Boole (xem Bảng 1 trong Thí dụ 1). Các biểu thức Boole với các biến x1, x2, …, xn được định nghĩa bằng đệ quy </p>
                <p>Nếu P và Q là các biểu thức Boole thì , PQ và P+Q cũng là các biểu thức Boole</p>
                <p>Mỗi một biểu thức Boole biểu diễn một hàm Boole. Các giá trị của hàm này nhận được bằng cách thay 0 và 1 cho các biến trong biểu thức đó</p>
                <p>∀x,y ∈ S, nếu x  y thì ta nói một cách hình thức </p>
                <p>Hai hàm n biến F và G được gọi là bằng nhau nếu F(a1, a2, …, an)=G(a1, a2, …,an) với mọi a1, a2, …, anB. Hai biểu thức Boole khác nhau biểu diễn cùng một hàm Boole được gọi là tương đương. Phần bù của hàm Boole F là hàm  với (x1, x2, …, xn) = . Giả sử F và G là các hàm Boole bậc n. Tổng Boole F+G và tích Boole FG được định nghĩa </p>
                
                
            `);
            $('.KTLQ-b9-c3').append(`
                    <p>
                    Đa Thức Tối Tiểu
                    </p>
            `);
            event.preventDefault()
        })
    } else if (id == "DL") {
        $(`.${id}-b1`).click(function(event) {
            $(".ND").toggleClass("ND-b1-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c1")
            $(".KTLQ").empty();
            $('.ND-b1-c1').append(`
               <p> - Định lý tương đương logic: Hai dạng mệnh đề E và F  tương đương với nhau khi và chỉ khi E↔F là hằng đúng.</p>
            `);
            $('.KTLQ-b1-c1').append(`
            <p>
            Qui tắc 1:Trong dạng mệnh đề E, nếu ta thay thế biểu thức con F bởi một dạng mệnh đề tương đương logic thì dạng mệnh đề thu được vẫn còn tương đương logic với E.
           <br> Qui tắc 2: Giả sử dạng mệnh đề E là hằng đúng, nếu ta thay thế một biến p bằng một dạng mệnh đề nào đó thì mệnh đề có được vẫn là hằng đúng.
            
            </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b2`).click(function(event) {
            $(".ND").toggleClass("ND-b2-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c1")
            $(".KTLQ").empty();
            $('.ND-b2-c1').append(`
            <p>Các luật logic:</p>
            <ul>
                <li>Phủ định của phủ định
                    <span>¬¬ p ⇔ p</span>
                </li>
                <li>Luật De Morgan
                    <span>¬ (p ∧ q) ⇔¬ p ∨¬ q </span>
                    <span>¬ (p ∨ q) ⇔¬ p ∧¬ q</span>
                </li>
                <li>Luật giao hoán
                    <span>p ∨ q ⇔ q ∨ p</span>
                    <span>p ∧ q ⇔ q ∧ p</span>
                </li>
                <li>Luật kết hợp
                    <span>(p ∨ q) ∨ r ⇔ p ∨ (q ∨ r)</span>
                    <span>(p ∧ q) ∧ r <=> p ∧ (q ∧ r)</span>
                </li>
                <li>Luật phân phối
                    <span> p ∨ (q ∧ r) ⇔ (p ∨ q) ∧ (p ∨ r)</span>
                    <span>p ∧ (q ∨ r) ⇔ (p ∧ q) ∨ (p ∧ r)</span>
                </li>
                <li>Luật lũy đẳng
                    <span>  p ∨ p ⇔ p </span>
                    <span>  p ∧ p ⇔ p</span>
                </li>
                <li>Luật trung hòa:
                    <span>p ∨ 0 ⇔ p  </span>
                    <span>p ∧ 1 ⇔ p</span>
                </li>
                <li>Luật về phân tử bù
                    <span> p ∧ ¬ p ⇔0 </span>
                    <span> p ∨ ¬ p ⇔1</span>
                </li>
                <li>Luật thống trị
                    <span> p ∧ 0 ⇔ 0    </span>
                    <span>p ∨ 1 ⇔ 1</span>
                </li>
                <li>Luật hấp thụ
                    <span> p ∨ (p∧ q) ⇔ p  </span>
                    <span> p ∧ (p∨ q) ⇔p </span>
                </li>
            </ul>
            `);
            $('.KTLQ-b2-c1').append(`
            <p>
            Qui tắc 1:Trong dạng mệnh đề E, nếu ta thay thế biểu thức con F bởi một dạng mệnh đề tương đương logic thì dạng mệnh đề thu được vẫn còn tương đương logic với E.
           <br> Qui tắc 2: Giả sử dạng mệnh đề E là hằng đúng, nếu ta thay thế một biến p bằng một dạng mệnh đề nào đó thì mệnh đề có được vẫn là hằng đúng.
            
            </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b3`).click(function(event) {
            $(".ND").toggleClass("ND-b3-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c1")
            $(".KTLQ").empty();
            $('.ND-b3-c1').append(`
            <p> Quy Tắc suy diễn: </p>
            <p>+ Trong các chứng minh toán học, xuất phát từ một số khẳng định đúng p, q, r...(tiền đề), ta áp dụng các qui tắc suy diễn để suy ra chân lí của một mệnh đề h mà ta gọi là kết luận.</p>
            <p>+ Nói cách  khác, dùng các qui tắc suy diễn để chứng minh: (p∧q∧r∧... )  có hệ quả logic là  h</p>         
            `);
            $('.KTLQ-b3-c1').append(`
                    <p>
                    Qui tắc 1:Trong dạng mệnh đề E, nếu ta thay thế biểu thức con F bởi một dạng mệnh đề tương đương logic thì dạng mệnh đề thu được vẫn còn tương đương logic với E.
                   <br> Qui tắc 2: Giả sử dạng mệnh đề E là hằng đúng, nếu ta thay thế một biến p bằng một dạng mệnh đề nào đó thì mệnh đề có được vẫn là hằng đúng.
                    
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b4`).click(function(event) {
            $(".ND").toggleClass("ND-b4-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b4-c2")
            $(".KTLQ").empty();
            $('.ND-b4-c2').append(`
            <p>ℜ phản xạ nếu “ ∀x ∈ S, xℜx ” (mọi phần tử của S quan hệ ℜ với chính nó).</p>
            <p>ℜ không phản xạ nếu “ ∃xo ∈ S, xoℜ xo ”.</p>
            <p>(có ít nhất một phần tử của S không quan hệ ℜ với chính nó).</p>
            <p>-  Ví dụ:</p>
            <p>a) S = { 1, 2, 3 } ⊂ T = { 1, 2, 3, 4 }
                Xét quan hệ hai ngôi ℜ trên S (và cũng là quan hệ hai ngôi trên T):.<br>
                ℜ = { (3,3), (2,1), (1,1), (1,3), (2,2) } ⊂ S2 ⊂ T2..<br>
                ℜ (trên S) phản xạ (∀x ∈ S, xℜx) nhưng ℜ (trên T) không phản xạ (∃4 ∈ T, 4 ℜ 4). b) S = R. ∀x, y ∈ S, đặt  [ x γ y  ⇔  x ≤ y + 2 ]	và [ x δ y ⇔ 2x3 ≠ 3y2 ]..<br>
                γ phản xạ ( ∀x ∈ S, x ≤ x + 2 nên x γ x )..<br>
                δ  không phản xạ ( ∃0 ∈ S, 2.03 = 3.02  nên  0 0 ).</p>        
            `);
            $('.KTLQ-b4-c2').append(`
            <p>
            Định nghĩa. Cho Σ là một tập hữu hạn (ta gọi là bảng chữ cái). Tập hợp các chuỗi trên Σ, ký hiệu là Σ∗ , xác định bởi<br>
            λ ∈ Σ∗ , trong đó λ là chuỗi rỗng.  <br>
            Nếu x ∈ Σ, và w ∈ Σ∗ , thì wx ∈ Σ∗ , trong đó wx là kết nối w với x.
            
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b5`).click(function(event) {
            $(".ND").toggleClass("ND-b5-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b5-c2")
            $(".KTLQ").empty();
            $('.ND-b5-c2').append(`
            <p> ℜ đối xứng nếu “ ∀x, y ∈ S, xℜy ⇒ yℜx ”. (mọi cặp phần tử của  S  có quan hệ ℜ theo hai chiều hoặc không có quan hệ ℜ theo bất cứ chiều nào cả).</p>
            <p>ℜ không đối xứng nếu “ ∃xo, yo ∈ S, xoℜyo và yoℜ xo ” .</p>
            <p>(có ít nhất một cặp phần tử của S chỉ quan hệ ℜ theo một chiều).</p>        
                
            `);
            $('.KTLQ-b5-c2').append(`
            <p>
            Định nghĩa. Cho Σ là một tập hữu hạn (ta gọi là bảng chữ cái). Tập hợp các chuỗi trên Σ, ký hiệu là Σ∗ , xác định bởi<br>
            λ ∈ Σ∗ , trong đó λ là chuỗi rỗng.  <br>
            Nếu x ∈ Σ, và w ∈ Σ∗ , thì wx ∈ Σ∗ , trong đó wx là kết nối w với x.
            
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b6`).click(function(event) {
            $(".ND").toggleClass("ND-b6-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b6-c2")
            $(".KTLQ").empty();
            $('.ND-b6-c2').append(`
            <p>ℜ truyền nếu “ ∀x, y, z ∈ S, (xℜy và yℜz) ⇒ xℜz ”. <br>
            ℜ không truyền nếu “ ∃xo, yo, zo ∈ S, (xoℜyo và yoℜxo) và xoℜ zo ” .</p>    
                
            `);
            $('.KTLQ-b6-c2').append(`
            <p>
            Định nghĩa. Cho Σ là một tập hữu hạn (ta gọi là bảng chữ cái). Tập hợp các chuỗi trên Σ, ký hiệu là Σ∗ , xác định bởi<br>
            λ ∈ Σ∗ , trong đó λ là chuỗi rỗng.  <br>
            Nếu x ∈ Σ, và w ∈ Σ∗ , thì wx ∈ Σ∗ , trong đó wx là kết nối w với x.
            
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b7`).click(function(event) {
            $(".ND").toggleClass("ND-b7-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b7-c3")
            $(".KTLQ").empty();
            $('.ND-b7-c3').append(`
            <p>Tính kết hợp: <br>
            với mọi x, y, z ∈ B <br>
           x ∨ (y ∨ z) = (x ∨ y) ∨ z <br>
           x ∧ (y ∧ z) = (x ∧ y) ∧ z</p>
            
                
            `);
            $('.KTLQ-b7-c3').append(`
                    <p>
                    Định lý Nối Rời Chính Tắc
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b8`).click(function(event) {
            $(".ND").toggleClass("ND-b8-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b8-c3")
            $(".KTLQ").empty();
            $('.ND-b8-c3').append(`
            <p>
            Tính giao hoán: <br>
            với mọi x, y ∈ B <br>
            x ∨ y = y ∨ x <br>
             x ∧ y = y ∧ x <br>          
            </p>
            `);
            $('.KTLQ-b8-c3').append(`
                    <p>
                    Định lý Nối Rời Chính Tắc
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b9`).click(function(event) {
            $(".ND").toggleClass("ND-b9-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b9-c3")
            $(".KTLQ").empty();
            $('.ND-b9-c3').append(`
            <p>Tính phân bố:    <br>
            với mọi x, y ∈ B<br>
            x ∨ (y ∧ z) = (x ∨ y) ∧ (x ∨ z)<br>
            x ∧ (y ∨ z) = (x ∧ y) ∨ (x ∧ z)</p>
                
                
            `);
            $('.KTLQ-b9-c3').append(`
                    <p>
                    Định lý Nối Rời Chính Tắc
                    </p>
            `);
            event.preventDefault()
        })
    } else if (id == "DBT") {
        $(`.${id}-b1`).click(function(event) {
            $(".ND").toggleClass("ND-b1-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c1")
            $(".KTLQ").empty();
            $('.ND-b1-c1').append(`
               <p> 
               Một anh cán bộ đang vận động bầu cử tuyên bố: “Nếu tôi được làm bộ trưởng, tôi sẽ thưởng cho anh em trong bộ tháng lương thứ 13”. Thế rồi anh ta lên làm bộ trưởng thật, nhưng không cho nhân viên lương tháng 13. Thế là anh ấy sai! Nhà Toán học Fermat nói: “Cú n là số tự nhiên thì Fn = 2 2 n +1 là một số nguyên tố”. Mới đầu do tính bằng tay, ai cũng ngại, nên cứ cho là đúng. Mãi về sau: Tuy nhiên đến năm 1732, Euler đã phủ định dự đoán trên bằng cách chứng minh F5 là hợp số. Sau đó, người ta còn thấy với là n = 5..9 là số tự nhiên thật, mà Fn = lại không phải là số nguyên tố. Do vậy Giả thuyết của ông Fermat không phải là định luật được!
               </p>
            `);
            $('.KTLQ-b1-c1').append(`
            <p>
            
            </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b2`).click(function(event) {
            $(".ND").toggleClass("ND-b2-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c1")
            $(".KTLQ").empty();
            $('.ND-b2-c1').append(`
            <p>Ví dụ 1. Tìm biểu thức mạch điện tử cho ba công tắc A, B và C cho một phòng lớn có ba cửa ra vào sao cho khi bật một trong ba công tắc thì đèn S đổi trạng thái
            Ví dụ 2. Tìm biểu thức mạch điện tử cho bốn công tắc A, B, C và D cho một phòng lớn có bốn cửa ra vào sao cho khi bật một trong bốn công tắc thì đèn S đổi trạng thái. Khái quát hóa bài toán!
            </p>
            
            `);
            $('.KTLQ-b2-c1').append(`
            <p>
            </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b3`).click(function(event) {
            $(".ND").toggleClass("ND-b3-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c1")
            $(".KTLQ").empty();
            $('.ND-b3-c1').append(`
            <p> Bài ập 1. Trong một cuộc điều tra có 3 nhân chứng A, B và C cùng ngồi với nhau và nghe ý kiến của nhau. Cuối cùng ban điều tra hỏi lại từng người để tìm xem ai nói đúng. Kết quả là: A và B đối kháng nhau, B và C đối lập nhau và C thì bảo A và B đều nói sai. Vậy ban điều tra tin ai? </p>
            <p>Bài tập 2. Có 2 làng A và B ở 2 bên đường. Dân làng A thi luôn nói thật, hỏi điều đúng thì gật đầu, sai thì lắc đầu. Dân làng B luôn nói dối, hỏi điều đúng thì lắc đầu, sai thì gật đầu. Một người khách lạ đến một trong hai làng đó, nhưng không biết mình đang ở làng nào, gặp một người dân, không biết dân làng nào, vì họ hay qua lại giữa hai làng. Người khách muốn hỏi chỉ một câu để người dân cứ gật đầu thì biết mình đang ở làng A, lắc thì biết mình đang ở làng B. Bạn hãy giúp người khách này với!            </p>
            
            `);
            $('.KTLQ-b3-c1').append(`
                    <p>
                   
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b4`).click(function(event) {
            $(".ND").toggleClass("ND-b4-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b4-c2")
            $(".KTLQ").empty();
            $('.ND-b4-c2').append(`
            <p> Dạng 1: Cho R là quan hệ trên {1, 2, 3, 4}. Hãy xét R có những tính chất nào? </p>
            <p> a) R = {(2, 2),(2, 3),(2, 4),(3, 2),(3, 3),(3, 4)} </p>
            <p>b) R = {(1, 1),(1, 2),(2, 1),(2, 2),(3, 3),(4, 4)}</p>
            <p>c) R = {(2, 4),(4, 2)}</p>
            <p>d) R = {(1, 2),(2, 3),(3, 4)} </p>
            <p>e) R = {(1, 1),(2, 2),(3, 3),(4, 4)}</p>
            <p>f) R = {(1, 3),(1, 4),(2, 3),(2, 4),(3, 1),(3, 4)}</p>        
            `);
            $('.KTLQ-b4-c2').append(`
            <p>
           
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b5`).click(function(event) {
            $(".ND").toggleClass("ND-b5-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b5-c2")
            $(".KTLQ").empty();
            $('.ND-b5-c2').append(`
            <p> Dạng 2: Cho S = {a, b, c, d, e, f}.</p>
            <p>a) Viết tập hợp R nếu R là quan hệ tương đương trên S có 3 lớp tương đương là {a, d, f}, {c, e} và {b}. </p>
            <p>b) Trên S có bao nhiêu quan hệ tương đương chia S thành 3 lớp tương đương có số phần tử của các lớp lần lượt là 3, 2, 1 (tương tự như quan hệ tương đương R)?</p>
            <p> c) Trên S có bao nhiêu quan hệ tương đương chia S thành 3 lớp tương đương?</p>
   
            `);
            $('.KTLQ-b5-c2').append(`
            <p>
            
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b6`).click(function(event) {
            $(".ND").toggleClass("ND-b6-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b6-c2")
            $(".KTLQ").empty();
            $('.ND-b6-c2').append(`
            <p>  Dạng 3: Vẽ sơ đồ Hasse cho (S, ≺) rồi toàn phần hóa (sắp xếp topo) các thứ tự bán phần ≺ sau.</p>
            <p>a) S = {a, b, c, d, e, f, g, h, i} với d ≺ a, b ≺ e, g ≺ e, h ≺ f, i ≺ e và h ≺ d. </p>
            <p>b) S = {1, 2, 4, 5, 12, 15, 20} với ≺ là quan hệ | . </p>
            <p>c) S = {2, 3, 6, 7, 8, 9, 12, 16} với ≺ là quan hệ . . ..</p>
            <p> d) S = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} với ≺ là quan hệ | .</p>
          
        
            `);
            $('.KTLQ-b6-c2').append(`
            <p>

           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b7`).click(function(event) {
            $(".ND").toggleClass("ND-b7-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b7-c3")
            $(".KTLQ").empty();
            $('.ND-b7-c3').append(`
            <p> Dạng biểu diễn hàm Boolean:</p>
            <p>1.  Tìm các biểu diễn mở rộng tổng của tích (sum-of-products expansion) của các hàm Boolean sau:</p>
            <p>(a) F(x, y, z) = x+y+z</p>
            <p> (b) F(x, y, z) = (x+z)y</p>
            <p>(c) F(x, y, z) = x</p>
            <p>(d) F(x, y, z) = x¯y</p>
            <p>Chứng minh rằng tổng Boolean y1+y2+... +yn, với yi=xihoặc yi= ¯xi,</p>
            <p> có giá trị bằng 0 với duy nhất 1 bộ giá trị, với: xi= 0 nếu yi=xi, và xi= 1</p>
            <p>    nếu yi= ¯xi. Tổng boolean này được gọi là maxterm</p>
            <p>2.  .Biểu diễn các hàm Boolean sau bằng các toán tử ·và¯</p>
            <p> (a) x+y+z</p>
            <p> (b) x+ ¯y(¯x+z)</p>
            <p>(c) ¯</p>
            <p>x+ ¯y</p>
            <p> (d) ¯x(x+ ¯y+ ¯z</p>
            `);
            $('.KTLQ-b7-c3').append(`
                    <p>
                   
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b8`).click(function(event) {
            $(".ND").toggleClass("ND-b8-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b8-c3")
            $(".KTLQ").empty();
            $('.ND-b8-c3').append(`
            <p>Dạng Cổng Logic</p>
            <p> Xây dựng mạch sử dụng các bộ đảo (inverter), cổng AND và cổng OR để</p>
            <p>  biểu diễn các đầu ra:</p>
            <p>(a) ¯x+y</p>
            <p>(b) ¯</p>
            <p>(x+y)x</p>
            <p>(c) xyz + ¯x¯y¯z</p>
            <p>(d) ¯</p>
            <p>(¯x+z)(y+ ¯z)</p>
            <p>Thiết kế mạch thực hiện bầu đa số cho 5 cá nhân.</p>
            <p>Xây dựng 1 mạch điện cho 1 chiếc đèn được điều khiển bởi 4 công tắc, sao</p>
            <p>cho khi bật 1 công tấc khi đèn tắt thì bật đèn, còn bật 1 công tắc khi đèn bật
                thì tắt đèn</p>
            `);
            $('.KTLQ-b8-c3').append(`
                    <p>
                    
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b9`).click(function(event) {
            $(".ND").toggleClass("ND-b9-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b9-c3")
            $(".KTLQ").empty();
            $('.ND-b9-c3').append(`
            <p>    Vẽ K-map biểu diễn các mở rộng tổng của tích 2 biến sau:</p>
            <p>x¯y</p>
            <p> xy + ¯x¯y</p>
            <p>xy + ¯xy +x¯y+ ¯x¯y</p>
            <p> Vẽ K-map biểu diễn các mở rộng tổng của tích 3 biến sau:</p>
            <p> (a) x¯y¯z</p>
            <p>(b) ¯xyz + ¯x¯y¯z</p>
            <p>(c) xyz +xy¯z+ ¯xy¯z+ ¯x¯yz</p>
            <p>Tìm các ô trong 1 K-map của hàm Boolean 5 biến tương ứng với các tích</p> 
            `);
            $('.KTLQ-b9-c3').append(`
                    <p>
                   
                    </p>
            `);
            event.preventDefault()
        })
    } else {
        $(`.${id}-b1`).click(function(event) {
            $(".ND").toggleClass("ND-b1-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b1-c1")
            $(".KTLQ").empty();
            $('.ND-b1-c1').append(`
               <p> 
               <br> Trong loạt bài viết này, mình sẽ đề cập và làm rõ phần Logic mệnh đề để các bạn có cái nhìn tổng quan về Logic mệnh đề, ứng dụng và phương pháp Logic mệnh đề Đối với khá nhiều bài toán Logic nhờ cách đặt “ẩn” t ương ứng, rồi diễn đạt các điều kiện được cho trong mỗi bài toán bằng các “biều thức logic”. 
               <br> Sau đó nhờ các luật của Logic mệnh đề m à suy ra đáp án. 
               <br> 1.1 ĐỊNH NGHĨA MỆNH ĐỀ, GIÁ TRỊ CỦA MỆNH ĐỀ Mệnh đề là một câu trọn nghĩa (một khẳng định) mà nội dung của nó phản ánh đúng (true) hoặc sai (or false) thực tế khác quan. 
               <br>Mệnh đề đúng: Nếu nội dung của mệnh đề (A) phản ánh đúng thực tế khác quan, thì nó được gọi là mệnh đề đúng hay mệnh đề nhận giá trị đúng (viết A=Đ hay A=1) 
               <br>Mệnh đề sai: Nếu nội dung của mệnh đề (A) phản ánh sai thực tế khác quan, thì nó được gọi là mệnh đề sai hay mệnh đề nhận giá trị sai (viết A=S hay A=0) Không có mệnh đề vừa đúng vừa sai. 
           
               </p>
            `);
            $('.KTLQ-b1-c1').append(`
            <p>
            
            </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b2`).click(function(event) {
            $(".ND").toggleClass("ND-b2-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b2-c1")
            $(".KTLQ").empty();
            $('.ND-b2-c1').append(`
            <p>
            <br>c) Phép tuyển Mệnh đề mà nó chỉ sai khi cả mệnh đề A và B đều sai được gọi là mệnh đề tuyển (hay tuyển) của mệnh đề A và B. Ký hiệu hoặc A + B. Bảng giá trị: Toán cao cấp tập 1 
            <br>d) Phép kéo theo Mệnh đề mà nó chỉ sai khi mệnh đề A đúng và mệnh đề B sai được gọi là mệnh đề A kéo theo B. 
            <br>e) Phép tương đương Mệnh đề mà nó chỉ đúng khi mệnh đề A và mệnh đề B nhận c ùng một giá trị được gọi là A tương đương với B. Ký hiệu: hoặc Bảng giá trị: Toán cao cấp tập 1 1.3 Công thức Logic mệnh đề
            <br>1) Định nghĩa 
            <br>a) Các biến mệnh đề: x, y, z…, X, Y, Z,… đ ược thừa nhận là các công thức của logic mệnh đề
            <br>b) Nếu A, B là công thức của logic mệnh đề thì là các công thức của Logic mệnh đề 
            <br>c) Chỉ các biểu thức được xác định ở mục a) hoặc mục b) mới là công thức của logic mệnh đề. 2) Giá trị của công thức 3) Công thức hàng đúng, hằng sai và thỏa được 4) C

            </p>
            
            `);
            $('.KTLQ-b2-c1').append(`
            <p>
           
            </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b3`).click(function(event) {
            $(".ND").toggleClass("ND-b3-c1")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b3-c1")
            $(".KTLQ").empty();
            $('.ND-b3-c1').append(`
            <p> Quy Tắc suy diễn: </p>
            <p>+ Trong các chứng minh toán học, xuất phát từ một số khẳng định đúng p, q, r...(tiền đề), ta áp dụng các qui tắc suy diễn để suy ra chân lí của một mệnh đề h mà ta gọi là kết luận.</p>
            <p>+ Nói cách  khác, dùng các qui tắc suy diễn để chứng minh: (p∧q∧r∧... )  có hệ quả logic là  h</p>         
            `);
            $('.KTLQ-b3-c1').append(`
                    <p>
                    Qui tắc 1:Trong dạng mệnh đề E, nếu ta thay thế biểu thức con F bởi một dạng mệnh đề tương đương logic thì dạng mệnh đề thu được vẫn còn tương đương logic với E.
                   <br> Qui tắc 2: Giả sử dạng mệnh đề E là hằng đúng, nếu ta thay thế một biến p bằng một dạng mệnh đề nào đó thì mệnh đề có được vẫn là hằng đúng.
                    
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b4`).click(function(event) {
            $(".ND").toggleClass("ND-b4-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b4-c2")
            $(".KTLQ").empty();
            $('.ND-b4-c2').append(`
            <p>   
            <br>B1: Lập bảng giá trị 
            <br>B2: Kết luận Nếu hai cột cuối c ùng hoàn toàn gi ống nhau thì A = B, trường hợp hai
            <br>∙ cột cuối khác nhau thì A khác B. 1.5 Các luật Logic mệnh đề
            <br> Một số đóng vai trò như các hằng đẳng thức đáng nhớ, được sử dụng thường xuyên trong khi biến đổi công thức và giải các bài toán logic đồng thời được gọi là các quy luật của Logic Mệnh đề. Sau đây là liệt kê 23 luật Logic mệnh đề quan trọng nhất của logic mệnh đề 
            <br>(Nhiều hơn hẳn so với Toán cao cấp tập 1 phải không nào ) (Thay kéo theo bằng phủ định và tuyển) (Phân phối của tuyển đối với hội) (Phân phối của tuyển đối với hội) (Luật DeMorgan) (Luật DeMorgan) (Thay phép tương đương)
            <br>(Luật hấp thụ của hội đối với tuyển) (Luật hấp thụ của tuyển đối với hội) (Luật hấp thụ) (Luật hấp thụ) (Tính giao hoán của Hội) (Tính giao hoán của Tuyển) (Tính chất kết hợp của Hội) (Tính chất kết hợp của Tuyển) (Tích lũy đẳng của Hội) 
            <br>(Tích lũy đẳng của Tuyển) (A và không A luôn luôn sai) (A và không A luôn luôn đúng) (A và hằng sai luôn luôn sai) (A hay hằng sai luôn là A) (A và hằng đúng luôn là A) (A hay hằng đúng luôn hằng đúng) (Hai lần phủ định của mệnh đề A lại chính là A)
            </p>
                   
            `);
            $('.KTLQ-b4-c2').append(`
            <p>
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b5`).click(function(event) {
            $(".ND").toggleClass("ND-b5-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b5-c2")
            $(".KTLQ").empty();
            $('.ND-b5-c2').append(`
            <p> ℜ đối xứng nếu “ ∀x, y ∈ S, xℜy ⇒ yℜx ”. (mọi cặp phần tử của  S  có quan hệ ℜ theo hai chiều hoặc không có quan hệ ℜ theo bất cứ chiều nào cả).</p>
            <p>ℜ không đối xứng nếu “ ∃xo, yo ∈ S, xoℜyo và yoℜ xo ” .</p>
            <p>(có ít nhất một cặp phần tử của S chỉ quan hệ ℜ theo một chiều).</p>        
                
            `);
            $('.KTLQ-b5-c2').append(`
            <p>
            Định nghĩa. Cho Σ là một tập hữu hạn (ta gọi là bảng chữ cái). Tập hợp các chuỗi trên Σ, ký hiệu là Σ∗ , xác định bởi<br>
            λ ∈ Σ∗ , trong đó λ là chuỗi rỗng.  <br>
            Nếu x ∈ Σ, và w ∈ Σ∗ , thì wx ∈ Σ∗ , trong đó wx là kết nối w với x.
            
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b6`).click(function(event) {
            $(".ND").toggleClass("ND-b6-c2")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b6-c2")
            $(".KTLQ").empty();
            $('.ND-b6-c2').append(`
            <p>Cho a , b ∈ Zn. Ta tìm x ∈ Zn thỏa a . x = b (1).
            <br>a)Nếu a = 0 ≠ b thì phương trình vô nghiệm.
            <br>b)Nếu a = 0 = b thì phương trình có n nghiệm là x tùy ý thuộc Zn .
            <br>c)Nếu a ∈ U(Zn) thì phương trình có nghiệm duy nhất là x = a −1 b .
            </p>    
                
            `);
            $('.KTLQ-b6-c2').append(`
            <p>
           </p>
        
            `);
            event.preventDefault()
        })
        $(`.${id}-b7`).click(function(event) {
            $(".ND").toggleClass("ND-b7-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b7-c3")
            $(".KTLQ").empty();
            $('.ND-b7-c3').append(`
            <p>
                Để giải phương trình hay hệ phương trình trong Zn ta sử dụng msolve(eqns, n), trong đó eqns là phương trình hoặc tập hợp các phương trình
            </p>
            
                
            `);
            $('.KTLQ-b7-c3').append(`
                    <p>
                  
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b8`).click(function(event) {
            $(".ND").toggleClass("ND-b8-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b8-c3")
            $(".KTLQ").empty();
            $('.ND-b8-c3').append(`
            <p>
            <br> a. f (x, y,z) = x ∨ y ∨ x(y ∨ z)
            <br>b. f (x, y,z,t) = (xy ∨ zt)(x ∨ z)(xz ∨ yt)(xt ∨ yz) 
            <br> c. f (x, y,z,t) = (x ∨ yz)(y ∨ xz)(z ∨ xy) 
            <br>d. f (x, y,z,t) = yz ∨ (z ∨ x)t ∨ (xy ∨ yz ∨ xt)xyt 
            <br>e. f (x, y,z,t) = (xy ∨ yt)z ∨ [xt(x ∨ y)(z ∨ t)]∨ [(x ∨ z)( y ∨ t)]∨ [(x ∨ t)( y ∨ z)]
            </p>
            `);
            $('.KTLQ-b8-c3').append(`
                    <p>
                
                    </p>
            `);
            event.preventDefault()
        })
        $(`.${id}-b9`).click(function(event) {
            $(".ND").toggleClass("ND-b9-c3")
            $(".ND").empty();
            $(".KTLQ").toggleClass("KTLQ-b9-c3")
            $(".KTLQ").empty();
            $('.ND-b9-c3').append(`
            <p>
            <br>bước 1: Tìm tất cả các tế bào lớn của biểu đồ Karnaugh của f. Ghi số của các tế bào vào từng ô thuộc Kar(f) trong bảng mã gọi là bảng “tổng hợp”.
            <br>Bước 2: Tìm từ trái sang phải , từ trê n xuống dưới nhưng ô chỉ có duy nhất một tế bào lớn bao phủ nó, ta chọn tế bào lớn duy nhất đó vào danh sách L.
            <br>Bước 3: nếu các tế bào lớn trong danh sách L đã phủ Karnaugh của f thì ta bước sang bước 4. nếu không
            Ta chọn 1 ô trong Kar(f) chưa được họ L phủ, chọn một lớp tế bào lớn phủ ô đó vào danh sách L
            kiểm tra xem có thể bỏ bớt  tế bào lớn nào ra khỏi danh sách L mà không ảnh hưởng đến phần hợp của các tế bào lớn trong L hay không.
            trở lại đầu bước 3
            <br>Bước 4: L là một họ phủ tối thiểu của Kar(f).
            </p>
                
                
            `);
            $('.KTLQ-b9-c3').append(`
                    <p>
                    
                    </p>
            `);
            event.preventDefault()
        })
    }
}